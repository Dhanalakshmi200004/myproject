import React from "react";
import "./ServicesPage.css";

const ServicesPage = () => {
  return (
    <div className="services-section container">
      <div className="text-center my-5">
        <h6 className="text-uppercase text-danger">Our Services</h6>
        <h2>We provide great services for our customers based on needs</h2>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="card service-card bg-success text-white">
            <div className="card-body">
              <div className="icon mb-4">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Graphic Design"
                />
              </div>
              <h4>Graphic Design</h4>
              <p>
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page.
              </p>
              <a href="#" className="text-white">
                Learn more &rarr;
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card service-card bg-primary text-white">
            <div className="card-body">
              <div className="icon mb-4">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Web Development"
                />
              </div>
              <h4>Web Development</h4>
              <p>
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page.
              </p>
              <a href="#" className="text-white">
                Learn more &rarr;
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card service-card bg-danger text-white">
            <div className="card-body">
              <div className="icon mb-4">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Content Writing"
                />
              </div>
              <h4>Content Writing</h4>
              <p>
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page.
              </p>
              <a href="#" className="text-white">
                Learn more &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial-section-content text-center mt-5">
        <div className="testimonial-content">
          <img
            src="https://via.placeholder.com/100"
            alt="User"
            className="rounded-circle"
          />
          <div className="stars mt-2">{"⭐".repeat(5)}</div>
          <blockquote className="blockquote mt-3">
            <p>
              “OMG! I cannot believe that I have got a brand new landing page
              after getting Albino. It was super easy to edit and publish.”
            </p>
          </blockquote>
          <footer className="blockquote-footer">
            Franklin Hicks <cite title="Source Title">Web Developer</cite>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
