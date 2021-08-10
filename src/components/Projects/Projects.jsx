import React from 'react'
import warehouse from "../../assets/images/warehouse.svg"
import chatapp from "../../assets/images/chatapp.svg"
import investors from "../../assets/images/investors.svg"
import github from "../../assets/images/github.svg";

import "./Projects.scss"

function Projects() {
    return (
        <div className="projects">
            <h2 className="projects__title"><span className="projects__title-number">01</span>Projects</h2>
            <div className="projects__container">
                <div className="projects__desc">
                    <div className="projects__name">
                        <h2><span className="projects__span">1</span> InStock</h2>
                        <p className="projects__stack">React, SCSS, NODE, EXPRESS, JIRA</p>
                    </div>
                    <p className="projects__body projects__body-right">InStock is a warehouse inventory management tool which allows end-users to edit, add, delete and update their warehouse listing inventory items.</p>
                    <div className="projects__body-bottom">
                        <a className="projects__video" href="https://www.loom.com/share/3d8c1aba9435425eaaac72c853488958?sharedAppSource=personal_library">
                            <button className="projects__button projects__button-right">Watch Demo</button>
                        </a>
                        <a className="projects__github"><img src={github} /></a>
                    </div>

                </div>
                <div className="projects__media">
                    <img className="projects__img" src={warehouse} />
                </div>
            </div>

            <div className="projects__container ">
                <div className="projects__media ">
                    <img className="projects__img" src={investors} />
                </div>
                <div className="projects__desc">
                    <div className="projects__name projects__name-left">
                        <h2 ><span className="projects__span">2</span> INVESTORS</h2>
                        <p className="projects__stack">React, SCSS, NODE, EXPRESS, MongoDB, Passport.js</p>
                    </div>
                    <p className="projects__body projects__body-left">Investors is an educational and portfolio management tool for crypto investors designed to analyze and track investments.</p>
                    <div className="projects__body-bottom projects__body-bottomLeft">
                        <a className="projects__github"><img src={github} /></a>
                        <a className="projects__video projects__video-left" href="https://www.loom.com/share/f22ff189a0b04e6d8cb85c7ff4116d77?sharedAppSource=personal_library">
                            <button className="projects__button projects__button-left">Watch Demo</button>
                        </a>
                   
                    </div>
                </div>
            </div>

            <div className="projects__container">
                <div className="projects__desc">
                    <div className="projects__name">
                        <h2><span className="projects__span">3</span> ChatApp</h2>
                        <p className="projects__stack">React, SCSS, NODE, Socket.io</p>
                    </div>
                    <p className="projects__body projects__body-right">ChatApp allows users to broadcast coversations connected thorough same address utilizing socket io's open connection. It was built over 24 hours as part of BrainStation hackathon event.</p>
                    <div className="projects__body-bottom">
                        <a className="projects__video" href="https://www.loom.com/share/8bfcdbbbe7d04879b9171f08c92dcc37?sharedAppSource=personal_library">
                            <button className="projects__button projects__button-right">Watch Demo</button>
                        </a>
                        <a className="projects__github"><img src={github} /></a>
                    </div>
                </div>

                <div className="projects__media">
                    <img className="projects__img" src={chatapp} />
                </div>
            </div>

            <div className="projects__container">

                <div className="projects__media">
                    <img className="projects__img" src={warehouse} />
                </div>
                <div className="projects__desc">
                    <div className="projects__name projects__name-left">
                        <h2><span className="projects__span">4</span> BrainFlix</h2>
                        <p className="projects__stack">React, SCSS, NODE, EXPRESS</p>
                    </div>
                    <p className="projects__body projects__body-left">BrainFlix is a youtube mockup site where users can watch, like, comment and upload any videos. It is fully responsive, built through mobile first methadology.</p>
                    <div className="projects__body-bottom projects__body-bottomLeft">
                        <a className="projects__github"><img src={github} /></a>
                        <a className="projects__video projects__video-left" href="https://www.loom.com/share/3d8c1aba9435425eaaac72c853488958?sharedAppSource=personal_library">
                            <button className="projects__button">Watch Demo</button>
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects
