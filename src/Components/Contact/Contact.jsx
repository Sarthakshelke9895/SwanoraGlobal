import React, { useState } from "react";
import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  return (

    <section
      className="contact"
      id="contact"
    >

      <div className="container">

        <div className="section-heading">

          <span>
            CONTACT US
          </span>

          <h2>
            Let's Discuss Your Export Requirements
          </h2>

          <p>
            We're here to answer your questions and help you find the
            right export solutions for your business.
          </p>

        </div>

        <div className="contact-wrapper">

          <div className="contact-left">

            <div className="contact-card">

              <FaMapMarkerAlt className="contact-icon"/>

              <div>

                <h4>
                  Office Address
                </h4>

                <p>
                  Surat, Gujarat, India
                </p>

              </div>

            </div>

            <div className="contact-card">

              <FaPhoneAlt className="contact-icon"/>

              <div>

                <h4>
                  Phone Number
                </h4>

                <p>
                  +91 98765 43210
                </p>

              </div>

            </div>

            <div className="contact-card">

              <FaEnvelope className="contact-icon"/>

              <div>

                <h4>
                  Email Address
                </h4>

                <p>
                  info@company.com
                </p>

              </div>

            </div>

            <div className="contact-card">

              <FaClock className="contact-icon"/>

              <div>

                <h4>
                  Working Hours
                </h4>

                <p>
                  Mon - Sat : 9:00 AM - 6:00 PM
                </p>

              </div>

            </div>

            <div className="contact-social">

              <a href="/">
                <FaFacebookF/>
              </a>

              <a href="/">
                <FaInstagram/>
              </a>

              <a href="/">
                <FaLinkedinIn/>
              </a>

            </div>

            <div className="contact-map">

              <iframe
                title="Company Location"
                src="https://www.google.com/maps?q=Surat,Gujarat&output=embed"
                loading="lazy"
                allowFullScreen
              />

            </div>

          </div>

          <div className="contact-right">

            <div className="form-top">

              <h3>
                Get A Free Consultation
              </h3>

              <p>
                Fill out the form below and our team will contact you within 24 hours.
              </p>

            </div>

           <form
  action="https://api.web3forms.com/submit"
  method="POST"
  className="contact-form"
>

  <input
    type="hidden"
    name="access_key"
    value="YOUR_WEB3FORMS_ACCESS_KEY"
  />

  <div className="form-grid">

    <div className="input-group">

      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder=" "
        required
      />

      <label htmlFor="name">
        Full Name *
      </label>

      <span className="input-line"></span>

    </div>

    <div className="input-group">

      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder=" "
        required
      />

      <label htmlFor="email">
        Email Address *
      </label>

      <span className="input-line"></span>

    </div>

    <div className="input-group">

            <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder=" "
                required
            />

            <label htmlFor="phone">
                Phone Number *
            </label>

            <span className="input-line"></span>

            </div>

            <div className="input-group">

            <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder=" "
            />

            <label htmlFor="company">
                Company Name
            </label>

            <span className="input-line"></span>

            </div>

        </div>

        <div className="input-group">

            <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder=" "
            />

            <label htmlFor="subject">
            Subject
            </label>

            <span className="input-line"></span>

        </div>

        <div className="input-group textarea-group">

            <textarea
            id="message"
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            placeholder=" "
            required
            />

            <label htmlFor="message">
            Write Your Message *
            </label>

            <span className="input-line"></span>

        </div>

        <button
            type="submit"
            className="submit-btn"
        >
            Send Message
        </button>

        </form>

          </div>

        </div>

      </div>

    </section>

  );

};

export default Contact;