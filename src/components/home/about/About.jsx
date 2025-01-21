import heatmap3s from "../../../assets/goodHeatmap.jpg";
import heatmap7s from "../../../assets/goodheatmap2.jpg";
import scanpath from "../../../assets/goodScanpath.jpg";
import recommendations from "../../../assets/Recommen.jpg";
import scanpath2 from "../../../assets/scanpath.jpg";

import React, { useState, useEffect, useRef } from "react";
import "./about.css";

const images = [heatmap7s, scanpath2, recommendations,heatmap3s ,scanpath];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slideInterval = useRef(null);

  const startSlider = () => {
    slideInterval.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500);
  };

  
  const stopSlider = () => {
    clearInterval(slideInterval.current);
  };

  
  useEffect(() => {
    startSlider(); 
    return () => clearInterval(slideInterval.current); 
  }, []);

  return (
    <>
      <h1 className="headerAbout">About</h1>
      <div className="big-container">
        <div
          className="containerAbout"
          onMouseOver={stopSlider} 
          onMouseOut={startSlider} 
        >
          <div className="images">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`slide-${index}`}
                className={index === currentIndex ? "active" : ""}
              />
            ))}
          </div>
          <div className="dotContainer">
            {images.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              ></div>
            ))}
          </div>
        </div>

        <div className="text">
          <h2>What is an AI-Generated heatmap?</h2>
          <p className="one">
            AI-powered photo heatmaps utilize advanced deep learning models to analyze visual
            focus and engagement on your images. By providing a graphical representation of where attention
            is concentrated, these heatmaps can reveal which areas of your photo are most captivating, which
            elements draw the eye, and which portions are overlooked.
          </p>
          <hr />
          <p className="two">
            Our platform offers a user-friendly photo heatmap tool that allows you to upload your images and receive instant heatmap feedback.
            For the most precise and detailed analysis, consider signing up for our service, which includes additional features to enhance your visual
            content strategy.
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
