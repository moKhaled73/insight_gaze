import OriginalImage from "../OriginalImage";
import { FaDownload } from "react-icons/fa6";
import { PiArrowsOutLineHorizontalBold } from "react-icons/pi";
import { useRef } from "react";
import "../imageContainer.css";
import "./heatmapContainer.css";

const download = (original, result, name) => {
  const canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");

  const originalImage = new Image();
  originalImage.src = URL.createObjectURL(original);

  const resultImage = new Image();
  resultImage.src = result;

  originalImage.onload = () => {
    canvas.width = resultImage.width;
    canvas.height = resultImage.height;

    ctx.drawImage(originalImage, 0, 0, canvas.width, canvas.height);

    if (/heatmap/.test(name)) ctx.globalAlpha = 0.5;

    ctx.drawImage(resultImage, 0, 0, canvas.width, canvas.height);

    ctx.globalAlpha = 1;

    let link = document.createElement("a");
    link.download = `${name}.png`;
    link.href = canvas.toDataURL(); // Convert canvas to data URL
    link.click();
  };
};

const HeatmapContainer = ({
  helpName,
  imageName,
  resultImage,
  originalImage,
}) => {
  const imageContainerRef = useRef(null);
  const resultRef = useRef(null);
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
    <div className="image-container">
      <div className="info">
        <span className="image-name">{imageName}</span>
        {resultImage && (
          <FaDownload
            onClick={() => download(originalImage, resultImage, helpName)}
            className="icon"
            size={28}
          />
        )}
      </div>
      <div ref={imageContainerRef} className="images">
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
              className={`result heatmap`}
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
    </div>
  );
};

export default HeatmapContainer;
