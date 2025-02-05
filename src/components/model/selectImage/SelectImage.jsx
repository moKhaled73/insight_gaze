/* eslint-disable react/prop-types */

import "./selectImage.css";

const SelectImage = ({ setImage1, setImage2, multiple }) => {
  const handleImageChange = (event) => {
    setImage1(event.target.files[0] || null);
    if (multiple) {
      setImage2(event.target.files[1] || null);
    }
  };

  return (
    <>
      <div className="upload">
        <input
          type="file"
          onChange={handleImageChange}
          id="image-file"
          multiple={multiple}
        />
        <div className="upload-text">
          <div className="icon-container">
            <i className="fa-regular fa-image"></i>
            <i className="fa-solid fa-plus"></i>
          </div>
          <p>Choose one design or two to compare between them</p>
        </div>
      </div>
      <div className="innovation">
        <i className="fa-solid fa-lightbulb"></i>
        <p className="idea">
          Good designs bring life. Make your design speak for you, and let our
          smart recommendations guide your creativity.
        </p>
      </div>
    </>
  );
};

export default SelectImage;
