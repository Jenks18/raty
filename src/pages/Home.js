import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome, [Name]</h1>
        <div className="summary-cards">
          <div className="card">
            <h2>Current Balance</h2>
            <p className="balance positive">$12,345.67</p>
          </div>
          <div className="card">
            <h2>Available Credit</h2>
            <p className="balance">$50,000.00</p>
          </div>
        </div>
        <div className="quick-actions">
          <button>Deposit</button>
          <button>Withdraw</button>
          <button>Pay</button>
        </div>
      </header>
      <section className="transactions">
        <h2>Transactions</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>To/From</th>
              <th>Method</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Transaction Data */}
            <tr>
              <td>2024-07-26</td>
              <td className="positive">+$500.00</td>
              <td>Client A</td>
              <td>ACH</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>2024-07-25</td>
              <td className="negative">-$120.00</td>
              <td>Shell</td>
              <td>Card</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>2024-07-24</td>
              <td className="pending">-$350.00</td>
              <td>Amazon</td>
              <td>Card</td>
              <td>Pending</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Home;
