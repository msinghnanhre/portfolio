import React from 'react';
import AuthDemo from "../../AuthDemo"
import './App.scss';
import Navbar from "../Navbar/Navbar"
import Main from "../Main/Main"


import Projects from "../Projects/Projects"

function App() {



  return (
    <div>
      <Navbar />
      <Main />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
