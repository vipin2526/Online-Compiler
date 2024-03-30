import React from 'react';
import './css/header.css'

const Header = () => {
  return (
    <header className="online-coding-header">
      <div className="logo">
        <h1>CodeRunner</h1>
      </div>
      <nav className="nav-bar">
        <a href="#editor">Code Editor</a>
        <a href="#compiler">Compiler</a>
        <a href="#documentation">Documentation</a>
        {/* Add more navigation links as needed */}
      </nav>
    </header>
  );
};

export default Header;
