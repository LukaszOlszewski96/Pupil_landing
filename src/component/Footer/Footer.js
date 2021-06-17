import React from 'react'
import './Footer.css'
import {FaFacebook,FaTwitter, FaLinkedin, FaYoutube} from "react-icons/fa"



function Footer() {
    return (
        <div className="footer-box">
            <div className="horizontal-box">
                <div className="footer-left-box">
                    <span>
                        <p className="footer-logo">Pupil</p>
                        <p className="footer-text"> Copyright C 2021 All Rights Reserved</p>
                    </span>
                </div>
                <div className="footer-right-box">
                    <span className="social-box">
                        <p className="follow-text">Follow us on</p>
                        <span className="social-icon-box">
                            <a href="/"><FaFacebook/></a>
                            <a href="/"><FaTwitter/></a>
                            <a href="/"><FaLinkedin/></a>
                            <a href="/"><FaYoutube/></a>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}
 
export default Footer

