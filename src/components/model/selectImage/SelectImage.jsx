/* eslint-disable react/prop-types */

import "./selectImage.css";

const SelectImage = ({ setImage }) => {
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <>
      <div className="upload">
        <input type="file" onChange={handleImageChange} id="image-file" />
        <div className="upload-text">
          <div className="icon-container">
            <i className="fa-regular fa-image"></i>
            <i className="fa-solid fa-plus"></i>
          </div>
          <p>Tap to drag your Design</p>
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
