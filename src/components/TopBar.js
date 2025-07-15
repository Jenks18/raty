import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import logo from '../assets/logo.svg';

const drawerWidth = 240;

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const TopBar = ({ open }) => {
  return (
    <StyledAppBar position="fixed" open={open}>
      <Toolbar>
        <img src={logo} alt="AtoB Logo" style={{ height: '28px', marginRight: '16px' }} />
        <Typography variant="h6" noWrap component="div">
          AtoB Dashboard
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
};

export default TopBar;
