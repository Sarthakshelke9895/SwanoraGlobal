import React from "react";
import "./FeatureStrip.css";
import {
  FaAward,
  FaGlobe,
  FaShieldAlt,
  FaHandshake
} from "react-icons/fa";

const features = [
  {
    icon: <FaAward />,
    title: "Premium Quality",
    description: "We ensure the highest standards in every product."
  },
  {
    icon: <FaGlobe />,
    title: "Global Reach",
    description: "Delivering to 50+ countries across the world."
  },
  {
    icon: <FaShieldAlt />,
    title: "Trust & Reliability",
    description: "Building long-term relationships through trust."
  },
  {
    icon: <FaHandshake />,
    title: "Customer Focus",
    description: "Your satisfaction is our top priority."
  }
];

const FeatureStrip = () => {
  return (
    <section className="feature-strip">

      <div className="container feature-strip-container">

        {features.map((feature, index) => (

          <div
            className={`feature-box ${
              index !== features.length - 1 ? "border-right" : ""
            }`}
            key={index}
          >

            <div className="feature-icon">
              {feature.icon}
            </div>

            <div className="feature-content">

              <h4>{feature.title}</h4>

              <p>{feature.description}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default FeatureStrip;