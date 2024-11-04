import { useEffect, useRef, useState } from "react";
import { useImageFile } from "../../../context/ImageFileProvider";
import "./Recommendations.css";
import GenerateButton from "../button/GenerateButton";
import OriginalImage from "../OriginalImage";
import {
  useOurRecommendations,
  useRecommendations,
} from "../../../api/recommendations";
import Markdown from "react-markdown";

// const TypingEffect = ({ fullText, speed = 2 }) => {
//   const [displayedText, setDisplayedText] = useState("");

//   useEffect(() => {
//     setDisplayedText("");
//     let index = 0;

//     const intervalId = setInterval(() => {
//       setDisplayedText((prev) => prev + fullText[index]);
//       index += 1;

//       if (index === fullText.length - 1) {
//         clearInterval(intervalId);
//       }
//     }, speed); // سرعة الكتابة

//     return () => clearInterval(intervalId); // تنظيف التأثير عند تفريغ المكون
//   }, [fullText, speed]);

//   return <ReactMarkdown>{displayedText}</ReactMarkdown>;
// };

const Recommendations = () => {
  const { imageFile } = useImageFile();
  const imageContainerRef = useRef(null);
  const [guideline, setGuideline] = useState("human interface guidelines");
  const [response, setResponse] = useState("");
  const [boundingBox, setBoundingBox] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [showPromptInput, setShowPromptInput] = useState(false);
  const [selectedComment, setSelectedComment] = useState(0);

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
    if (guideline === "custom-prompt" && prompt && imageFile) {
      const formData = new FormData();
      formData.append("image", imageFile);
      formData.append("prompt", prompt);
      generateRecommendations(formData);
    } else {
      if (imageFile && guideline) {
        const formData = new FormData();
        formData.append("image", imageFile);
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
      <div className="recommendations-container">
        <div className="image" ref={imageContainerRef}>
          <OriginalImage
            boundingBox={boundingBox}
            imageContainerRef={imageContainerRef}
          />
        </div>
        <div className="recommendations">
          <select
            name="guidelines"
            id="guidelines"
            onChange={(e) => {
              setGuideline(e.target.value);
              setShowPromptInput(e.target.value === "custom-prompt");
              setResponse("");
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
              onChange={(e) => setPrompt(e.target.value)}
            />
          )}
          <div className="recommendation-response">
            {response &&
              (guideline === "custom-prompt" ? (
                <Markdown>{response}</Markdown>
              ) : (
                response.map((item, index) => (
                  <p
                    key={index}
                    onClick={() => {
                      setSelectedComment(index);
                      setBoundingBox(item.bounding_box);
                    }}
                    className={index === selectedComment ? "selected" : ""}
                  >
                    {item.text}
                  </p>
                ))
              ))}
          </div>
        </div>
      </div>
      {response ? (
        <GenerateButton
          text={"Generate Again"}
          loading={isLoadingOurRecommendations || isLoading}
          onClickHandler={generateRecommendationsHandler}
        />
      ) : (
        <GenerateButton
          text={"Generate Recommendation"}
          loading={isLoadingOurRecommendations || isLoading}
          onClickHandler={generateRecommendationsHandler}
        />
      )}
    </>
  );
};

export default Recommendations;
