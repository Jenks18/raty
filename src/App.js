import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Home from './pages/Home';
import Cards from './pages/Cards';
import Transactions from './pages/Transactions';
import Drivers from './pages/Drivers';
import Vehicles from './pages/Vehicles';
import Payroll from './pages/Payroll';
import Billing from './pages/Billing';
import Telematics from './pages/Telematics';
import User from './pages/User';
import theme from './themes/theme';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: 'flex' }}>
          <Sidebar />
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cards" element={<Cards />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/drivers" element={<Drivers />} />
              <Route path="/vehicles" element={<Vehicles />} />
              <Route path="/payroll" element={<Payroll />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/telematics" element={<Telematics />} />
              <Route path="/user" element={<User />} />
            </Routes>
          </MainContent>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
