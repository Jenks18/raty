import React from 'react';
import { Box, Card, CardContent, Typography, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Home = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome, [Name]
      </Typography>
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Current Balance</Typography>
              <Typography variant="h4" color="primary">$12,345.67</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Available Credit</Typography>
              <Typography variant="h4">$50,000.00</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ mb: 3 }}>
        <Button variant="contained" sx={{ mr: 1 }}>Deposit</Button>
        <Button variant="contained" sx={{ mr: 1 }}>Withdraw</Button>
        <Button variant="contained">Pay</Button>
      </Box>
      <Typography variant="h5" gutterBottom>
        Transactions
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>To/From</TableCell>
              <TableCell>Method</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>2024-07-26</TableCell>
              <TableCell><Typography color="primary">+$500.00</Typography></TableCell>
              <TableCell>Client A</TableCell>
              <TableCell>ACH</TableCell>
              <TableCell>Completed</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2024-07-25</TableCell>
              <TableCell><Typography color="error">-$120.00</Typography></TableCell>
              <TableCell>Shell</TableCell>
              <TableCell>Card</TableCell>
              <TableCell>Completed</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2024-07-24</TableCell>
              <TableCell><Typography color="warning.main">-$350.00</Typography></TableCell>
              <TableCell>Amazon</TableCell>
              <TableCell>Card</TableCell>
              <TableCell>Pending</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Home;
