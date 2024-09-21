/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { useImageFile } from "../../context/ImageFileProvider";
import "./scanpathDisplay.css";

const ScanpathDisplay = () => {
  const { imageFile, scanpath } = useImageFile();
  const originalRef = useRef(null);
  const imageContainerRef = useRef(null);

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

  return (
    <div ref={imageContainerRef} className="scanpath-display">
      <img ref={originalRef} alt="original" className="original" />
      {scanpath && <img src={scanpath} alt="result" className="result" />}
    </div>
  );
};

export default ScanpathDisplay;
