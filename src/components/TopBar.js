import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import logo from '../assets/logo.svg';

const TopBar = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <img src={logo} alt="AtoB Logo" style={{ height: '28px', marginRight: '16px' }} />
        <Typography variant="h6" noWrap component="div">
          AtoB Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
