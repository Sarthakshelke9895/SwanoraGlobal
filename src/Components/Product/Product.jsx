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
  FaGlobeAsia
} from "react-icons/fa";

import Image1 from '../../Assets/1.png';
import Image2 from '../../Assets/2.png';
import Image3 from '../../Assets/3.png';
import Image4 from '../../Assets/4.png';
import Image5 from '../../Assets/5.png';
import Image6 from '../../Assets/6.png';

const products = [
  {
    icon: <FaPepperHot />,
    title: "Spices",
    image:Image1,
    description:
      "Premium-quality Indian spices sourced directly from trusted growers across India.",
    products: [
      "Turmeric Fingers",
      "Turmeric Powder",
      "Whole Red Chilli",
      "Red Chilli Powder"
    ]
  },
  {
    icon: <FaAppleAlt />,
    title: "Fresh Fruits",
    image:Image2,
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
    icon: <FaSeedling />,
    title: "Pulses",
    image:Image3,
    description:
      "Nutritious Indian pulses processed under strict quality standards for international markets.",
    products: [
      "Chickpeas",
      "Green Gram (Moong)",
      "Black Gram (Urad)",
      "Pigeon Pea (Toor)",
      "Red Lentils (Masoor)",
      "Kidney Beans (Rajma)"
    ]
  },
  {
    icon: <FaLeaf />,
    title: "Cereals & Grains",
    image:Image4,
    description:
      "High-quality cereals and grains exported to meet global food standards.",
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
    image:Image5, 
    description:
      "Frozen vegetables and fruits preserved using advanced freezing technology.",
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
    title: "Other Agricultural Products",
    image:Image6,
    description:
      "A diverse range of agricultural commodities sourced from reliable suppliers across India.",
    products: [
      "Garlic",
      "Ginger",
      "Onion",
      "Tamarind",
      "Fresh Lemon",
      "Groundnuts",
      "Coriander Seeds",
      "Cumin Seeds"
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