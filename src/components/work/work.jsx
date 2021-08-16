import { AnimatePresence, motion, useAnimation} from "framer-motion"
import './work.scss'
import { useInView } from "react-intersection-observer"
import {useEffect} from "react"
import investors from "../../assets/images/investors.svg"
import instock from "../../assets/images/warehouse.svg"
import chatapp from "../../assets/images/chatapp.svg"
import safer from "../../assets/images/safer.svg"
import github from "../../assets/images/github.svg"
import brainflix from "../../assets/images/brainflix.svg"



function Work() {

    const { ref, inView } = useInView({
        threshold: 0.3
    })

    const animation = useAnimation()
    const leftAnimation = useAnimation()
    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,

                transition: {
                    duration: 4,
                    type: 'spring',
                    bounce: 0.5
                }
            })

            leftAnimation.start({
                opacity: 1,
                
                transition: {
                    duration: 4,
                    type: 'spring',
                    bounce: 0.5
                }
            })
        }
        else if (!inView) {
            animation.start({
                opacity: 0,
                
            })
            leftAnimation.start({
                opacity: 0,
                
            })
        }

    }, [inView])

    return (
        <div ref={ref} className="work" >
            <h2 className="work__title">PROJECTS</h2>
            <div 
                className="work__projectWrapper">
                <motion.div
                    
                    animate={animation}
                    className="work__projects"
                >
                    <div  className="work__card">
                        <div className="work__imgBx" >
                            <img
                                className="work__img" src={investors} />
                        </div>
                        <div className="work__content">
                            <h3>Investors</h3>
                            <p className="work__body">Investors is an educational and portfolio management tool for crypto investors designed to analyze and track investments.</p>
                            <h5 className="work__stack-title">Stack Used</h5>
                            <p className="work__stack">React, SCSS, NODE, EXPRESS, MongoDB, Passport.js</p>
                            <h5 className="work__links">Additional Links</h5>
                            <div className="work__media">
                                
                                <a className="work__github" href="https://github.com/msinghnanhre/investors"><img className="work__github" src={github} /></a>
                                <a className="projects__video projects__video-left" href="https://www.loom.com/share/77b7568a6f2e4f92b241f1d2c07dbcff">
                                    <button className="work__button">Watch Demo</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    
                    animate={leftAnimation}
                    className="work__projects"
                >
                    <div className="work__card">
                        <div className="work__imgBx">
                            <img className="work__img" src={instock} />

                        </div>
                        <div className="work__content">
                            <h3>InStock</h3>
                            <p className="work__body">InStock is a warehouse inventory management tool which allows end-users to edit, add, delete and update their warehouse listing inventory items.</p>
                            <h5 className="work__stack-title">Stack Used</h5>
                            <p className="work__stack">React, SCSS, NODE, EXPRESS</p>
                            <h5 className="work__links">Additional Links</h5>
                            <div className="work__media">
                                <a className="work__github" href="https://github.com/msinghnanhre/inStock"><img className="work__github" src={github} /></a>
                                <a className="projects__video projects__video-left" href="https://www.loom.com/share/3d8c1aba9435425eaaac72c853488958?sharedAppSource=personal_library">
                                    <button className="work__button">Watch Demo</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    
                    animate={animation}
                    className="work__projects">
                    <div className="work__card">
                        <div className="work__imgBx">
                            <img className="work__img" src={safer} />

                        </div>
                        <div className="work__content">
                            <h3>Safer</h3>
                            <p className="work__body">Safer is focused on increasing data security and privacy in medical organizations. Users can search for any data breach that happened in medical organization in their region by filtering through state names.</p>
                            <h5 className="work__stack-title">Stack Used</h5>
                            <p className="work__stack">React, SCSS, NODE, EXPRESS</p>
                            <h5 className="work__links">Additional Links</h5>
                            <div className="work__media">
                                <a className="work__github" href="https://github.com/msinghnanhre/safer"><img className="work__github" src={github} /></a>
                                <a className="projects__video projects__video-left" href="https://www.loom.com/share/9d6a8476611248b3861dac7939145790?sharedAppSource=personal_library">
                                    <button className="work__button">Watch Demo</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    
                    animate={leftAnimation}
                    className="work__projects">
                    <div className="work__card">
                        <div className="work__imgBx">
                            <img className="work__img" src={chatapp} />
                        </div>
                        <div className="work__content">
                            <h3>ChatApp</h3>
                            <p className="work__body">ChatApp allows users to broadcast coversations connected thorough same address utilizing socket io's open connection. It was built over 24 hours as part of BrainStation hackathon event.</p>
                            <h5 className="work__stack-title">Stack Used</h5>
                            <p className="work__stack">React, SCSS, NODE, EXPRESS</p>
                            <h5 className="work__links">Additional Links</h5>
                            <div className="work__media">
                                <a className="work__github" href="https://github.com/msinghnanhre/chat-room"><img className="work__github" src={github} /></a>
                                <a className="projects__video projects__video-left" href="https://www.loom.com/share/8bfcdbbbe7d04879b9171f08c92dcc37?sharedAppSource=personal_library">
                                    <button className="work__button">Watch Demo</button>
                                </a>
                            </div>

                        </div>
                    </div>
                </motion.div>

                <motion.div
                    
                    animate={animation}
                    className="work__projects">
                    <div className="work__card">
                        <div className="work__imgBx">
                            <img className="work__img" src={brainflix} />
                        </div>
                        <div className="work__content">
                            <h3>BrainFlix</h3>
                            <p className="work__body">BrainFlix is a Youtube like website where users can like, comment, delete and upload videos.</p>
                            <h5 className="work__stack-title">Stack Used</h5>
                            <p className="work__stack">React, SCSS, NODE, EXPRESS</p>
                            <h5 className="work__links">Additional Links</h5>
                            <div className="work__media">
                                <a className="work__github" href="https://github.com/msinghnanhre/manjinder-singh-Brainflixx"><img className="work__github" src={github} /></a>
                                <a className="projects__video projects__video-left" href="https://www.loom.com/share/bb5c4c9e50bf4982aee2586e3a0bb74a">
                                    <button className="work__button">Watch Demo</button>
                                </a>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Work