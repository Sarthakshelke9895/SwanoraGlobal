import React from "react";
import "./Counter.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  FaGlobe,
  FaBoxOpen,
  FaUsers,
  FaAward
} from "react-icons/fa";

const counterData = [
  {
    icon: <FaGlobe />,
    end: 25,
    suffix: "+",
    title: "Countries",
    subtitle: "We Export To"
  },
  {
    icon: <FaBoxOpen />,
    end: 30,
    suffix: "+",
    title: "Products",
    subtitle: "Available"
  },
  {
    icon: <FaUsers />,
    end: 20,
    suffix: "+",
    title: "Satisfied",
    subtitle: "Clients"
  },
  {
    icon: <FaAward />,
    end: 2,
    suffix: "+",
    title: "Years Of",
    subtitle: "Experience"
  }
];

const Counter = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: .4
  });

  return (
    <section className="counter" ref={ref}>

      <div className="container counter-container">

        {counterData.map((item, index) => (

          <div className="counter-item" key={index}>

            <div className="counter-icon">
              {item.icon}
            </div>

            <h2>

              {inView && (

                <CountUp
                  start={0}
                  end={item.end}
                  duration={2.5}
                />

              )}

              {item.suffix}

            </h2>

            <h4>{item.title}</h4>

            <p>{item.subtitle}</p>

          </div>

        ))}

      </div>

    </section>
  );

};

export default Counter;