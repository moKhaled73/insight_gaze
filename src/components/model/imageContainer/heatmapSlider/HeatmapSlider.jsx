/* eslint-disable react/prop-types */
import { useRef } from "react";
import { PiArrowsOutLineHorizontalBold } from "react-icons/pi";

const HeatmapSlider = ({ imageContainerRef, resultRef }) => {
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
  );
};

export default HeatmapSlider;
