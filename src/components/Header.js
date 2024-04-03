import React from 'react';
import './css/header.css'

const Header = () => {
  return (
    <header className="online-coding-header">
      <div className="logo">
        <h1>CodeRunner</h1>
      </div>
      <nav className="nav-bar">
        <a href="#Documentation">Documentation</a>
      </nav>
    </header>
  );
};

export default Header;
