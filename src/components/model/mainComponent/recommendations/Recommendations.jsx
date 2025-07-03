import GenerateButton from "../../button/GenerateButton";
import TryAgainButton from "../../button/TryAgainButton";
import SelectImage from "../../selectImage/SelectImage";
import Markdown from "react-markdown";
import { useEffect, useRef, useState } from "react";
import { useImageFile } from "../../../../context/ImageFileProvider";
import { IoMdCloseCircle } from "react-icons/io";
import {
  useOurRecommendations,
  useRecommendations,
} from "../../../../api/recommendations";
import "./Recommendations.css";

const Recommendations = () => {
  const { recommendationImage, setRecommendationImage } = useImageFile();
  const [response, setResponse] = useState("");
  const [guideline, setGuideline] = useState("human interface guidelines");
  const [prompt, setPrompt] = useState("");
  const [showPromptInput, setShowPromptInput] = useState(false);
  const [boundingBox, setBoundingBox] = useState(null);
  const [coordination, setCoordination] = useState([]);
  const [selectedComment, setSelectedComment] = useState(0);

  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  const boundingBoxRef = useRef(null);

  useEffect(() => {
    const img = imageRef.current;
    const imageContainer = imageContainerRef.current;
    const boundingBoxContainer = boundingBoxRef.current;

    if (img && recommendationImage) {
      const imageUrl = URL.createObjectURL(recommendationImage);
      img.src = imageUrl;

      img.onload = () => {
        if (boundingBox) {
          boundingBoxContainer.style.left = `${boundingBox[0] * img.width}px`;
          boundingBoxContainer.style.top = `${boundingBox[1] * img.height}px`;
          boundingBoxContainer.style.width = `${
            boundingBox[2] * img.width - boundingBox[0] * img.width
          }px`;
          boundingBoxContainer.style.height = `${
            boundingBox[3] * img.height - boundingBox[1] * img.height
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
  }, [recommendationImage, imageContainerRef, boundingBox]);

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
        const rect = imageRef.current.getBoundingClientRect();
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
        const rect = imageRef.current.getBoundingClientRect();
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

  const onSuccess = (data) => {
    setResponse(data.data.recommendations);
  };

  const { mutate: generateRecommendations, isLoading } =
    useRecommendations(onSuccess);

  const {
    mutate: generateOurRecommendations,
    isLoading: isLoadingOurRecommendations,
  } = useOurRecommendations(onSuccess);

  const generateRecommendationsHandler = () => {
    if (guideline === "custom-prompt" && prompt && recommendationImage) {
      if (coordination.length == 0) {
        const formData = new FormData();
        formData.append("image", recommendationImage);
        formData.append("prompt", prompt);
        generateRecommendations(formData);
      } else {
        const formData = new FormData();
        formData.append("image", recommendationImage);
        formData.append("prompt", prompt);
        formData.append("coordinations", coordination);
        generateRecommendations(formData);
      }
    } else {
      if (recommendationImage && guideline) {
        const formData = new FormData();
        formData.append("image", recommendationImage);
        formData.append("guideline", guideline);
        generateOurRecommendations(formData);
      }
    }
  };

  useEffect(() => {
    if (response) {
      setBoundingBox(response[0].bounding_box);
    }
  }, [response]);

  return (
    <>
      {recommendationImage ? (
        <>
          <div className="recommendations-container">
            <div className="image" ref={imageContainerRef}>
              <img ref={imageRef} draggable={false} />
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
            </div>
            <div className="recommendations">
              <select
                name="guidelines"
                id="guidelines"
                value={guideline}
                onChange={(e) => {
                  setGuideline(e.target.value);
                  setShowPromptInput(e.target.value === "custom-prompt");
                  setResponse("");
                  setBoundingBox(null);
                }}
              >
                <option value="human interface guidelines">
                  Human Interface Guidelines (HIG)
                </option>
                <option value="material design guidelines">
                  Material Design Guidelines
                </option>
                <option value="microsoft fluent design system">
                  Microsoft Fluent Design System
                </option>
                <option value="accessibility guidelines">
                  Accessibility Guidelines
                </option>
                <option value="platform specific guidelines">
                  Platform Specific Guidelines
                </option>
                <option value="custom-prompt">Custom Prompt</option>
              </select>
              {showPromptInput && (
                <input
                  type="text"
                  className="prompt-input"
                  placeholder="Enter your prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              )}
              <div className="recommendation-response">
                <div className="recommendation-header">
                  <h4>Recommendations</h4>
                  <button
                    type="button"
                    className="clear-button"
                    onClick={() => {
                      setResponse("");
                      setPrompt("");
                      setBoundingBox(null);
                      setCoordination(null);
                      setSelectedComment(0);
                    }}
                  >
                    Clear
                  </button>
                </div>
                <div className="recommendation-content">
                  {response ? (
                    guideline === "custom-prompt" ? (
                      <Markdown>{response}</Markdown>
                    ) : (
                      response.map((item, index) => (
                        <p
                          key={index}
                          onClick={() => {
                            setSelectedComment(index);
                            setBoundingBox(item.bounding_box);
                          }}
                          className={`recommendation-text
                            ${index === selectedComment ? "selected" : ""}
                          `}
                        >
                          {item.text}
                        </p>
                      ))
                    )
                  ) : (
                    <p className="placeholder">
                      the result will displayed here...
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          {response ? (
            <TryAgainButton
              clearImage={() => {
                setRecommendationImage(null);
                setResponse("");
                setPrompt("");
                setShowPromptInput(false);
                setBoundingBox(null);
                setCoordination(null);
              }}
            />
          ) : (
            <GenerateButton
              text={"Generate Recommendation"}
              loading={isLoadingOurRecommendations || isLoading}
              onClickHandler={generateRecommendationsHandler}
            />
          )}
          <IoMdCloseCircle
            className="close"
            onClick={() => {
              setRecommendationImage(null);
              setResponse("");
              setPrompt("");
              setShowPromptInput(false);
              setBoundingBox(null);
              setCoordination(null);
            }}
          />
        </>
      ) : (
        <SelectImage setImage1={setRecommendationImage} multiple={false} />
      )}
    </>
  );
};

export default Recommendations;
