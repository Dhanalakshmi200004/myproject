import React from "react";
import "./Testimonial.css"; // Import custom CSS for styling

const Testimonial = () => {
  return (
    <section className="testimonial-section text-center d-flex align-items-center justify-content-center">
      <div className="testimonial-content">
        <h6 className="text-uppercase">Testimonial</h6>
        <blockquote className="testimonial-quote">
          “Simply the best. Better than all the rest. I’d recommend this product
          to beginners and advanced users.”
        </blockquote>
        <div className="testimonial-author mt-4">
          <img
            src="https://via.placeholder.com/100"
            alt="Ian Klein"
            className="rounded-circle author-image"
          />
          <h5 className="author-name mt-3">Ian Klein</h5>
          <p className="author-position">Digital Marketer</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
