import React from "react";
import "./WhyChooseUsPage.css"; // Import the custom CSS for styling

const WhyChooseUsPage = () => {
  return (
    <div className="why-choose-us-section container my-5">
      {/* Title Section */}
      <div className="text-center mb-5">
        <h6 className="text-uppercase text-danger">Why Choose Us</h6>
        <h2>People choose us because we serve the best for everyone</h2>
      </div>

      {/* Services Section */}
      <div className="row text-center mb-5">
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="service-card">
            <div className="icon-wrapper">
              <i className="bi bi-person-circle icon"></i>
            </div>
            <h5>Dedicated project manager</h5>
            <p>
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="service-card">
            <div className="icon-wrapper">
              <i className="bi bi-list-check icon"></i>
            </div>
            <h5>Organized tasks</h5>
            <p>
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="service-card">
            <div className="icon-wrapper">
              <i className="bi bi-chat-left-dots icon"></i>
            </div>
            <h5>Easy feedback sharing</h5>
            <p>
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="service-card">
            <div className="icon-wrapper">
              <i className="bi bi-alarm icon"></i>
            </div>
            <h5>Never miss deadline</h5>
            <p>
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section text-center mt-5">
        <h3>Ready to launch your next project?</h3>
        <p>
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
        <button className="btn btn-primary">Get started a project</button>
      </div>
    </div>
  );
};

export default WhyChooseUsPage;
