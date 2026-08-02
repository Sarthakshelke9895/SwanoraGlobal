import React from "react";
import "./WhyChooseUs.css";
import { FaCheckCircle } from "react-icons/fa";
import whyimage from "../../Assets/whyimage.jpg"

const points = [
  "Premium Quality Products",
  "Competitive International Pricing",
  "Worldwide Export Network",
  "Reliable & Timely Delivery",
  "Customer Satisfaction",
  "Professional Support"
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose" id="why-us">

      <div className="container why-container">

        <div className="why-image">

          <img
            src={whyimage}
            alt="Export"
          />

        </div>

        <div className="why-content">

          <span className="section-tag">
            WHY CHOOSE US
          </span>

          <h2>
            Your Trusted Export
            
            Partner Worldwide
          </h2>

          <p>
            We combine quality manufacturing, competitive pricing,
            reliable logistics and exceptional customer service to
            deliver products that meet international standards.
          </p>

          <div className="why-list">

            {points.map((item,index)=>(

              <div className="why-item" key={index}>

                <FaCheckCircle/>

                <span>{item}</span>

              </div>

            ))}

          </div>



        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;