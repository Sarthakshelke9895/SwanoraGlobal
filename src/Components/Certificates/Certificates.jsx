import React from "react";
import "./Certificates.css";

const certificates = [
  {
    title: "ISO 9001",
    image: "https://cdn.worldvectorlogo.com/logos/iso-1.svg"
  },
  {
    title: "CE",
    image: "https://cdn.worldvectorlogo.com/logos/ce-2.svg"
  },
  {
    title: "FDA",
    image: "https://cdn.worldvectorlogo.com/logos/fda.svg"
  },
  {
    title: "IEC",
    image: "https://cdn.worldvectorlogo.com/logos/iec.svg"
  },
  {
    title: "ISO Certified",
    image: "https://cdn.worldvectorlogo.com/logos/iso.svg"
  },
 

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