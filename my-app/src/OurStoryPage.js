import React from "react";
import "./OurStoryPage.css";

const OurStoryPage = () => {
  return (
    <div className="our-story-section container my-5">
      <div className="text-center mb-5">
        <h6 className="text-uppercase text-danger">Our Story</h6>
        <h2>
          We know how everything works and why your business is failing over and
          over again.
        </h2>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="image-wrapper">
            <img
              src="https://via.placeholder.com/300"
              alt="Main Story"
              className="img-fluid rounded shadow-lg mb-3"
            />
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <div className="d-flex mb-3">
            <img
              src="https://via.placeholder.com/150"
              alt="Secondary Story"
              className="img-fluid rounded shadow-lg me-3"
            />
            <img
              src="https://via.placeholder.com/100"
              alt="Tertiary Story"
              className="img-fluid rounded shadow-lg"
            />
          </div>
          <p className="story-text">
            We share common trends and strategies for improving your rental
            income and making sure you stay in high demand. With lots of unique
            blocks, you can easily build a page without coding. Build your next
            landing page.
          </p>
        </div>
      </div>

      <div className="row text-center mt-5">
        <div className="col-md-4">
          <h2>1M+</h2>
          <p>Customers visit Omega every month to get their service done.</p>
        </div>
        <div className="col-md-4">
          <h2>92%</h2>
          <p>Satisfaction rate comes from our awesome customers.</p>
        </div>
        <div className="col-md-4">
          <h2>4.9/5.0</h2>
          <p>Average customer ratings we have got all over the internet.</p>
        </div>
      </div>
    </div>
  );
};

export default OurStoryPage;
