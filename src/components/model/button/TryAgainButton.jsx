/* eslint-disable react/prop-types */
import "./generateButton.css";

const TryAgainButton = ({ clearImage }) => {
  return (
    <>
      <button
        type="button"
        className="button"
        onClick={() => {
          clearImage();
        }}
      >
        Try Another Image
      </button>
    </>
  );
};

export default TryAgainButton;
