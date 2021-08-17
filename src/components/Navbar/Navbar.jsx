import React from 'react';
import './navbar.scss';
import logo from "../../assets/images/logo.svg"
import { Link } from "react-router-dom"


function Navbar() {
  
  return (
    
      <nav className="navbar">
        <Link to="/"><img className="navbar__logo" src={logo} alt="logo" /></Link>
      
      <ul className="navbar__nav">
        <Link className="navbar__link" to="/projects" ><li className="navbar__link">Projects</li></Link>
        <Link className="navbar__link" to="/"><li className="navbar__link">Home</li></Link>
        {/* <Link className="navbar__link" to="/services"><li className="navbar__link">Services</li></Link> */}
        <Link className="navbar__link" to="/contact"><li className="navbar__link">Contact</li></Link>
        </ul>
      
      </nav>
  
    
  );
}

export default Navbar;
