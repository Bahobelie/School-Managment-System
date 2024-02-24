import React, { useRef, useState } from 'react';
import { Button, Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableRow, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { toast } from 'react-toastify';

import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import { Header } from '../StudentInformation/header';
import { StudentCategoryList } from './MokJson/constantJosn';
import { gridSpacing } from 'store/constant';

const StudentCategory = () => {
  const [categoryList, setCategoryList] = useState(StudentCategoryList);
  const [newCategory, setNewCategory] = useState('');
  const [editedCategoryId, setEditedCategoryId] = useState(null);
  const componentRef = useRef();
  const handleSave = () => {
    if (newCategory.trim() !== '') {
      toast.success('Record Saved Successfully');
      const newCategoryId = categoryList.length + 1;
      const newCategoryItem = { id: newCategoryId, name: newCategory };
      setCategoryList([...categoryList, newCategoryItem]);
      setNewCategory('');
    }
  };

  const handleDelete = (id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this record?');
    if (isConfirmed) {
      const updatedCategoryList = categoryList.filter((category) => category.id !== id);
      toast.success('Record Deleted Successfully');
      setCategoryList(updatedCategoryList);
    } else {
      console.log('confirm not success');
    }
  };

  const handleEdit = (id) => {
    setEditedCategoryId(id);
  };

  const handleInputChange = (id, newValue) => {
    const updatedCategoryList = categoryList.map((category) => {
      if (category.id === id) {
        return { ...category, name: newValue };
      }
      return category;
    });
    setCategoryList(updatedCategoryList);
  };

  const handleSaveEdit = (id, newName) => {
    const updatedCategoryList = categoryList.map((category) => {
      if (category.id === id) {
        toast.success('Record Update Successfully');
        return { ...category, name: newName };
      }
      return category;
    });
    setCategoryList(updatedCategoryList);
    setEditedCategoryId(null);
  };
  return (
    <MainCard title="Student Category" secondary={<Header />}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={6}>
          <SubCard title="Category *">
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <TextField
                  id="category"
                  value={newCategory}
                  label="category"
                  fullWidth
                  sx={{ width: '100%' }}
                  onChange={(e) => setNewCategory(e.target.value)}
                />
              </Grid>
              <Grid item container justifyContent="flex-end">
                <Button variant="outlined" sx={{ marginTop: 3 }} onClick={handleSave}>
                  Save
                </Button>
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <SubCard title="Category List">
            <TableContainer ref={componentRef}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                  {categoryList.map((category) => (
                    <TableRow key={category.id}>
                      <TableCell>{category.id}</TableCell>
                      <TableCell align="right">
                        {editedCategoryId === category.id ? (
                          <TextField
                            value={category.name}
                            fullWidth
                            onChange={(e) => handleInputChange(category.id, e.target.value)}
                            onBlur={() => setEditedCategoryId(null)}
                          />
                        ) : (
                          category.name
                        )}
                      </TableCell>
                      <TableCell align="right">
                        {editedCategoryId === category.id ? (
                          <IconButton aria-label="save" size="small" onClick={() => handleSaveEdit(category.id, category.name)}>
                            <SaveIcon />
                          </IconButton>
                        ) : (
                          <IconButton aria-label="edit" size="small" onClick={() => handleEdit(category.id, category.name)}>
                            <EditIcon />
                          </IconButton>
                        )}
                        <IconButton aria-label="delete" size="small" onClick={() => handleDelete(category.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </SubCard>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default StudentCategory;
