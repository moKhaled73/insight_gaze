import OriginalImage from "../OriginalImage";
import { useRef } from "react";
import "../imageContainer.css";
import "./scoresContainer.css";

const ScoresContainer = ({ helpName, imageName, scores, originalImage }) => {
  const imageContainerRef = useRef();
  return (
    <div className="image-container">
      <div className="info">
        <span className="image-name">{imageName}</span>
      </div>
      <div className="inner-container">
        <div ref={imageContainerRef} className="images">
          <OriginalImage
            imageFile={originalImage}
            imageContainerRef={imageContainerRef}
          />
        </div>
        {scores && (
          <div className="results">
            {Object.entries(scores).map(([key, value]) => (
              <div className="score" key={key}>
                <p className="score-name">
                  {key
                    .split("_")
                    .map((word) => word[0].toUpperCase() + word.slice(1))
                    .slice(0, -1)
                    .join(" ")}
                </p>
                <div className="outer-bar">
                  <div
                    className="inner-bar"
                    style={{ width: `${Math.round(value)}%` }}
                  >
                    {`${Math.round(value)}%`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ScoresContainer;
