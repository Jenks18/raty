import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PeopleIcon from '@mui/icons-material/People';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PaymentsIcon from '@mui/icons-material/Payments';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SpeedIcon from '@mui/icons-material/Speed';
import PersonIcon from '@mui/icons-material/Person';
import HistoryIcon from '@mui/icons-material/History';
import DescriptionIcon from '@mui/icons-material/Description';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LinkIcon from '@mui/icons-material/Link';
import MapIcon from '@mui/icons-material/Map';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: theme.spacing(7),
  [theme.breakpoints.up('sm')]: {
    width: theme.spacing(9),
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    '& .MuiDrawer-paper': {
      position: 'relative',
    },
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Sidebar = ({ open, setOpen, isMobile, handleDrawerOpen }) => {
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
    { text: 'Cards', icon: <CreditCardIcon />, path: '/cards' },
    { text: 'Transactions', icon: <ReceiptIcon />, path: '/transactions' },
    { text: 'Drivers', icon: <PeopleIcon />, path: '/drivers' },
    { text: 'Vehicles', icon: <DirectionsCarIcon />, path: '/vehicles' },
    {
      text: 'Payroll',
      icon: <PaymentsIcon />,
      submenu: [
        { text: 'Payroll Overview', icon: <PaymentsIcon />, path: '/payroll' },
        { text: 'Payroll History', icon: <HistoryIcon />, path: '/payroll/history' },
      ],
    },
    {
      text: 'Billing',
      icon: <AccountBalanceWalletIcon />,
      submenu: [
        { text: 'Statements', icon: <DescriptionIcon />, path: '/billing/statements' },
        { text: 'Payment History', icon: <HistoryIcon />, path: '/billing/payment-history' },
        { text: 'Payment Methods', icon: <CreditCardIcon />, path: '/billing/payment-methods' },
        { text: 'Manage API Tokens', icon: <VpnKeyIcon />, path: '/billing/manage-api-tokens' },
      ],
    },
    {
      text: 'Telematics',
      icon: <SpeedIcon />,
      submenu: [
        { text: 'Connect', icon: <LinkIcon />, path: '/telematics/connect' },
        { text: 'Vehicles / Cards', icon: <DirectionsCarIcon />, path: '/telematics/vehicles-and-cards' },
        { text: 'Trucks Map', icon: <MapIcon />, path: '/telematics/trucks-map' },
      ],
    },
    {
      text: 'User',
      icon: <PersonIcon />,
      submenu: [
        { text: 'Refer & Earn', icon: <CardGiftcardIcon />, path: '/user/refer-and-earn' },
        { text: 'Support', icon: <SupportAgentIcon />, path: '/user/support' },
        { text: 'Log Out', icon: <ExitToAppIcon />, path: '/user/logout' },
      ],
    },
  ];

  return (
    <Drawer variant={isMobile ? 'temporary' : 'permanent'} open={open} onClose={handleDrawerClose}>
      <DrawerHeader>
        <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <List>
        {menuItems.map((item) => (
          <React.Fragment key={item.text}>
            {item.submenu ? (
              <>
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <Typography variant="caption" sx={{ pl: 2.5, display: open ? 'block' : 'none' }}>
                    {item.text}
                  </Typography>
                </ListItem>
                <List component="div" disablePadding>
                  {item.submenu.map((subItem) => (
                    <ListItem key={subItem.text} disablePadding sx={{ pl: open ? 2.5 : 0 }}>
                      <ListItemButton
                        component={Link}
                        to={subItem.path}
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? 'initial' : 'center',
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                          }}
                        >
                          {subItem.icon}
                        </ListItemIcon>
                        <ListItemText primary={subItem.text} sx={{ opacity: open ? 1 : 0 }} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </>
            ) : (
              <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            )}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
