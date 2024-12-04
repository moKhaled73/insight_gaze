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
    <div className="upload">
      <input type="file" onChange={handleImageChange} id="image-file" />
      <div className="upload-text">
        <MdCloudUpload size={50} color="#777" />
        <p>Click to select or drag and drop image</p>
      </div>
    </div>
  );
};

export default SelectImage;
