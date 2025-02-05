/* eslint-disable react/prop-types */
import TryAgainButton from "../button/TryAgainButton";
import GenerateButton from "../button/GenerateButton";

import "./models.css";
import ImageContainer from "../imageContainer/ImageContainer";

const Models = ({
  originalImage1,
  originalImage2,
  resultImage1,
  resultImage2,
  handler,
  loading,
  setOriginalImage1,
  setOriginalImage2,
  setResultImage1,
  setResultImage2,
  helpName,
  imageName,
  buttonName,
}) => {
  return (
    <>
      <div className="images-container">
        <ImageContainer
          originalImage={originalImage1}
          resultImage={resultImage1}
          setOriginalImage={setOriginalImage1}
          setResultImage={setResultImage1}
          helpName={helpName}
          imageName={imageName}
        />
        {originalImage2 && (
          <>
            <div className="divider"></div>
            <ImageContainer
              originalImage={originalImage2}
              resultImage={resultImage2}
              setOriginalImage={setOriginalImage2}
              setResultImage={setResultImage2}
              helpName={helpName}
              imageName={imageName}
            />
          </>
        )}
      </div>
      {resultImage1 ? (
        <TryAgainButton
          clearImage={() => {
            setResultImage1(null);
            setOriginalImage1(null);
          }}
        />
      ) : (
        <GenerateButton
          text={buttonName}
          loading={loading}
          onClickHandler={handler}
        />
      )}
    </>
  );
};

export default Models;
