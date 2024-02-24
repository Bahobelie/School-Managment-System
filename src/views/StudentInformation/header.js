import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigtor=useNavigate();
  const GoBack=(reference)=>{
    if (reference==='Home'){navigtor('/dashboard/default');}
    else navigtor('/StudentInformation/student-List');
  };
  return (
    <Box><Button sx={{marginRight:3}} variant="outlined" onClick={()=>GoBack('Back')}>
      Back</Button><Button variant="outlined" onClick={()=>GoBack('Home')}>Home
    </Button>
    </Box>
  );
};
