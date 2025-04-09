import React, { useRef } from "react";
import OriginalImage from "../../OriginalImage";
import { FaDownload } from "react-icons/fa6";
import "./heatmapContainer.css";
import HeatmapSlider from "../heatmapSlider/HeatmapSlider";

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

  return (
    <div className={`image-container`}>
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
            <HeatmapSlider
              imageContainerRef={imageContainerRef}
              resultRef={resultRef}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default HeatmapContainer;
