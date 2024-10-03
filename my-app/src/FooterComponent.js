import React from "react";
import "./FooterComponent.css";

const FooterComponent = () => {
  return (
    <div className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h3>Ready to launch your next project?</h3>
            <p>
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
            <button className="btn btn-primary">Get started a project</button>
          </div>
        </div>

        <hr className="bg-secondary" />

        <div className="row text-center">
          <div className="col-md-3">
            <h5>Brainwave.io</h5>
            <p>
              With lots of unique blocks, you can easily build a page without
              coding.
            </p>
            <div className="social-icons">
              <i className="fab fa-twitter"></i>
              <i className="fab fa-facebook-f mx-2"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin-in mx-2"></i>
            </div>
          </div>

          <div className="col-md-2">
            <h6>Company</h6>
            <ul className="list-unstyled">
              <li>About us</li>
              <li>Contact us</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          <div className="col-md-2">
            <h6>Product</h6>
            <ul className="list-unstyled">
              <li>Features</li>
              <li>Pricing</li>
              <li>News</li>
              <li>Help desk</li>
              <li>Support</li>
            </ul>
          </div>

          <div className="col-md-2">
            <h6>Services</h6>
            <ul className="list-unstyled">
              <li>Digital Marketing</li>
              <li>Content Writing</li>
              <li>SEO for Business</li>
              <li>UI Design</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6>Legal</h6>
            <ul className="list-unstyled">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Return Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
