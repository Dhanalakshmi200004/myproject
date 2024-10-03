import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="container-fluid main-section">
      <header className="d-flex justify-content-between align-items-center py-3">
        <div className="logo">Brainwave.io</div>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Demos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Support
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button className="btn btn-primary">Get started a project</button>
      </header>

      <div className="row main-content">
        <div className="col-md-6 text-content">
          <h6>LET'S SHIFT YOUR BUSINESS</h6>
          <h1>Shift your business fast with Shade Pro.</h1>
          <p>
            With lots of unique blocks, you can easily build a page without
            coding. Build your next consultancy website within few minutes.
          </p>
          <button className="btn btn-primary">Get started a project</button>
        </div>
        <div className="col-md-6 image-content">
          <img
            src="/images/1stpage.png"
            alt=""
            className="img-fluid rounded-circle"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
