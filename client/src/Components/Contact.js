import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import '../CSS/Contact.css';


function Contact(props) {
    return (
        <div className="contact">
            <Navbar contact></Navbar>
            <div className="contact-wrapper">
                <div className="contact-info">
                    <h1 className="contact-header actual-contact">CONTACT</h1>
                    <h4 className="contact-header question">Have a question? Want to work together?</h4>
                    <form className="contact-form" name="contact" method="POST" data-netlify="true">
                        <input className="contact-inputs" type="text" name="name" placeholder="Name"/> 
                        <input className="contact-inputs" type="text" name="email" placeholder="Email Address"/>
                        <input className="contact-inputs" type="text" name="phone" placeholder="Phone Number"/>
                        <textarea name="message" id="message" cols="30" name="message" rows="10" placeholder="Message"></textarea>
                        <button type="submit" id="submit">submit</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact

