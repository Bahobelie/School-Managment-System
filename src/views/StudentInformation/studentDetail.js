import React, { useState } from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  Grid,
  Button,
  Typography,
  Menu,
} from '@mui/material';
import { useSelector } from 'react-redux';
import {
  DataGrid,
  GridToolbar,
  GridPrintGetRowsToExportParams,
  gridFilteredSortedRowIdsSelector,
  selectedGridRowsSelector,
  GridRowId,
} from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useTheme } from '@mui/material/styles';
import { studentData } from './StudentJson';


const getSelectedRowsToExport = ({ apiRef }: GridPrintGetRowsToExportParams): GridRowId[] => {
  const selectedRowIds = selectedGridRowsSelector(apiRef);
  if (selectedRowIds.size > 0) {
    return Array.from(selectedRowIds.keys());
  }
  return gridFilteredSortedRowIdsSelector(apiRef);
};

const StudentDetail = () => {
  const theme=useTheme();
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const selectedBranch = useSelector((state) => state.customization.selectedBranch);

  const handleSearch = () => {
    const filtered = studentData.filter(student =>
      student.name.toLowerCase().includes(searchKeyword.toLowerCase()) &&
      (selectedClass === '' || student.class.toLowerCase() === selectedClass.toLowerCase()) &&
      (selectedSection === ''|| student.section.toLowerCase() === selectedSection.toLowerCase()) &&
      student.branch.toLowerCase() === selectedBranch.toLowerCase()
    );
    setFilteredData(filtered);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={4}>
          <Typography sx={{ marginBottom: 1 }} variant={'caption'}>Class*</Typography>
          <FormControl fullWidth>
            <Select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Class 1">Class 1</MenuItem>
              <MenuItem value="Class 2">Class 2</MenuItem>
              <MenuItem value="Class 3">Class 3</MenuItem>
              <MenuItem value="Class 4">Class 4</MenuItem>
              <MenuItem value="Class 5">Class 5</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <Typography sx={{ marginBottom: 1 }} variant={'caption'}>Section*</Typography>
          <FormControl fullWidth>
            <Select value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Section A">Section A</MenuItem>
              <MenuItem value="Section B">Section B</MenuItem>
              <MenuItem value="Section C">Section C</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <Typography sx={{ marginBottom: 1.5 }} variant={'caption'}>Search BY KeyWord*</Typography>
          <TextField fullWidth label="Search" value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} />
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" sx={{
            marginTop: 2,
            borderRadius: '4px',
            boxShadow: 'none',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            letterSpacing: '1px',
            paddingLeft: '16px',
            paddingRight: '16px',
            '&:hover': {
              backgroundColor: '#1e88e5',
              boxShadow: 'none',
            },
          }} color="primary" onClick={handleSearch}>
            Search
          </Button>
        </Grid>
      </Grid>

      {filteredData.length > 0 && (
        <div style={{ marginTop: 20, backgroundColor: '#f8f9f1' }}>
          <Typography variant='h4' sx={{marginBottom:4}}>Students List</Typography>
          <DataGrid
            rows={filteredData}
            columns={[
              { field: 'id', headerName: 'ID', width: 90 },
              {
                field: 'name',
                headerName: 'Name',
                width: 200,
                renderCell: (params) => (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={params.row.avatar}
                      alt={params.row.name}
                      style={{ width: 34, height: 34, marginRight: 8, borderRadius: '50%' }}
                    />
                    {params.value}
                  </div>
                ),
              },
              { field: 'class', headerName: 'Class', width: 120 },
              { field: 'section', headerName: 'Section', width: 120 },
              { field: 'branch', headerName: 'Branch', width: 150 },
              {
                field: 'actions',
                headerName: 'Actions',
                width: 120,
                renderCell: () => {
                  return (
                    <>
                      <Button onClick={handleMenuOpen}>
                        <MoreVertIcon />
                      </Button>
                      <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                      >
                        <MenuItem onClick={handleMenuClose} sx={{ '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' } }}>
                          <EditIcon sx={{ color: theme.palette.secondary[200], marginRight: 1 }} />
                          <Typography variant="inherit" sx={{ flexGrow: 1 }}>Edit</Typography>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose} sx={{ '&:hover': { backgroundColor: 'rgba(255, 0, 0, 0.1)' } }}>
                          <DeleteIcon sx={{ color: 'red', marginRight: 1 }} />
                          <Typography variant="inherit" sx={{ flexGrow: 1 }}>Delete</Typography>
                        </MenuItem>
                      </Menu>
                    </>
                  );
                },
              },
            ]}
            checkboxSelection
            loading={false}
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: { printOptions: { getRowsToExport: getSelectedRowsToExport } },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default StudentDetail;
