import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#22C55E',
    },
    secondary: {
      main: '#F59E42',
    },
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: '#222222',
      secondary: '#6B7280',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

export default theme;
