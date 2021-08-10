import React from 'react';
import './navbar.scss';


function Navbar() {
  
  return (
    
      <nav className="navbar">
        <h1 className = "navbar__logo">M.Dev</h1>
        <ul className= "navbar__list">
          <li className="navbar__listitem"><a class="navbar__link" >Projects</a></li>
          <li className="navbar__listitem"><a class="navbar__link" >Resume</a></li>
          <li className="navbar__listitem"><a class="navbar__link" >Contact</a></li>
          <li className="navbar__listitem"><a class="navbar__link" >About</a></li>
        </ul>
      </nav>
  
    
  );
}

export default Navbar;
