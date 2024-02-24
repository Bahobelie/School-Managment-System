import { Button, FormControl, Grid, Input, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { Header } from './header';
import { Branch } from './MokJson/constantJosn';
import { BloodGroup } from './MokJson/constantJosn';
import { StudentCategoryList } from './MokJson/constantJosn';
import { toast } from 'react-toastify';
const StudentAdmission = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    class: '',
    section: '',
    branch: '',
    address: ''
  });
  const handleFormSubmit = (event) => {
    console.log('clicked');
    event.preventDefault();
    const emptyFields = Object.keys(formData).filter((key) => formData[key] === '');
    if (emptyFields.length > 0) {
      toast.success('Student added Successfully');
      return;
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  return (
    <MainCard
      title='New Student'
      secondary={<Header />}
    >
      <form onSubmit={handleFormSubmit}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={6}>
            <SubCard title="Basic Information">
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <TextField id="name" label="Name" fullWidth sx={{ width: '100%' }} onChange={handleChange} />
                </Grid>
                <Grid item>
                  <TextField id="age" label="Age" fullWidth sx={{ width: '100%' }} onChange={handleChange} />
                </Grid>
                <Grid item>
                  <TextField id="gender" label="Gender" fullWidth sx={{ width: '100%' }} onChange={handleChange} />
                </Grid>
                <Grid item>
                  <Typography sx={{ marginBottom: 1 }} variant={'caption'}>
                    Class*
                  </Typography>
                  <FormControl fullWidth>
                    <Select>
                      <MenuItem value="Class 1">Class 1</MenuItem>
                      <MenuItem value="Class 2">Class 2</MenuItem>
                      <MenuItem value="Class 3">Class 3</MenuItem>
                      <MenuItem value="Class 4">Class 4</MenuItem>
                      <MenuItem value="Class 5">Class 5</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <Typography sx={{ marginBottom: 1 }} variant={'caption'} onChange={handleChange}>
                    Section*
                  </Typography>
                  <FormControl fullWidth>
                    <Select>
                      <MenuItem value="Class 1">Section A</MenuItem>
                      <MenuItem value="Class 2">Section B</MenuItem>
                      <MenuItem value="Class 3">Section C</MenuItem>
                      <MenuItem value="Class 4">Section D</MenuItem>
                      <MenuItem value="Class 5">Section E</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <Typography sx={{ marginBottom: 1 }} variant={'caption'}>
                    Branch*
                  </Typography>
                  <FormControl fullWidth>
                    <Select>
                      {Object.keys(Branch).map((key) => (
                        <MenuItem key={key} value={key}>
                          {Branch[key]}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </SubCard>
          </Grid>
          <Grid item xs={12} sm={6}>
            <SubCard title="Contact Information">
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <TextField id="address" label="Address" fullWidth onChange={handleChange} />
                </Grid>
                <Grid item>
                  <TextField id="email" label="Email" fullWidth onChange={handleChange} />
                </Grid>
                <Grid item>
                  <TextField id="phone" label="Phone" fullWidth onChange={handleChange} />
                </Grid>
                <Grid item>
                  <Typography sx={{ marginBottom: 1 }} variant={'caption'}>
                    Category*
                  </Typography>
                  <FormControl fullWidth>
                    <Select>
                      {Object.keys(StudentCategoryList).map((key)=>(
                        <MenuItem key={key} value={key}>{StudentCategoryList[key].name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <Typography sx={{ marginBottom: 1 }} variant={'caption'}>
                    Admission Date*
                  </Typography>
                  <TextField id="phone" type={'date'} fullWidth />
                </Grid>
                <Grid item>
                  <Typography sx={{ marginBottom: 1 }} variant={'caption'}>
                    BloodGroup*
                  </Typography>
                  <FormControl fullWidth>
                    <Select>
                      {Object.keys(BloodGroup).map((key)=>(
                        // eslint-disable-next-line react/jsx-key
                        <MenuItem value={BloodGroup[key]}>{BloodGroup[key].value}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </SubCard>
          </Grid>
          <Grid item xs={12}>
            <SubCard title="Parents/Guardians Information">
              <Grid container direction="column" spacing={5}>
                <Grid container item spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField id="FatherName" label="Father's Name" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField id="FatherEmail" label="Father's Email" fullWidth />
                  </Grid>
                </Grid>
                <Grid container item spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField id="FatherPhone" label="Father's Phone" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input type="file" accept="image/*" sx={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px' }} />
                  </Grid>
                </Grid>
                <Grid container item spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField id="MotherName" label="Mother's Name" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField id="MotherEmail" label="Mother's Email" fullWidth />
                  </Grid>
                </Grid>
                <Grid container item spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField id="MotherPhone" label="Mother's Phone" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input type="file" accept="image/*" sx={{ border: '1px solid #ccc', borderRadius: '12px', padding: '8px' }} />
                  </Grid>
                </Grid>
                <Grid container item spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField id="GuardianName" label="Guardian's Name" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField id="GuardianEmail" label="Guardian's Email" fullWidth />
                  </Grid>
                </Grid>
                <Grid container item spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField id="GuardianPhone" label="Guardian's Phone" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input type="file" accept="image/*" sx={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px' }} />
                  </Grid>
                </Grid>
              </Grid>
            </SubCard>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button sx={{ marginTop: 5 }} type="submit" variant="contained" color="primary">
            Add Student
          </Button>
        </Grid>
      </form>
    </MainCard>
  );
};

export default StudentAdmission;
