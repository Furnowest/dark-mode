import React, { useState } from 'react';
// import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const Navbar = (props) =>{
    const [darkmode, setDarkMode] = props
  
   
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkmode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkmode ? 'toggle toggled' : 'toggle'}
         
        />
         
      </div>
    </nav>
  );
  }
};

export default Navbar;
