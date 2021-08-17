import React from 'react'
import "./Skills.scss"

function Skills() {
    return (
        <div className="skills">
            <h2 className="skills__title">Skills</h2>
            <div className="skills__wrapper">
                <p className="skills__item">React</p>
                <p className="skills__item">Javascript</p>
                <p className="skills__item">Express</p>
                <p className="skills__item">NodeJs</p>
                <p className="skills__item">HTML5</p>
                <p className="skills__item">CSS</p>
                <p className="skills__item">MongoDB</p>
                <p className="skills__item">MySQL</p>

            </div>
            <h3 className="skills__subtitle">Currently Learning</h3>
            <div className="skills__wrapper">
                <p className="skills__item">Python</p>
                <p className="skills__item">Django</p>
                <p className="skills__item">Flask</p>
            </div>
        </div>
    )
}

export default Skills
