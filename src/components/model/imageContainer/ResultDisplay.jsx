/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./resultDisplay.css";
import HeatmapSlider from "./heatmapSlider/HeatmapSlider";

import OriginalImage from "../OriginalImage";

const ResultDisplay = ({ helpName, resultImage, originalImage }) => {
  const imageContainerRef = useRef(null);
  const resultRef = useRef(null);

  return (
    <div ref={imageContainerRef} className="result-display">
      <OriginalImage
        imageFile={originalImage}
        imageContainerRef={imageContainerRef}
      />
      {resultImage && (
        <>
          <img
            ref={resultRef}
            src={resultImage}
            alt="result"
            className={`result ${/heatmap/.test(helpName) ? "heatmap" : ""}`}
            draggable="false"
          />
          {/heatmap/.test(helpName) && (
            <HeatmapSlider
              imageContainerRef={imageContainerRef}
              resultRef={resultRef}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ResultDisplay;
