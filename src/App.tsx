import React, { useState } from 'react';
import { UserProvider } from './context/UserContext';
import { UserContent } from './components/UserContent';
import { Header } from './components/Header'
import './styles.css';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import { CreateUserPage } from './components/CreateUserPage';
import { LoginUserPage } from './components/LoginUserPage';

const App: React.FC = () => {
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);

  return (
    <UserProvider>
      <Header 
        setShowLoginForm={setShowLoginForm}
        setShowRegisterForm={setShowRegisterForm}
      />
      <BrowserRouter>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<UserContent />} />
        </Routes>
      </BrowserRouter>
      <div className="app">
      </div>

      {showRegisterForm && (<CreateUserPage 
          setShowForm={setShowRegisterForm}
      />)}
      {showLoginForm && (<LoginUserPage 
          setShowForm={setShowLoginForm}
      />)}
    </UserProvider>
  );
};

export default App;