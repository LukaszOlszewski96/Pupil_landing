import React from 'react';
import "./Contact.css";
import Footer from '../Footer/Footer';
import {IoPersonCircleOutline} from 'react-icons/io5';
import {HiOutlineMail} from 'react-icons/hi';
import {MdTitle} from 'react-icons/md';
import {SiBaidu} from "react-icons/si";


function Contact() {
    return (
        <div className="Contact-conteiner">
            <div className="horizontal-box">
                <div className="left-box-contact">
                    <span className="desc-contact">
                    <h1 className="title">Contact</h1>
                    <p className="text-contact">Feel free to get in touch with me. We are always open to discussing.</p>
                    <a className="email-link" href= "mailto: lukols.dev@gmail.com">contact@pupil.com</a>
                    </span>
                    <p className="footer-icon left"><SiBaidu/></p>
                    <p className="footer-icon right"><SiBaidu/></p>
                </div>
                <div className="right-box">
                    <div className="input-box-contact">
                    <form className="name-input-form">
                        <div className="icon"><IoPersonCircleOutline/></div>
                        <input className="name-input" type="text" placeholder="Your name..."/>
                    </form>
                    <form className="name-input-form">
                        <div className="icon"><HiOutlineMail/></div>
                        <input className="name-input" type="text" placeholder="Your email..."/>
                    </form>
                    <form className="topic-input-form">
                        <div className="icon"><MdTitle/></div>
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
 

