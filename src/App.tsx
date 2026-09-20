import React, { useState } from 'react';
import { UserProvider } from './context/UserContext';
import { UserContent } from './components/UserContent';
import { Header } from './components/Header'
import './styles.css';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import { CreateUserPage } from './components/CreateUserPage';

const App: React.FC = () => {
    const [showForm, setShowForm] = useState(false);

  return (
    <UserProvider>
      <Header 
        setShowLoginForm={setShowForm}
      />
      <BrowserRouter>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<UserContent />} />
        </Routes>
      </BrowserRouter>
      <div className="app">
      </div>

      {showForm && (<CreateUserPage 
          setShowForm={setShowForm}
      />)}
    </UserProvider>
  );
};

export default App;