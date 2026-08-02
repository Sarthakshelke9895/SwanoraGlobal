import React from "react";
import "./Hero.css";
import heroBg from "../../Assets/hero-backgorund.jpg";
import logo from "../../Assets/Logo.png";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay"></div>

      <div className="container hero-container">
        <div className="hero-content">

          <span className="hero-tag">
            GLOBAL EXPORT SOLUTIONS
          </span>

          <h1 className="hero-title">
            CONNECTING <span>INDIA</span>
            TO THE WORLD
          </h1>

          <p className="hero-description">
            We deliver trusted export solutions, connecting quality Indian
            products to global markets with reliability, transparency and
            excellence.
          </p>

          <div className="hero-buttons">

            <Link
              to="products"
              smooth={true}
              duration={700}
              offset={-90}
              className="hero-btn primary-btn"
            >
              <FaArrowRight />
              Explore Products
            </Link>

            <a
            href="/Sarthak_Shelke_Resume.pdf"
            download="Swanora-Global-Brochure.pdf"
            className="hero-btn secondary-btn"
          >
            <FaDownload />
            Download Brochure
          </a>

          </div>

        </div>

        <div className="hero-right">

          <img
            src={logo}
            alt="Company Logo"
            className="hero-logo"
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;