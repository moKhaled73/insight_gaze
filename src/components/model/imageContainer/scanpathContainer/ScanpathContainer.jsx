import React, { useEffect, useRef } from "react";
import { FaDownload } from "react-icons/fa6";
import OriginalImage from "../../OriginalImage";
import "./scanpathContainer.css";

const download = (original, scanpath, name) => {
  const canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");

  const img = new Image();
  img.src = URL.createObjectURL(original);

  img.onload = () => {
    // Set canvas size to match image
    canvas.width = img.width;
    canvas.height = img.height;

    // Draw the image on the canvas
    ctx.drawImage(img, 0, 0, img.width, img.height);

    // Draw the scanpath lines first
    ctx.strokeStyle = "blue"; // Line color
    ctx.lineWidth = 4;

    for (let i = 1; i < scanpath.length; i++) {
      let [_, __, ___, ____, prevX, prevY, _____] = scanpath[i - 1];
      let [______, width, height, _______, x, y, timestamp] = scanpath[i];

      ctx.beginPath();
      ctx.moveTo(prevX, prevY);
      ctx.lineTo(x, y);
      ctx.stroke();
    }

    // Draw gaze points on top
    for (let i = 0; i < scanpath.length; i++) {
      let [_, width, height, __, x, y, timestamp] = scanpath[i];

      ctx.beginPath();
      if (i === 0) {
        ctx.fillStyle = "green"; // First point (start)
      } else if (i === scanpath.length - 1) {
        ctx.fillStyle = "red"; // Last point (end)
      } else {
        ctx.fillStyle = "blue"; // Middle points
      }
      ctx.arc(x, y, 7, 0, Math.PI * 2);
      ctx.fill();
    }

    let link = document.createElement("a");
    link.download = `${name}.png`;
    link.href = canvas.toDataURL(); // Convert canvas to data URL
    link.click();
  };
};

const ScanpathContainer = ({
  helpName,
  imageName,
  scanpath,
  originalImage,
}) => {
  const imageContainerRef = useRef();

  useEffect(() => {
    if (scanpath) {
      const img = new Image();
      img.src = URL.createObjectURL(originalImage);

      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.className = "result scanpath";
        const ctx = canvas.getContext("2d");

        // Set canvas size to match image
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw the image on the canvas
        ctx.drawImage(img, 0, 0, img.width, img.height);

        // Draw the scanpath lines first
        ctx.strokeStyle = "blue"; // Line color
        ctx.lineWidth = 4;

        for (let i = 1; i < scanpath.length; i++) {
          let [_, __, ___, ____, prevX, prevY, _____] = scanpath[i - 1];
          let [______, width, height, _______, x, y, timestamp] = scanpath[i];

          ctx.beginPath();
          ctx.moveTo(prevX, prevY);
          ctx.lineTo(x, y);
          ctx.stroke();
        }

        // Draw gaze points on top
        for (let i = 0; i < scanpath.length; i++) {
          let [_, width, height, __, x, y, timestamp] = scanpath[i];

          ctx.beginPath();
          if (i === 0) {
            ctx.fillStyle = "green"; // First point (start)
          } else if (i === scanpath.length - 1) {
            ctx.fillStyle = "red"; // Last point (end)
          } else {
            ctx.fillStyle = "blue"; // Middle points
          }
          ctx.arc(x, y, 7, 0, Math.PI * 2);
          ctx.fill();
        }

        imageContainerRef.current.appendChild(canvas);
      };
      img.onerror = () => console.error("Image failed to load:", originalImage);
    }
  }, [scanpath]);
  return (
    <div className={`image-container`}>
      <div className="info">
        <span className="image-name">{imageName}</span>
        {scanpath && (
          <FaDownload
            onClick={() => download(originalImage, scanpath, helpName)}
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
      </div>
    </div>
  );
};

export default ScanpathContainer;
