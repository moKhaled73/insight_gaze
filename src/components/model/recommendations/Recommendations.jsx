import { useRef, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";
import { Buffer } from "buffer"; // Buffer polyfill for the browser
import { useImageFile } from "../../../context/ImageFileProvider";
import "./Recommendations.css";
import GenerateButton from "../button/GenerateButton";
import OriginalImage from "../OriginalImage";
import TryAgainButton from "../button/TryAgainButton";

const prompts = {
  human_interface_guidelines:
    "Analyze the current design and provide recommendations for improvements based on Apple's Human Interface Guidelines (HIG). Ensure the suggestions prioritize consistency with iOS and macOS platform conventions, including typography, iconography, layout, and interaction patterns. Focus on optimizing user experience for Apple device users.",
  material_design_guidelines:
    "Review the design and suggest enhancements in accordance with Google's Material Design Guidelines. Emphasize uniformity in UI elements, motion principles, and responsive layouts. Ensure recommendations align with Material's design philosophy of creating a tangible user interface and providing a consistent user experience across Android and web platforms.",
  microsoft_fluent_design_system:
    "Examine the design and propose adjustments following Microsoft's Fluent Design System. Highlight aspects related to light, depth, motion, and scale to create a visually immersive experience. The suggestions should ensure fluidity and adaptability across different device types, focusing on Windows platforms and applications.",
  accessibility_guidelines:
    "Evaluate the design for accessibility improvements according to the latest Web Content Accessibility Guidelines (WCAG). Provide specific recommendations to enhance the design's usability for users with disabilities, including visual, auditory, and motor impairments. Focus on color contrast, keyboard navigation, and assistive technology compatibility.",
  platform_specific_guidelines:
    "Assess the design and suggest enhancements based on the specific platform's design guidelines. Whether it's iOS, Android, Windows, or web, ensure the recommendations adhere to the unique principles of the target platform. Emphasize creating an intuitive user experience that aligns with the native look and feel of the platform",
};

const genAI = new GoogleGenerativeAI("AIzaSyCsnFKo_eNQC_FXS6ImzO_2pjXPlF5XlhY");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const Recommendations = () => {
  const { imageFile } = useImageFile();
  const imageContainerRef = useRef(null);
  const [prompt, setPrompt] = useState("human_interface_guidelines");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const fileToGenerativePart = (file, mimeType) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64String = Buffer.from(event.target.result).toString(
          "base64"
        );
        resolve({
          inlineData: {
            data: base64String,
            mimeType,
          },
        });
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  };

  // Generate content by calling the API
  const generateContent = async () => {
    if (!imageFile) {
      alert("Please select an image file.");
      return;
    }
    setResponse("");
    setLoading(true);
    try {
      const mimeType = imageFile.type;
      const imagePart = await fileToGenerativePart(imageFile, mimeType);

      const result = await model.generateContentStream([
        prompts[prompt],
        imagePart,
      ]);
      for await (const response of result.stream) {
        setResponse((prevResponse) => prevResponse + response.text());
      }
    } catch (error) {
      console.error("Error generating content:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="recommendations-container">
        <div className="image" ref={imageContainerRef}>
          <OriginalImage imageContainerRef={imageContainerRef} />
        </div>
        <div className="recommendations">
          <select
            name="guidelines"
            id="guidelines"
            onChange={(e) => {
              setPrompt(e.target.value);
              setResponse("");
            }}
          >
            <option value="human_interface_guidelines">
              Human Interface Guidelines (HIG)
            </option>
            <option value="material_design_guidelines">
              Material Design Guidelines
            </option>
            <option value="microsoft_fluent_design_system">
              Microsoft Fluent Design System
            </option>
            <option value="accessibility_guidelines">
              Accessibility Guidelines
            </option>
            <option value="platform_specific_guidelines">
              Platform-Specific Guidelines
            </option>
          </select>
          <div className="recommendation-response">
            <ReactMarkdown>{response}</ReactMarkdown>
          </div>
        </div>
      </div>
      {response ? (
        <TryAgainButton />
      ) : (
        <GenerateButton
          text={"Generate Recommendation"}
          loading={loading}
          onClickHandler={generateContent}
        />
      )}
    </>
  );
};

export default Recommendations;
