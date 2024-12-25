/* eslint-disable react/prop-types */
import { useImageFile } from "../../../context/ImageFileProvider";
import { MdCloudUpload } from "react-icons/md";

import "./selectImage.css";

const SelectImage = ({ imageType }) => {
  const { setHeatmapImage, setScanpathImage, setRecommendationImage } =
    useImageFile();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (imageType === "heatmap") {
        setHeatmapImage(file);
      } else if (imageType === "scanpath") {
        setScanpathImage(file);
      } else if (imageType === "recommendation") {
        setRecommendationImage(file);
      }
    }
  };

  return (
    <>
      <div className="upload">
        <input type="file" onChange={handleImageChange} id="image-file" />
        <div className="upload-text">
          {/* <MdCloudUpload size={50} color="#777" />
        <p>Click to select or drag and drop image</p> */}
          <div className="icon-container">
            <i className="fa-regular fa-image"></i>
            <i className="fa-solid fa-plus"></i>
          </div>
          <p>Tap to drag your Design</p>
        </div>

      </div>
      <div className="innovation">
        <i className="fa-solid fa-lightbulb"></i>
        <p className="idea">Good designs bring life. Make your design speak for you, and let our smart recommendations guide your creativity.</p>

      </div>
    </>
  );
};

export default SelectImage;
