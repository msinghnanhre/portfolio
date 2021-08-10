import React from 'react';
import './Main.scss';
import hero from "../../assets/images/hero.svg"


function Main() {
  return (
    
    <main className="main">
      <div className="main__img-container"><img className="main__img" src={hero} /></div>
      <h1 className="main__name">
        <p>M</p>
        <p>A</p>
        <p>N</p>
        <p>J</p>
        <p>I</p>
        <p>N</p>
        <p>D</p>
        <p>E</p>
        <p>R</p>
        </h1>
    </main>
    
  );
}

export default Main;