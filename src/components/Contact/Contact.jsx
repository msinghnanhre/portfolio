import React from 'react'
import "./Contact.scss"
import emailjs from 'emailjs-com';
import github from "../../assets/images/github.svg"
import linkedin from "../../assets/images/linkedin.svg"
import pdf from "../../assets/images/pdf.svg"

function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_nt8raas', 'template_5flinbg', e.target, 'user_oGSmvXxFLcZxxEWDtmzWA')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }


    return (
        <div className="contact">
            <h3 className="contact__title">CONTACT</h3>
            <p className="contact__body">I am looking for opportunities where I can utilize my developer skills and also work with amazing teams. I am someone who takes pride in their work and I highly appreciate any learning and feedback opportunities. During past projects, I have worked with various teams from various disciplence.<br /><br /> If your search aligns with my goals, I would love to connect and discuss if we can be a right match. Feel free to send me an email down below or reach out to me any of the social links provided.  </p>
        
            <div class="contact__form">
                
                <form onSubmit={sendEmail}>

                    <label className="contact__label" htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name.." required/>

                    <label className="contact__label" htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email" required/>

                    <label className="contact__label" htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject" placeholder="Subject" required/>

                    <label className="contact__label" htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Message..." required></textarea>

                    <input type="submit" value="SUBMIT" />

                </form>
            </div>
            <p className="contact__divider"><span className="contact__span">OR</span></p>

            <div className="contact__socials">
                <a className="contact__link" href="https://www.linkedin.com/in/manjinder-nanhre/"><img src={linkedin} /></a>
                <a className="contact__link" href="https://github.com/msinghnanhre"><img src={github} /></a>
            </div>
        </div>
    )
}

export default Contact
