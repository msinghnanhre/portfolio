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
      
      <p className="main__body"> As a Full-Stack Web Developer, I code visually appealing front-end components that meet the requirements of mock-ups and fulfill user stories. I also work on the back-end, build APIs, work with databases, monitor and process pull requests for production deployments. Hence completing full lifeCycle for application. I mainly work with React, Javascript, Express, Node, and MongoDB (MERN Stack) but also always looking to learn new frameworks and languages. Currently, I am learning Python and Django.

      </p>
      <Skills />
    </motion.main>
    
  );
}

export default Main;