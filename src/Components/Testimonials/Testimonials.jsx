import React, { useEffect, useState } from "react";
import "./Testimonials.css";
import testimonials from "./testimonialsData";
import {
  FaArrowLeft,
  FaArrowRight,
  FaStar,
  FaCheckCircle,
  FaQuoteLeft
} from "react-icons/fa";

const Testimonials = () => {

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

 const [cardsPerView, setCardsPerView] = useState(3);

useEffect(() => {
  const updateCardsPerView = () => {
    if (window.innerWidth <= 768) {
      setCardsPerView(1);
    } else if (window.innerWidth <= 992) {
      setCardsPerView(2);
    } else {
      setCardsPerView(3);
    }
  };

  updateCardsPerView();

  window.addEventListener("resize", updateCardsPerView);

  return () => window.removeEventListener("resize", updateCardsPerView);
}, []);

  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials
  ];

const nextSlide = () => {
  setCurrent((prev) =>
    prev >= testimonials.length - cardsPerView
      ? 0
      : prev + 1
  );
};
const prevSlide = () => {
  setCurrent((prev) =>
    prev === 0
      ? testimonials.length - cardsPerView
      : prev - 1
  );
};

  useEffect(() => {

    if (current >= testimonials.length) {

      setTimeout(() => {
        setCurrent(0);
      }, 600);

    }

  }, [current]);

useEffect(() => {

  if (isPaused) return;

  const interval = setInterval(() => {

    setCurrent(prev =>
      prev >= testimonials.length - cardsPerView
        ? 0
        : prev + 1
    );

  }, 5000);

  return () => clearInterval(interval);

}, [isPaused, cardsPerView]);

  return (

    <section
      className="testimonials"
      id="testimonials"
    >

      <div className="container">

        <div className="testimonial-header">

          <div className="section-heading">

            <span>
              CLIENT TESTIMONIALS
            </span>

            <h2>
              What Our Clients Say
            </h2>

            <p>
              Trusted by businesses across the globe for quality,
              reliability and exceptional export services.
            </p>

          </div>

          <div className="testimonial-navigation">

            <button
              className="nav-btn"
              onClick={prevSlide}
            >
              <FaArrowLeft />
            </button>

            <button
              className="nav-btn"
              onClick={nextSlide}
            >
              <FaArrowRight />
            </button>

          </div>

        </div>

        <div
          className="testimonial-slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          <div
            className="testimonial-track"
            style={{
              transform: `translateX(-${current * (100 / cardsPerView)}%)`,
              transition:
                current === testimonials.length
                  ? "none"
                  : "transform .6s ease"
            }}
          >

            {duplicatedTestimonials.map((item, index) => (

              <div
                className="testimonial-slide"
                key={index}
              >

                <div className="testimonial-card">

                  <FaQuoteLeft className="quote-icon" />

                  <div className="testimonial-stars">

                    {Array.from({
                      length: item.rating
                    }).map((_, star) => (

                      <FaStar key={star} />

                    ))}

                  </div>

                  <p className="testimonial-review">

                    "{item.review}"

                  </p>

                  <div className="testimonial-user">

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    <div className="testimonial-info">

                      <h3>

                        {item.name}

                        {item.verified && (

                          <FaCheckCircle
                            className="verified-icon"
                          />

                        )}

                      </h3>

                      <span>

                        {item.designation}

                      </span>

                      <h5>

                        {item.company}

                      </h5>

                      <p>

                        {item.flag} {item.country}

                      </p>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
                <div className="testimonial-dots">

          {testimonials.map((_, index) => (

            <span
              key={index}
              className={
                current % testimonials.length === index
                  ? "dot active"
                  : "dot"
              }
              onClick={() => setCurrent(index)}
            />

          ))}

        </div>

      </div>

    </section>

  );

};

export default Testimonials;