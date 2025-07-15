import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { ThemeProvider } from './themes/ThemeContext';
import Home from './pages/Home';
import './styles/App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Sidebar />
        <MainContent>
          <Home />
        </MainContent>
      </div>
    </ThemeProvider>
  );
}

export default App;
