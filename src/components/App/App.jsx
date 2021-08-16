import React, { useState, useEffect } from 'react';
import './App.scss';
import Navbar from "../Navbar/Navbar"
import Main from "../Main/Main"
import Contact from "../Contact/Contact"
import Work from "../work/work"
import Footer from "../Footer/Footer"




function App() {
  return (

    <div className="app">
      <Navbar />
      <Main />
      <Work  />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
