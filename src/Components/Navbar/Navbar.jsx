import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/Logo.png";
import { Link } from "react-scroll";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const navLinks = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "products", title: "Products" },
  { id: "services", title: "Services" },
  { id: "why-us", title: "Why Us" },
 
  { id: "contact", title: "Contact" },
];

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-left">
            <div className="top-item">
              <FaMapMarkerAlt />
              <span>Surat, Gujarat, India</span>
            </div>

            <div className="top-item">
              <MdEmail />
              <span>info@company.com</span>
            </div>

            <div className="top-item">
              <FaPhoneAlt />
              <span>+91 98765 43210</span>
            </div>
          </div>

          <div className="top-right">
            <a href="/">
              <FaFacebookF />
            </a>

            <a href="/">
              <FaLinkedinIn />
            </a>

            <a href="/">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <nav className={`navbar ${sticky ? "sticky" : ""}`}>
        <div className="container navbar-container">
          <div className="logo">
            <img src={logo} alt="Fusion Exports Logo" />

            <div className="logo-content">
                <h2>Swanora Global</h2>
                <p>Connecting India to the world</p>
            </div>
            </div>

          <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
            {navLinks.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={600}
                  activeClass="active"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}

            <a href="#contact" className="quote-btn">
              Get Quote
            </a>
          </ul>

          <div
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;