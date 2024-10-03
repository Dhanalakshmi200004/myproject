import React from "react";
import CaseStudyCard from "./CaseStudyCard";

// Placeholder images or you can add image imports here
// import auraImage from "./assets/aura.jpg";
// import absSnackImage from "./assets/abs-snack.jpg";
// import gradientImage from "./assets/gradient-website.jpg";
// import magazineImage from "./assets/magazine.jpg";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Aura Branding Design",
      description: "Graphic Design",
      // image: auraImage,
    },
    {
      title: "A.B.S Snack Packaging",
      description: "Graphic Design",
      // image: absSnackImage,
    },
    {
      title: "Gradient Website Development",
      description: "Web Development",
      // image: gradientImage,
    },
    {
      title: "Magazine Content Writing",
      description: "Content Writing",
      // image: magazineImage,
    },
  ];

  return (
    <div className="container">
      <h2 className="text-center my-5">
        Our works describe why we are the best in the business
      </h2>
      <div className="row">
        {caseStudies.map((study, index) => (
          <CaseStudyCard
            key={index}
            title={study.title}
            description={study.description}
            image={study.image}
          />
        ))}
      </div>

      <div className="text-center my-4">
        <a href="/all-works" className="see-all-link">
          See all works <span className="arrow">→</span>
        </a>
      </div>
    </div>
  );
};

export default CaseStudies;
