/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

const OriginalImage = ({
  boundingBox,
  imageContainerRef,
  imageFile,
  showPromptInput,
  setCoordination,
}) => {
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

  useEffect(() => {
    if (showPromptInput) {
      const box = document.createElement("div");
      box.className = "bounding-box";
      box.style.position = "absolute";
      box.style.border = "2px solid red";
      box.style.pointerEvents = "none";

      imageContainerRef.current.style.cursor = "crosshair";

      let startX,
        startY,
        boxX,
        boxY,
        boxWidth,
        boxHeight,
        isDrawing = false;

      imageContainerRef.current.addEventListener("mousedown", (e) => {
        const rect = originalRef.current.getBoundingClientRect();
        startX = e.clientX - rect.left;
        startY = e.clientY - rect.top;
        box.style.left = `${startX}px`;
        box.style.top = `${startY}px`;
        box.style.width = "0px";
        box.style.height = "0px";
        imageContainerRef.current.appendChild(box);
        isDrawing = true;
      });

      imageContainerRef.current.addEventListener("mousemove", (e) => {
        if (!isDrawing) return;
        const rect = originalRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        boxWidth = Math.abs(x - startX);
        boxHeight = Math.abs(y - startY);
        box.style.width = `${boxWidth}px`;
        box.style.height = `${boxHeight}px`;
        box.style.left = `${Math.min(x, startX)}px`;
        box.style.top = `${Math.min(y, startY)}px`;
      });

      imageContainerRef.current.addEventListener("mouseup", () => {
        isDrawing = false;
        boxX = parseInt(box.style.left);
        boxY = parseInt(box.style.top);
        setCoordination([boxX, boxY, boxWidth, boxHeight]);
      });
    }
  }, [showPromptInput]);

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
