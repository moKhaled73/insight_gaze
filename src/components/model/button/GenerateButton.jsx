/* eslint-disable react/prop-types */
import "./generateButton.css";

const GenerateButton = ({ text, loading, onClickHandler }) => {
  return (
    <>
      <button type="button" className="button" onClick={onClickHandler}>
        {loading ? <span className="loading"></span> : text}
      </button>
    </>
  );
};

export default GenerateButton;
