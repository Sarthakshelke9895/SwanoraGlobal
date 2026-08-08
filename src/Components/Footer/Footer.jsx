import React from "react";
import "./Footer.css";
import logo from "../../Assets/Logo.webp";
import { Link as RouterLink } from "react-router-dom";

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaArrowUp
} from "react-icons/fa";

import { Link } from "react-scroll";

const Footer = () => {

    const scrollToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };

    return (

        <footer className="footer">

            <div className="container">

                {/* ==========================================
                    FOOTER CONTENT
                ========================================== */}

                <div className="footer-content">

                    {/* ==========================================
                        COLUMN 1
                        LOGO & SOCIAL
                    ========================================== */}

                    <div className="footer-column footer-brand">

                        <div className="logo">

                            <img
                                src={logo}
                                alt="Swanora Global Logo"
                            />

                            <div className="logo-content">

                                <h2>
                                    Swanora Global
                                </h2>

                                <p>
                                    Connecting India To The World
                                </p>

                            </div>

                        </div>

                    
<div className="footer-social">

    <a
        href="https://www.facebook.com/share/1BfFPUs27t/"
        target="_blank"
        rel="noopener noreferrer"
    >
        <FaFacebookF />

        <span>
            Facebook
        </span>
    </a>

    <a
        href="https://www.instagram.com/swanora_global/"
        target="_blank"
        rel="noopener noreferrer"
    >
        <FaInstagram />

        <span>
            Instagram
        </span>
    </a>

    <a
        href="https://www.linkedin.com/in/swanora-global-7ab282422/"
        target="_blank"
        rel="noopener noreferrer"
    >
        <FaLinkedinIn />

        <span>
            LinkedIn
        </span>
    </a>

</div>


                    </div>

                    {/* ==========================================
                        COLUMN 2
                        QUICK LINKS
                    ========================================== */}

                    <div className="footer-column  footer-links-column">

                        <h3 className="footer-title">
                            Quick Links
                        </h3>

                        <div className="footer-links">

                            <Link
                                to="home"
                                smooth
                                duration={600}
                                offset={-80}
                            >
                                Home
                            </Link>

                            <Link
                                to="about"
                                smooth
                                duration={600}
                                offset={-80}
                            >
                                About
                            </Link>

                            <Link
                                to="services"
                                smooth
                                duration={600}
                                offset={-80}
                            >
                                Services
                            </Link>

                            <Link
                                to="products"
                                smooth
                                duration={600}
                                offset={-80}
                            >
                                Products
                            </Link>

                            <Link
                                to="testimonials"
                                smooth
                                duration={600}
                                offset={-80}
                            >
                                Testimonials
                            </Link>

                            <Link
                                to="contact"
                                smooth
                                duration={600}
                                offset={-80}
                            >
                                Contact
                            </Link>

                        </div>

                    </div>

                    {/* ==========================================
                        COLUMN 3
                        SERVICES
                    ========================================== */}

                    <div className="footer-column footer-links-column">

                        <h3 className="footer-title">
                            Services
                        </h3>

                        <div className="footer-services">

                            <a href="/">
                                Agricultural Products Export 
                            </a>

                            <a href="/">
                                Product Sourcing
                            </a>

                            <a href="/">
                                Export Packaging
                            </a>

                            <a href="/">
                                Qaulity Inspection
                            </a>

                            <a href="/">
                                Global Logistics and Shipping
                            </a>
                            <a href="/">
                                Export Documentation
                            </a>

                        </div>

                    </div>
                                        {/* ==========================================
                        COLUMN 4
                        CONTACT
                    ========================================== */}

                    <div className="footer-column footer-links-column">

                        <h3 className="footer-title">
                            Contact
                        </h3>

                        <div className="footer-contact">

                            <a href="tel:+918600421881">

                                <FaPhoneAlt />

                                <span>
                                    +91  8600421881
                                </span>

                            </a>

                            <a href="mailto:info@swanoraglobal.com">

                                <FaEnvelope />

                                <span>
                                    info@swanoraglobal.com
                                </span>

                            </a>

                            <div className="address">

                                <FaMapMarkerAlt />

                                <span>
                                    Flat No.305, Morya Corner, Near Suryaganga Society, Dhayari, Pune 411041
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

                {/* ==========================================
                    FOOTER BOTTOM
                ========================================== */}

                <div className="footer-bottom">

                    <div className="footer-copyright">

                        <p>

                            © 2026 Swanora Global.
                            All Rights Reserved.

                        </p>

                    </div>

                    <div className="footer-policy">

                       <RouterLink to="/privacy-policy">
                        Privacy Policy
                        </RouterLink>
                        
                        <span>|</span>

                        <RouterLink to="/terms-and-conditions">
                        Terms & Conditions
                        </RouterLink>

                    </div>

                    <button
                        className="back-top"
                        onClick={scrollToTop}
                        aria-label="Back To Top"
                    >

                        <FaArrowUp />

                    </button>

                </div>

            </div>

        </footer>

    );

};

export default Footer;