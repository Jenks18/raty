import React from 'react';
import { Typography, Box, Grid, Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const StyledCard = styled(Card)(({ theme }) => ({
  minWidth: 275,
  marginBottom: theme.spacing(3),
  boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  borderRadius: '8px',
}));

const PayrollOverview = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        Payroll Overview
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6">Instant Payment Funding Source</Typography>
              <Typography variant="body1">Mastercard **** 1234, exp 12/24</Typography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6">Bank Transfer (ACH) Funding Source</Typography>
              <Typography variant="body1">JP Morgan Chase</Typography>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Driver Name</TableCell>
              <TableCell>1099/W2</TableCell>
              <TableCell>Debit Card</TableCell>
              <TableCell>Instant Payout</TableCell>
              <TableCell>Quick Pay</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              { name: 'Benjamin Johannsen', debitCard: '8171' },
              { name: 'Elizabeth Williamson', debitCard: '9345' },
              { name: 'Juan Villareal', debitCard: '8787' },
              { name: 'James Newton', debitCard: '3352' },
              { name: 'Leslie Stephenson', debitCard: '7713' },
            ].map((driver) => (
              <TableRow key={driver.name}>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <AttachMoneyIcon sx={{ color: 'green', mr: 1 }} />
                    {driver.name}
                  </Box>
                </TableCell>
                <TableCell>Unselected</TableCell>
                <TableCell>{driver.debitCard}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <AttachMoneyIcon sx={{ color: 'green', mr: 1 }} />
                    $0.00
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <AttachMoneyIcon sx={{ color: 'green', mr: 1 }} />
                    $0.00
                  </Box>
                </TableCell>
                <TableCell><Typography color="warning.main" sx={{ fontWeight: 'bold' }}>PENDING</Typography></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PayrollOverview;
