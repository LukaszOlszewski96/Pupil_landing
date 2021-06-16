import React from 'react'
import './Footer.css'
 
 
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
                            <a href="/">Facebook</a>
                            <a href="/">Twitter</a>
                            <a href="/">Linkedin</a>
                            <a href="/">Youtube</a>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}
 
export default Footer

