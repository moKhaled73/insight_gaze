/* eslint-disable react/prop-types */
import { useRef } from "react";
import { useImageFile } from "../../../context/ImageFileProvider";
import "./resultDisplay.css";
import HeatmapSlider from "./heatmapSlider/HeatmapSlider";

import OriginalImage from "../OriginalImage";

const ResultDisplay = ({ helpName }) => {
  const {
    heatmapImage,
    scanpathImage,
    recommendationImage,
    heatmap3s,
    heatmap7s,
    scanpath,
  } = useImageFile();
  const imageContainerRef = useRef(null);
  const resultRef = useRef(null);

  return (
    <div ref={imageContainerRef} className="result-display">
      <OriginalImage
        imageFile={
          helpName === "heatmap-3s"
            ? heatmapImage
            : helpName === "heatmap-7s"
            ? heatmapImage
            : helpName === "scanpath"
            ? scanpathImage
            : recommendationImage
        }
        imageContainerRef={imageContainerRef}
      />
      {/heatmap/.test(helpName) ? (
        <>
          {heatmap3s && heatmap7s && (
            <>
              <img
                ref={resultRef}
                src={`${helpName === "heatmap-3s" ? heatmap3s : heatmap7s}`}
                alt="result"
                className="result heatmap"
                draggable="false"
              />
              <HeatmapSlider
                imageContainerRef={imageContainerRef}
                resultRef={resultRef}
              />
            </>
          )}
        </>
      ) : (
        <>
          {scanpath && <img src={scanpath} alt="result" className="result" />}
        </>
      )}
    </div>
  );
};

export default ResultDisplay;
