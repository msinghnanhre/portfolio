import React from 'react';
import './navbar.scss';
import pdf from "../../assets/images/Manjinder-Singh-Nanhre.pdf"


function Navbar() {
  
  return (
    
      <nav className="navbar">
        <h1 className = "navbar__logo">MANJINDER</h1>
        <a
          href={pdf}
          className="navbar__list"
        >
          <button className="navbar__resume">Download Resume</button>
        </a>
      </nav>
  
    
  );
}

export default Navbar;
