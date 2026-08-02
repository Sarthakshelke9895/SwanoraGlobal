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

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    const data = {
      access_key: "b0d90474-8791-4dbc-8541-ba0c44d3354b", // Replace with your actual Web3Forms Access Key
      subject:
        formData.subject || "New Website Enquiry - Swanora Global",
      from_name: formData.name,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      message: formData.message
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");

        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: ""
        });
      } else {
        setStatus(result.message || "Failed to send your enquiry.");
      }
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-heading">
          <span>CONTACT US</span>

          <h2>Let's Discuss Your Export Requirements</h2>

          <p>
            We're here to answer your questions and help you find the right
            export solutions for your business.
          </p>
        </div>

        <div className="contact-wrapper">
          {/* ===========================
              LEFT SIDE
          ============================ */}

          <div className="contact-left">
            <div className="contact-card">
              <FaMapMarkerAlt className="contact-icon" />

              <div>
                <h4>Office Address</h4>

                <p>
                  Flat No.305, Morya Corner,
               
                  Near Suryaganga Society,
                
                  Dhayari, Pune - 411041
                </p>
              </div>
            </div>

            <div className="contact-card">
              <FaPhoneAlt className="contact-icon" />

              <div>
                <h4>Phone Number</h4>

                <p>+91 8600421881</p>
              </div>
            </div>

            <div className="contact-card">
              <FaEnvelope className="contact-icon" />

              <div>
                <h4>Email Address</h4>

                <p>info@swanoraglobal.com</p>
              </div>
            </div>

            <div className="contact-card">
              <FaClock className="contact-icon" />

              <div>
                <h4>Working Hours</h4>

                <p>Monday - Saturday : 9:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="contact-social">
              <a href="/" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>

              <a href="/" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>

              <a href="/" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>
            </div>

            <div className="contact-map">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>

          {/* ===========================
              RIGHT SIDE
          ============================ */}

          <div className="contact-right">
            <div className="form-top">
              <h3>Get A Free Consultation</h3>

              <p>
                Fill out the form below and our team will contact you within 24
                hours.
              </p>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
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

                  <label htmlFor="name">Full Name *</label>

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

                  <label htmlFor="email">Email Address *</label>

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

                  <label htmlFor="phone">Phone Number *</label>

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

                  <label htmlFor="company">Company Name</label>

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

                <label htmlFor="subject">Subject</label>

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

                <label htmlFor="message">Write Your Message *</label>

                <span className="input-line"></span>
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="form-success">
                  ✅ Thank you! Your enquiry has been sent successfully. We'll
                  get back to you shortly.
                </p>
              )}

              {status && status !== "success" && (
                <p className="form-error">{status}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;