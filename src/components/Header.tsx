import React from 'react';
import { useUserContext } from '../context/UserContext';

export interface HeaderProps {
  setShowRegisterForm: (bool:boolean) => void;
  setShowLoginForm: (bool:boolean) => void;
}

export const Header : React.FC<HeaderProps> = ({setShowRegisterForm, setShowLoginForm}) => {

    const { user, logout } = useUserContext();

    return (
        <header className="app-header">
          <h1>React + Node.js + MongoDB User App</h1>
          <nav className="nav">
            {user != null ? 
              (<a onClick={() => {logout()}}>Log Out</a>)
            : 
              (
                <>
                <a onClick={() => { setShowRegisterForm(true); } }>Register</a>
                <a onClick={() => { setShowLoginForm(true); } }>Login</a>
                </>
              )
            }
          </nav>
        </header>
    )
}