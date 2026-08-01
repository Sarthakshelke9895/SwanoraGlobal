import React from "react";
import "./Services.css";
import {
  FaGlobeAsia,
  FaShippingFast,
  FaBoxOpen,
  FaFileSignature,
  FaWarehouse,
  FaHandshake
} from "react-icons/fa";

const services = [
  {
    icon: <FaGlobeAsia />,
    title: "Export Consulting",
    description:
      "Professional guidance for international trade, documentation and export planning."
  },
  {
    icon: <FaShippingFast />,
    title: "Global Logistics",
    description:
      "Reliable worldwide transportation with efficient shipping solutions."
  },
  {
    icon: <FaBoxOpen />,
    title: "Product Sourcing",
    description:
      "High-quality sourcing from trusted manufacturers across India."
  },
  {
    icon: <FaFileSignature />,
    title: "Documentation",
    description:
      "Complete export documentation and compliance support."
  },
  {
    icon: <FaWarehouse />,
    title: "Supply Chain",
    description:
      "Efficient warehousing, inventory management and distribution."
  },
  {
    icon: <FaHandshake />,
    title: "Customer Support",
    description:
      "Dedicated support throughout every stage of your export journey."
  }
];

const Services = () => {
  return (
    <section className="services" id="services">

      <div className="container">

        <div className="section-heading">

          <span>OUR SERVICES</span>

          <h2>
            Complete Export Solutions
            <br />
            For Global Business
          </h2>

          <p>
            We provide comprehensive export services that help businesses
            expand confidently into international markets.
          </p>

        </div>

        <div className="services-grid">

          {services.map((service, index) => (

            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button>
                Learn More →
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Services;