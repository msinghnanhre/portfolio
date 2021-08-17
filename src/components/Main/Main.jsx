import React from 'react';
import './Main.scss';
import hero from "../../assets/images/hero.svg"
import hand from "../../assets/images/hand.svg";
import Skills from "../Skills/Skills"
import { motion } from "framer-motion"


function Main() {
  return (
    
    <motion.main
      initial={{ x: `-100vw`, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ x: `100vw`, transition: { ease: 'easeInOut' } }}
      className="main"
    >
      <div className="main__img-container">
        <div>
          <h2 className="main__hi">Hi There <span><img className="main__img" src={hand} /></span></h2>
          <p className="main__intro">My name is Manjinder Singh <br /> I am a Full-Stack web Developer. </p>
        </div>

      </div>
      <img className="main__heroimg" src={hero} />
      <h1 className="main__title">ABOUT</h1>
      
      <p className="main__body"> When I was unaware of programming world, I would often wonder about the technologies and
      structure of software around me. How does data travel? How does software remembers users? This curiosity was what led me to learn
      programming. This curiosity and hugner to learn more is what keeps me going.

      </p>
      <Skills />
    </motion.main>
    
  );
}

export default Main;