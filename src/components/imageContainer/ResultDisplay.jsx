/* eslint-disable react/prop-types */
import { useRef } from "react";
import { useImageFile } from "../../context/ImageFileProvider";
import "./resultDisplay.css";
import { PiArrowsOutLineHorizontalBold } from "react-icons/pi";
import OriginalImage from "../OriginalImage";

const ResultDisplay = ({ helpName }) => {
  const { heatmap3s, heatmap7s, scanpath } = useImageFile();
  const resultRef = useRef(null);
  const imageContainerRef = useRef(null);
  const selectedSlider = useRef(null);

  function moveSlider(e) {
    const slider = selectedSlider.current;
    const container = imageContainerRef.current;
    const resultImage = resultRef.current;

    const containerRect = container.getBoundingClientRect();
    let x = containerRect.right - e.clientX;

    // Ensure the slider does not go outside the container
    if (x < 0) {
      x = 0; // Prevent moving outside the left boundary
    } else if (x > containerRect.width) {
      x = containerRect.width;
    }

    // Set the position of the slider
    slider.style.right = `${x}px`;

    // Clip the top image based on the slider position
    resultImage.style.clipPath = `inset(0 ${x}px 0 0)`;
  }

  return (
    <div ref={imageContainerRef} className="result-display">
      <OriginalImage imageContainerRef={imageContainerRef} />

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
              <span
                className="slider"
                ref={selectedSlider}
                onMouseDown={() => {
                  document.addEventListener("mousemove", moveSlider);
                  document.addEventListener("mouseup", () => {
                    document.removeEventListener("mousemove", moveSlider);
                  });
                }}
              >
                <PiArrowsOutLineHorizontalBold size={24} />
              </span>
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
