import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Home from './pages/Home';
import Cards from './pages/Cards';
import Transactions from './pages/Transactions';
import Drivers from './pages/Drivers';
import Vehicles from './pages/Vehicles';
import PayrollOverview from './pages/PayrollOverview';
import PayrollHistory from './pages/PayrollHistory';
import Statements from './pages/Statements';
import PaymentHistory from './pages/PaymentHistory';
import PaymentMethods from './pages/PaymentMethods';
import ManageApiTokens from './pages/ManageApiTokens';
import Connect from './pages/Connect';
import VehiclesAndCards from './pages/VehiclesAndCards';
import TrucksMap from './pages/TrucksMap';
import ReferAndEarn from './pages/ReferAndEarn';
import Support from './pages/Support';
import Logout from './pages/Logout';
import theme from './themes/theme';

import useMediaQuery from '@mui/material/useMediaQuery';

function App() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(!isMobile);

  React.useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: 'flex' }}>
          <TopBar open={open} />
          <Sidebar open={open} setOpen={setOpen} isMobile={isMobile} />
          <MainContent open={open}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cards" element={<Cards />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/drivers" element={<Drivers />} />
              <Route path="/vehicles" element={<Vehicles />} />
              <Route path="/payroll" element={<PayrollOverview />} />
              <Route path="/payroll/history" element={<PayrollHistory />} />
              <Route path="/billing/statements" element={<Statements />} />
              <Route path="/billing/payment-history" element={<PaymentHistory />} />
              <Route path="/billing/payment-methods" element={<PaymentMethods />} />
              <Route path="/billing/manage-api-tokens" element={<ManageApiTokens />} />
              <Route path="/telematics/connect" element={<Connect />} />
              <Route path="/telematics/vehicles-and-cards" element={<VehiclesAndCards />} />
              <Route path="/telematics/trucks-map" element={<TrucksMap />} />
              <Route path="/user/refer-and-earn" element={<ReferAndEarn />} />
              <Route path="/user/support" element={<Support />} />
              <Route path="/user/logout" element={<Logout />} />
            </Routes>
          </MainContent>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
