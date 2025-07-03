/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

const OriginalImage = ({ imageContainerRef, imageFile }) => {
  const originalRef = useRef(null);

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
          if (window.innerWidth <= 515) {
            imageContainer.style.width = "300px";
          }
        } else {
          imageContainer.style.width = `${
            (512 / img.naturalHeight) * img.naturalWidth
          }px`;
          imageContainer.style.height = "512px";
          if (window.innerWidth <= 450) {
            imageContainer.style.width = "300px";
          }
        }
      };
    }
  }, [imageFile, imageContainerRef]);

  return (
    <>
      <img
        ref={originalRef}
        alt="original"
        className="original"
        draggable="false"
      />
    </>
  );
};

export default OriginalImage;
