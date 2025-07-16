const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/deposit', (req, res) => {
  console.log('Deposit request received:', req.body);
  res.json({ message: 'Deposit successful' });
});

app.post('/api/withdraw', (req, res) => {
  console.log('Withdrawal request received:', req.body);
  res.json({ message: 'Withdrawal successful' });
});

app.post('/api/pay', (req, res) => {
  console.log('Payment request received:', req.body);
  res.json({ message: 'Payment successful' });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
