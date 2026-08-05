import React from "react";
import "./Certificates.css";
import Apeda from "../../Assets/apeda.webp";
import IEC from '../../Assets/IEC.webp';
import RCMC from '../../Assets/rcmc.webp'
import Spices from '../../Assets/spices.webp'
const certificates = [
  {
    title: "APEDA",
    image:Apeda,
  },
  {
    title: "IEC (DGFT)",
    image: IEC,
  },
  {
    title: "RCMC",
    image: RCMC,
  },
  {
    title: "Spices Board",
    image: Spices,
  },
    {
    title: "APEDA",
    image:Apeda,
  },
  {
    title: "IEC (DGFT)",
    image: IEC,
  },
  {
    title: "RCMC",
    image: RCMC,
  },
  {
    title: "Spices Board",
    image: Spices,
  }
  
];

const Certificates = () => {
  return (
    <section
      className="certificates"
      id="certificates"
    >
      <div className="container">

        <div className="section-heading">

          <span>
            CERTIFIED & TRUSTED
          </span>

          <h2>
            International Standards & Certifications
          </h2>

          <p>
            Committed to maintaining international quality standards and
            trusted export practices
          </p>

        </div>

        <div className="marquee">

          <div className="marquee-track">

            {[...certificates, ...certificates].map((item, index) => (

              <div
                className="certificate-card"
                key={index}
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="certificate-logo"
                  loading="lazy"
                />

                <h4>
                  {item.title}
                </h4>

              </div>

            ))}

          </div>

        </div>

        <div className="marquee reverse">

          <div className="marquee-track reverse-track">

            {[...certificates]
              .reverse()
              .concat([...certificates].reverse())
              .map((item, index) => (

                <div
                  className="certificate-card"
                  key={index}
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="certificate-logo"
                    loading="lazy"
                  />

                  <h4>
                    {item.title}
                  </h4>

                </div>

              ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Certificates;