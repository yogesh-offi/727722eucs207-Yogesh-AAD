import React from 'react';
import '../assets/css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section about">
                <h2>About Yoga Academy</h2>
                <p>
                    At <strong>Yoga Academy</strong>, we offer a wide range of online yoga sessions tailored to meet the unique 
                    needs and goals of individuals of all ages and body types. Our experienced instructors provide personalized 
                    guidance based on specific ailments and fitness objectives, ensuring each practice is safe, effective, and 
                    enjoyable. Whether you're a beginner or an experienced yogi, we...
                </p>
            </div>
            <div className="footer-section links">
                <h2>Quick Links</h2>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/Gallery">Gallery</a></li>
                    <li><a href="/Press">Press & Media</a></li>
                    <li><a href="/FAQ">FAQ</a></li>
                    <li><a href="/Sitemap">Sitemap</a></li>
                </ul>
            </div>
            <div className="footer-section information">
                <h2>Information</h2>
                <ul>
                    <li><a href="/Login">Login & Register</a></li>
                    <li><a href="/About">Why Choose Us</a></li>
                    <li><a href="/Terms">Terms & Conditions</a></li>
                    <li><a href="/Privacy">Privacy Policy</a></li>
                    <li><a href="/Refund">Refund & Cancellation Policy</a></li>
                    <li><a href="/Contact">Contact Us</a></li>
                    <li><a href="/Lifestyle">Yoga @ Lifestyle</a></li>
                    <li><a href="/Yoga">Yoga @ Center</a></li>
                </ul>
            </div>
            <div className="footer-section contact">
                <h2>Stay Connected</h2>
                <address>
                    Yoga Academy Pvt Ltd 153,<br />
                    Gandipuram,<br />
                    Coimbatore.<br />
                    <a href="tel:+919786540135">+91-9786540135</a><br />
                    <a href="mailto:yogaAcademy@gmail.com">yogaAcademy.com</a>
                </address>
                <div className="social-links">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
