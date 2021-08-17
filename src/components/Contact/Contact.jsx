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
            <h3 className="contact__title">LET'S CONNECT</h3>
            <p className="contact__body">
                Perhaps you have some questions? or you are looking for someone to work on your project? Either way I would love to hear from you.<br /><br />
                
                
                I am looking for opportunities where I can utilize my developer skills and also work with amazing team.
                 I am someone who takes pride in their work
                and I highly appreciate any learning and feedback opportunities. <br /><br />
                If your search aligns with my goals, I would love to connect and discuss if we can be a right match. <br /><br /> Please make sure you enter all the fields so that I can respond to your enquiries as soon as I recieve them. </p>
        
            <div class="contact__form">
                
                <form onSubmit={sendEmail}>

                    <label className="contact__label" htmlFor="name">Name </label>
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
        </div>
    )
}

export default Contact
