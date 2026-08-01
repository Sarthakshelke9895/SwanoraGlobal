import React from "react";
import "./Process.css";
import {
  FaClipboardList,
  FaSearch,
  FaBoxOpen,
  FaShip
} from "react-icons/fa";

const process = [
  {
    icon: <FaClipboardList />,
    title: "Inquiry",
    description: "Share your requirements and product specifications."
  },
  {
    icon: <FaSearch />,
    title: "Quality Check",
    description: "Products undergo strict quality inspection."
  },
  {
    icon: <FaBoxOpen />,
    title: "Packaging",
    description: "Safe export packaging following global standards."
  },
  {
    icon: <FaShip />,
    title: "Global Delivery",
    description: "Fast and secure worldwide shipping."
  }
];

const Process = () => {
  return (
    <section className="process">

      <div className="container">

        <div className="section-heading">

          <span>OUR PROCESS</span>

          <h2>How We Deliver Excellence</h2>

        </div>

        <div className="process-wrapper">

          {process.map((item,index)=>(

            <div className="process-item" key={index}>

              <div className="process-icon">

                {item.icon}

              </div>

              <h4>{item.title}</h4>

              <p>{item.description}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Process;