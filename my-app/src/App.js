import React from "react";
import HomePage from "./HomePage";
import ServicesPage from "./ServicesPage";
import OurStoryPage from "./OurStoryPage";
import WhyChooseUsPage from "./WhyChooseUsPage";
import CaseStudies from "./CaseStudies";
import Testimonial from "./Testimonial";
import FooterComponent from "./FooterComponent";

const App = () => {
  return (
    <div>
      <HomePage />
      <ServicesPage />
      <OurStoryPage />
      <WhyChooseUsPage /> <CaseStudies />
      <Testimonial />
      <FooterComponent />
    </div>
  );
};

export default App;
