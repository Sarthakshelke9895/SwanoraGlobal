import React, { useState } from "react";
import "./Product.css";
import {
  FaArrowRight,
  FaArrowLeft,
  FaPepperHot,
  FaAppleAlt,
  FaSeedling,
  FaLeaf,
  FaSnowflake,
  FaGlobeAsia,
} from "react-icons/fa";

import Image1 from '../../Assets/1.webp';
import Image2 from '../../Assets/2.webp';
import Image3 from '../../Assets/3.webp';
import Image4 from '../../Assets/4.webp';
import Image5 from '../../Assets/5.webp';
import Image6 from '../../Assets/6.webp';

const products = [
  {
    icon: <FaPepperHot />,
    title: "Spices",
    image: Image1,
    description:
      "Premium-quality Indian spices sourced directly from trusted growers across India.",
    products: [
      "Turmeric Fingers",
      "Turmeric Powder",
      "Whole Red Chilli",
      "Red Chilli Powder",
      "Coriander Seeds",
      "Cumin Seeds"
    ]
  },
  {
    icon: <FaAppleAlt />,
    title: "Fresh Fruits",
    image: Image2,
    description:
      "Fresh Indian fruits carefully selected to maintain freshness and export quality.",
    products: [
      "Pomegranate",
      "Banana",
      "Fresh Grapes",
      "Semi Husked Coconut"
    ]
  },
  {
    icon: <FaLeaf />,
    title: "Fresh Vegetables",
    image: Image3,
    description:
      "Fresh Indian vegetables carefully sourced and selected to meet quality standards for international markets.",
    products: [
      "Green Chilli",
      "Onion",
      "Garlic",
      "Ginger"
    ]
  },
  {
    icon: <FaSeedling />,
    title: "Cereals & Grains",
    image: Image4,
    description:
      "High-quality Indian cereals and grains sourced to meet the requirements of international markets.",
    products: [
      "Basmati Rice",
      "Non-Basmati Rice",
      "Wheat",
      "Maize (Corn)",
      "Sorghum (Jowar)",
      "Pearl Millet (Bajra)"
    ]
  },
  {
    icon: <FaSnowflake />,
    title: "Frozen Foods",
    image: Image5,
    description:
      "Quality frozen fruits and vegetables preserved using advanced freezing technology to maintain freshness and taste.",
    products: [
      "Frozen Green Peas",
      "Frozen Sweet Corn",
      "Frozen Mixed Vegetables",
      "Frozen Okra",
      "Frozen Mango"
    ]
  },
  {
    icon: <FaGlobeAsia />,
    title: "Pulses",
    image: Image6,
    description:
      "Nutritious Indian pulses carefully processed and sourced to meet quality standards for international markets.",
    products: [
      "Chickpeas",
      "Green Gram (Moong)",
      "Black Gram (Urad)",
      "Pigeon Pea (Toor)",
      "Red Lentils (Masoor)",
      "Kidney Beans (Rajma)"
    ]
  }
];

const Products = () => {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (index) => {
    setActiveCard((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className="products"
      id="products"
    >
      <div className="container">
        <div className="section-heading">
          <span>PRODUCT PORTFOLIO</span>

          <h2>
            Premium Indian Agricultural Products
          </h2>

          <p>
            We export a wide range of premium-quality agricultural
            products from India to international markets with
            reliability, consistency and global quality standards.
          </p>
        </div>

        <div className="products-grid">
          {products.map((item, index) => {
            const isOpen = activeCard === index;

            return (
              <div
                key={index}
                className={`product-card ${isOpen ? "active" : ""}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                />

                <div
                  className={`product-overlay ${
                    isOpen ? "show" : ""
                  }`}
                >
                  <div className="overlay-header">
                    <div className="overlay-heading">
                      <div className="overlay-icon">
                        {item.icon}
                      </div>

                      <div className="overlay-title">
                        <h3>{item.title}</h3>

                        <span>
                          {item.products.length} Products
                        </span>
                      </div>
                    </div>

                    <button
                      className="overlay-arrow"
                      onClick={() => toggleCard(index)}
                      aria-label={
                        isOpen
                          ? "Close Product"
                          : "Open Product"
                      }
                    >
                      {isOpen ? (
                        <FaArrowLeft />
                      ) : (
                        <FaArrowRight />
                      )}
                    </button>
                  </div>

                  <div
                    className={`overlay-content ${
                      isOpen ? "show" : ""
                    }`}
                  >
                    <p className="overlay-description">
                      {item.description}
                    </p>

                    <div className="overlay-divider"></div>

                    <ul className="overlay-list">
                      {item.products.map((product, i) => (
                        <li key={i}>
                          {product}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;