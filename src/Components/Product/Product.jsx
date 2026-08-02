import React from "react";
import "./Product.css";
import { FaArrowRight } from "react-icons/fa";
import {
  FaPepperHot,
  FaAppleAlt,
  FaSeedling,
  FaLeaf,
  FaSnowflake,
  FaGlobeAsia
} from "react-icons/fa";

const products = [
  {
    icon: <FaPepperHot />,
    title: "Spices",
    image:
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=1200&q=80",
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
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1200&q=80",
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
    image:
      "https://images.unsplash.com/photo-1515543904379-3d757afe72e2?auto=format&fit=crop&w=1200&q=80",
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
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
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
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
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
    image:
      "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=1200&q=80",
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
  return (
    <section
      className="products"
      id="products"
    >
      <div className="container">

        <div className="section-heading">

          <span>
            PRODUCT PORTFOLIO
          </span>

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

          {products.map((item, index) => (

            <div
              className="product-card"
              key={index}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="product-overlay">

                <div className="overlay-top">

                  <div className="overlay-icon">

                    {item.icon}

                  </div>

                  <h3>

                    {item.title}

                  </h3>

                </div>

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

              <div className="product-bottom">

                <div className="product-name">

                  <h4>

                    {item.title}

                  </h4>

                  <span>

                    {item.products.length} Products

                  </span>

                </div>

                <FaArrowRight />

              </div>

            </div>

          ))}

        </div>

  

      </div>
    </section>
  );
};

export default Products;