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
    title: "Agricultural Product Export",
    description:
      "We export premium-quality Indian spices, fresh fruits, pulses, cereals, grains, frozen foods, and other agricultural products to customers worldwide."
  },
  {
    icon: <FaHandshake />,
    title: "Product Sourcing",
    description:
      "We source products directly from trusted farmers, FPOs, and certified processing partners across India to ensure consistent quality and competitive pricing."
  },
  {
    icon: <FaBoxOpen />,
    title: "Export Packaging",
    description:
      "Customized export packaging solutions including bulk packaging, retail-ready packs, private labeling, and custom branding based on customer requirements."
  },
  {
    icon: <FaFileSignature />,
    title: "Quality Inspection",
    description:
      "Every shipment undergoes strict quality inspections to meet international standards for freshness, hygiene, safety, and product consistency."
  },
  {
    icon: <FaShippingFast />,
    title: "Global Logistics & Shipping",
    description:
      "Complete export logistics including container booking, customs clearance, freight coordination, and timely international delivery."
  },
  {
    icon: <FaWarehouse />,
    title: "Export Documentation",
    description:
      "Preparation of all essential export documents, certifications, customs paperwork, and buyer-specific documentation for smooth international trade."
  }
];
const Services = () => {
  return (
    <section className="services" id="services">

      <div className="container">

        <div className="section-heading">

          <span>OUR SERVICES</span>

          <h2>
            Export Solutions
            For Global Business
          </h2>

          <p>
            We provide export services that help businesses
            expand confidently into international markets
          </p>

        </div>

        <div className="services-grid">

          {services.map((service, index) => (

            <div className="service-card" key={index}>

            <div className="service-header">

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

            </div>

            <p>{service.description}</p>

         

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Services;