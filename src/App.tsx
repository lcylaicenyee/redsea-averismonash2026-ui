import React from 'react';
import { UserProvider } from './context/UserContext';
import { UserContent } from './components/UserContent';
import { LoadingSpinner } from './components/LoadingSpinner';
import './styles.css';

const App: React.FC = () => {
  return (
    <UserProvider>
      <div className="app">
        <header className="app-header">
          <h1>React + Node.js + MongoDB User App</h1>
          <nav className="nav">
            <a href="#users">Users</a>
            <a href="#create">Create User</a>
          </nav>
        </header>

        <UserContent />

        <LoadingSpinner />
      </div>
    </UserProvider>
  );
};

export default App;