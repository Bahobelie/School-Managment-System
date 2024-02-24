import React from 'react';
import MuiTypography from '@mui/material/Typography';
import NoData from './../../assets/images/img.png';
 const NotFound = () => {
  return (
    <div style={{marginTop:'45px',alignItems:'center',justifyContent:'center',display:'flex'}}>
      <MuiTypography variant={'h5'} sx={{ color: 'red' }}>
        No data available in table
      </MuiTypography>
      <img src={NoData } alt="empty" />
      <MuiTypography variant={'h5'}> Add new record or search with different criteria</MuiTypography>
    </div>
  );
 };
export default NotFound;