import React from 'react';

export interface HeaderProps {
  setShowRegisterForm: (bool:boolean) => void;
  setShowLoginForm: (bool:boolean) => void;
}

export const Header : React.FC<HeaderProps> = ({setShowRegisterForm, setShowLoginForm}) => {

    return (
        <header className="app-header">
          <h1>React + Node.js + MongoDB User App</h1>
          <nav className="nav">
            <a onClick={() => {setShowRegisterForm(true)}}>Register</a>
            <a onClick={() => {setShowLoginForm(true)}}>Login</a>
          </nav>
        </header>
    )
}