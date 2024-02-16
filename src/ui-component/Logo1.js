import React from 'react';
import { Box } from '@mui/material';
import logo from './../assets/images/auth/auth-user-login-card.png';

const Logo1 = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 55,
          ml:19
        }}
      >
        <img src={logo} alt="SMS" width="370"  height={'350'} />
      </Box>
    </Box>
  );
};

export default Logo1;
