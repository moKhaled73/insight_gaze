/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { useImageFile } from "../../context/ImageFileProvider";

const OriginalImage = ({ boundingBox, imageContainerRef }) => {
  const { imageFile } = useImageFile();
  const originalRef = useRef(null);
  const boundingBoxRef = useRef(null);

  useEffect(() => {
    const img = originalRef.current;
    const imageContainer = imageContainerRef.current;
    const boundingBoxContainer = boundingBoxRef.current;
    if (img && imageFile) {
      const imageUrl = URL.createObjectURL(imageFile);
      img.src = imageUrl;

      img.onload = () => {
        if (boundingBox) {
          boundingBoxContainer.style.left = `${
            boundingBox[0] * originalRef.current.width
          }px`;
          boundingBoxContainer.style.top = `${
            boundingBox[1] * originalRef.current.height
          }px`;
          boundingBoxContainer.style.width = `${
            boundingBox[2] * originalRef.current.width -
            boundingBox[0] * originalRef.current.width
          }px`;
          boundingBoxContainer.style.height = `${
            boundingBox[3] * originalRef.current.height -
            boundingBox[1] * originalRef.current.height
          }px`;
        }

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
  }, [imageFile, imageContainerRef, boundingBox]);

  return (
    <>
      <img
        ref={originalRef}
        alt="original"
        className="original"
        draggable="false"
      />
      {boundingBox && (
        <span
          ref={boundingBoxRef}
          style={{
            position: "absolute",
            border: "2px solid red",
          }}
          className="bounding-box"
        ></span>
      )}
    </>
  );
};

export default OriginalImage;
