import React, { useState } from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  Grid,
  Button,
  Typography,
  Menu
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
import { studentData } from './../MokJson/constantJosn';
import { useNavigate } from 'react-router-dom';
import NotFound from '../../utilities/NotFound';
const getSelectedRowsToExport = ({ apiRef }: GridPrintGetRowsToExportParams): GridRowId[] => {
  const selectedRowIds = selectedGridRowsSelector(apiRef);
  if (selectedRowIds.size > 0) {
    return Array.from(selectedRowIds.keys());
  }
  return gridFilteredSortedRowIdsSelector(apiRef);
};

const StudentLIst = ({additionalFilters}) => {
  const theme=useTheme();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedGender, setselectedGender] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const selectedBranch = useSelector((state) => state.customization.selectedBranch);
  const navigtor=useNavigate();
  const handleSearch = () => {
    const filtered = studentData.filter(student => {
      let passFilters = true;
      // Apply the default filters
      passFilters = passFilters && (student.category.toLowerCase() === selectedCategory.toLowerCase() || selectedCategory === '');
      passFilters = passFilters && (student.gender.toLowerCase() === selectedGender.toLowerCase() ||selectedGender === '');
      passFilters = passFilters && (student.class.toLowerCase() === selectedClass.toLowerCase() || selectedClass==='' );
      passFilters = passFilters && (selectedSection === '' || student.section.toLowerCase() === selectedSection.toLowerCase());
      passFilters = passFilters && student.branch.toLowerCase() === selectedBranch.toLowerCase();

      // Apply additional filters if provided
      if (additionalFilters) {
        Object.keys(additionalFilters).forEach(filterKey => {
          passFilters = passFilters && student[filterKey] === additionalFilters[filterKey];
        });
      }
console.log(passFilters);
      return passFilters;
    });
    setFilteredData(filtered);
  };

  const handelNameCellClick=(student)=>{
    navigtor(`/StudentInformation/student-Detail/${student.id}`,{state:{student}});
    console.log(student);

  }
  const renderNameCell=(params)=>{
    const student = params.row;
    const handleClick = () => {
      handelNameCellClick(student);
    };
    return (
      <Button
        onClick={handleClick}
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
      >
        <img
          src={params.row.avatar}
          alt={params.row.name}
          style={{ width: 34, height: 34, marginRight: 8, borderRadius: '50%' }}
        />
        {params.value}
      </Button>
    );
  };
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const CustomToolBar = () => (
    <div
      style={{
        position: 'relative',
        top: 0,
        right: 0,
        marginLeft:'74rem',
        marginBottom:'1rem',
        borderTop: '1px solid #ddd',
        pointerEvents: 'auto',
      }}
    >
      <GridToolbar />
    </div>
  );
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={4}>
          <Typography sx={{ marginBottom: 1 }} variant={'caption'}>Class*</Typography>
          <FormControl fullWidth sx={{width:"17rem"}}>
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
          <FormControl fullWidth sx={{width:"20rem"}}>
            <Select value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Section A">Section A</MenuItem>
              <MenuItem value="Section B">Section B</MenuItem>
              <MenuItem value="Section C">Section C</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <Typography sx={{ marginBottom: 1 }} variant={'caption'}>Category*</Typography>
          <FormControl fullWidth sx={{width:"17rem"}}>
            <Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Section A">Section A</MenuItem>
              <MenuItem value="Section B">Section B</MenuItem>
              <MenuItem value="Section C">Section C</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <Typography sx={{ marginBottom: 1 }} variant={'caption'}>Gender*</Typography>
          <FormControl fullWidth sx={{width:"17rem"}}>
            <Select value={selectedGender} onChange={(e) => setselectedGender(e.target.value)}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Section A">Section A</MenuItem>
              <MenuItem value="Section B">Section B</MenuItem>
              <MenuItem value="Section C">Section C</MenuItem>
            </Select>
          </FormControl>
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

      {filteredData.length > 0?  (
        <div style={{ marginTop: 25, backgroundColor: 'white' ,padding:15}}>
          <DataGrid
            rows={filteredData}
            columns={[
              { field: 'id', headerName: 'ID', width: 90 },
              {
                field: 'name',
                headerName: 'Name',
                width: 200,
                renderCell: renderNameCell,
              },
              { field: 'class', headerName: 'Class', width: 120 },
              { field: 'age', headerName: 'Age', width: 150 },
              { field: 'gender', headerName: 'Gender', width: 150 },
              { field: 'email', headerName: 'Email', width: 150 },
              { field: 'phone', headerName: 'Phone', width: 150 },
              { field: 'FatherName', headerName: 'ParentName', width: 150 },
              { field: 'FatherEmail', headerName: 'ParentEmail', width: 150 },
              { field: 'FatherPhone', headerName: 'ParentPhone', width: 150 },
              { field: 'section', headerName: 'Section', width: 120 },
              { field: 'branch', headerName: 'Branch', width: 150 },
              { field: 'status', headerName: 'Status', width: 150,
                renderCell:(params)=>(<div> {params.value==='Active'?
                  (<Button variant='text' style={{ backgroundColor: 'rgba(0, 167, 111, 0.16)',
                    padding: '0px 6px',
                    fontSize:' 0.75rem',
                    fontWeight: '700',
                    color: 'rgb(0, 120, 103)' }}>
                    {params.value}
                  </Button>):((<Button variant="text" style={{ backgroundColor: 'rgba(255, 86, 48, 0.16)',
                      padding: '0px 6px',
                      fontSize:' 0.75rem',
                      fontWeight: '700',
                      color: 'rgb(183, 29, 24)' }}>
                      {params.value}
                    </Button>)
                  )}</div>) },
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
            disableRowSelectionOnClick
            loading={false}
            slots={{toolbar:CustomToolBar}}
            slotProps={{
              toolbar: { printOptions: { getRowsToExport: getSelectedRowsToExport } },
            }}
          />
        </div>
      ):(<NotFound/>)}
    </div>
  );
};

export default StudentLIst;
