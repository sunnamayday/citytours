import React from 'react';
import './Footer.scss';

/**
* @author
* @function Footer
**/

const Footer = (props) => {
    return (
        <div className="footer-wrapper">
            <div className="social-media">
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fas fa-envelope-square"></i></a>
                <a href="#"><i className="fab fa-tripadvisor"></i></a>
            </div>
            <div className="contact-info">
                <p>
                    <a href="/contact">CONTACT</a>
                    <br />
                    Phone:
                    <a href="tel:+12501234567"><strong>250.123.4567</strong></a>
                    <br />
                    Email:
                    <a href="mailto:citytour@gmail.com">
                        <strong> citytour@gmail.com</strong></a>
                </p>
            </div>
            <div className="address">John stree, Victoria, BC V8N123</div>
        </div>
    )

}

export default Footer