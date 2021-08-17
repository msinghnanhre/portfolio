import React from 'react'
import "./Footer.scss";
import linkedin from "../../assets/images/linkedin.svg"
import github from "../../assets/images/github.svg"
import { Link } from "react-router-dom"
import pdf from "../../assets/images/Manjinder-Singh-Nanhre.pdf"

function Footer() {
    return (
        <div className="footer">
            <p className="footer__text">MANJINDER SINGH WEB DEVELOPER</p>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/manjinder-nanhre/"><img className="footer__socials-link" src={linkedin} /></a>
                <a href={pdf} className="footer__socials-button">
                    <button className="footer__resume">Resume</button>
                </a>
                <a href="https://github.com/msinghnanhre"><img className="footer__socials-link" src={github} /></a>
            </div>

            <ul className="footer__nav">
                <Link className="footer__link" to="/"><li className="footer__link">Home</li></Link>
                {/* <li className="footer__link">Services</li> */}
                <Link className="footer__link" to="/projects" ><li className="footer__link">Projects</li></Link>
                <Link className="footer__link" to="/contact"><li className="footer__link">Contact</li></Link>
            </ul>

            {/* <p className="footer__body">Manjinder Singh &#169; 2021</p> */}
        </div>
    )
}

export default Footer
