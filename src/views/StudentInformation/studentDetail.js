import React, { useState } from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  Grid,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody, Typography
} from '@mui/material';
import { useSelector } from 'react-redux';

// deleted Test Json
const studentData = [
  { id: 1, name: 'John Doe', class: 'Class 1', section: 'Section A', branch: 'Addis Ababa Aware Branch' },
  { id: 111, name: 'John Doe', class: 'Class 1', section: 'Section A', branch: 'Addis Ababa Lebu Branch' },
  { id: 11, name: 'John Doe', class: 'Class 1', section: 'Section A', branch: 'Addis Ababa Weyra Branch' },
  { id: 1111, name: 'John Doe', class: 'Class 1', section: 'Section A', branch: 'Addis Ababa Weyra Branch' },
  { id: 111, name: 'John Doe', class: 'Class 1', section: 'Section A', branch: 'Addis Ababa Aware Branch' },
  { id: 2, name: 'Jane Smith', class: 'Class 2', section: 'Section B', branch: 'Branch 1' },
  { id: 3, name: 'Alice Johnson', class: 'Class 1', section: 'Section A', branch: 'Branch 2' },
  { id: 4, name: 'Bob Brown', class: 'Class 3', section: 'Section C', branch: 'Branch 3' },
  { id: 5, name: 'Emma Wilson', class: 'Class 2', section: 'Section B', branch: 'Branch 4' },
];


const StudentDetail = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const selectedBranch = useSelector((state)=>state.customization.selectedBranch);
  const handleSearch = () => {
    const filtered = studentData.filter(student =>
      student.name.toLowerCase().includes(searchKeyword.toLowerCase()) &&
      (selectedClass === null || student.class.toLowerCase() === selectedClass.toLowerCase()) &&
      (selectedSection === null || student.section.toLowerCase() === selectedSection.toLowerCase()) &&
      student.branch.toLowerCase() === selectedBranch.toLowerCase()
    );
    setFilteredData(filtered);
  };
console.log(selectedBranch.toLowerCase());
  return (
    <div>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={4}>
          <Typography sx={{marginBottom:1}} variant={'caption'}>Class*</Typography>
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
          <Typography sx={{marginBottom:1}} variant={'caption'}>Section*</Typography>
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
          <Typography sx={{marginBottom:1}} variant={'caption'}>Search BY KeyWord*</Typography>
          <TextField fullWidth label="Search" value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} />
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" color="primary" onClick={handleSearch}>
            Search
          </Button>
        </Grid>
      </Grid>

      {filteredData.length > 0 && (
        <Table sx={{marginTop:4,backgroundColor:'white'}}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Section</TableCell>
              <TableCell>Beranch</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map(student => (
              <TableRow key={student.id}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.class}</TableCell>
                <TableCell>{student.section}</TableCell>
                <TableCell>{student.branch}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default StudentDetail;
