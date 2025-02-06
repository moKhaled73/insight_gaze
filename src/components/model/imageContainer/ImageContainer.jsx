/* eslint-disable react/prop-types */

import ResultDisplay from "./ResultDisplay";
import { FaDownload } from "react-icons/fa6";
import "./imageContainer.css";

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

const ImageContainer = ({
  helpName,
  imageName,
  resultImage,
  originalImage,
}) => {
  return (
    <div className={`image-container`}>
      <div className="info">
        <span className="image-name">{imageName}</span>
        <FaDownload
          style={{
            display: `${resultImage ? "block" : "none"}`,
          }}
          onClick={() => download(originalImage, resultImage, helpName)}
          className="icon"
          size={28}
        />
      </div>
      <ResultDisplay
        helpName={helpName}
        resultImage={resultImage}
        originalImage={originalImage}
      />
    </div>
  );
};

export default ImageContainer;
