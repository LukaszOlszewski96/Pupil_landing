import React from 'react';
import "./Contact.css";
import Footer from '../Footer/Footer';


function Contact() {
    return (
        <div className="Contact-conteiner">
            <div className="horizontal-box">
                <div className="left-box-contact">
                    <h1 className="title">Get in touch</h1>
                    <p className="text-contact">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                    <a className="email-link">contact@pupil.com</a>
                </div>
                <div className="right-box">
                    <div className="input-box-contact">
                    <form className="name-input-form">
                        <div className="icon"></div>
                        <input className="name-input" type="text" placeholder="Your name..."/>
                    </form>
                    <form className="name-input-form">
                        <div className="icon"></div>
                        <input className="name-input" type="text" placeholder="Your email..."/>
                    </form>
                    <form className="topic-input-form">
                        <div className="icon"></div>
                        <input className="topic-input" type="text" placeholder="Topic..."/>
                    </form>
                    <form className="textarea-input-form">
                        <textarea className="text-area-input" type="text" />
                    </form>
                    <button href="#" type="submit" className="button-submit">Submit</button>
                </div>
                </div>
            </div>
            <Footer/>

        </div>
    )
}
 
export default Contact
 

