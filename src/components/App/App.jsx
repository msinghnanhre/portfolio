import React, { useState, useEffect } from 'react';
import './App.scss';
import Navbar from "../Navbar/Navbar"
import Main from "../Main/Main"
import Contact from "../Contact/Contact"
import Work from "../work/work"
import Footer from "../Footer/Footer"
import {BrowserRouter, Switch, Route } from "react-router-dom"



function App() {
  return (

    <div className="app">
      
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/projects" component={Work} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
