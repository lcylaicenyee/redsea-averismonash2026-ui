import React from 'react';

export interface HeaderProps {
  setShowLoginForm: (bool:boolean) => void;
}

export const Header : React.FC<HeaderProps> = ({setShowLoginForm}) => {

    return (
        <header className="app-header">
          <h1>React + Node.js + MongoDB User App</h1>
          <nav className="nav">
            <a onClick={() => {setShowLoginForm(true)}}>Create User</a>
          </nav>
        </header>
    )
}