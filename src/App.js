import React from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <Home />
      </main>
    </div>
  );
}

export default App;
