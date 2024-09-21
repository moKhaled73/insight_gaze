/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { useImageFile } from "../../context/ImageFileProvider";
import "./heatmapDisplay.css";
import { PiArrowsOutLineHorizontalBold } from "react-icons/pi";

const HeatmapDisplay = ({ helpName }) => {
  const { imageFile, heatmap3s, heatmap7s } = useImageFile();
  const originalRef = useRef(null);
  const resultRef = useRef(null);
  const imageContainerRef = useRef(null);
  const selectedSlider = useRef(null);

  useEffect(() => {
    const img = originalRef.current;
    const imageContainer = imageContainerRef.current;
    if (img && imageFile) {
      const imageUrl = URL.createObjectURL(imageFile);
      img.src = imageUrl;

      img.onload = () => {
        if (img.naturalWidth >= img.naturalHeight) {
          imageContainer.style.width = "512px";
          imageContainer.style.height = `${
            (512 / img.naturalWidth) * img.naturalHeight
          }px`;
        } else {
          imageContainer.style.width = `${
            (512 / img.naturalHeight) * img.naturalWidth
          }px`;
          imageContainer.style.height = "512px";
        }
      };
    }
  }, [imageFile]);

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
    <div ref={imageContainerRef} className="heatmap-display">
      <img
        ref={originalRef}
        alt="original"
        className="original"
        draggable="false"
      />
      {heatmap3s && heatmap7s && (
        <>
          <img
            ref={resultRef}
            src={`${helpName === "heatmap-3s" ? heatmap3s : heatmap7s}`}
            alt="result"
            className="result"
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
    </div>
  );
};

export default HeatmapDisplay;
