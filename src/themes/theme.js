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
      default: '#F7F8FA',
    },
    text: {
      primary: '#222222',
      secondary: '#6B7280',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h4: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 600,
    },
  },
});

export default theme;
