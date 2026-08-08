import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/Logo.webp";
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
              <span>Flat No.305, Morya Corner, Near Suryaganga Society, Dhayari, Pune 411041</span>
            </div>

            <div className="top-item">
              <MdEmail />
              <span>info@swanoraglobal.com</span>
            </div>

            <div className="top-item">
              <FaPhoneAlt />
              <span>+91 8600421881</span>
            </div>
          </div>

      
<div className="top-right">
  <a
    href="https://www.facebook.com/share/1BfFPUs27t/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://www.linkedin.com/in/swanora-global-7ab282422/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedinIn />
  </a>

  <a
    href="https://www.instagram.com/swanora_global/"
    target="_blank"
    rel="noopener noreferrer"
  >
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
                  offset={-20}
                  duration={600}
                  activeClass="active"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}

            <button
            className="quote-btn"
            onClick={() =>
              window.open(
                "https://wa.me/918600421881?text=Hello%20Swanora%20Global,%20I%20would%20like%20to%20get%20a%20quotation.",
                "_blank"
              )
            }
          >
            Get Quote
          </button>
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