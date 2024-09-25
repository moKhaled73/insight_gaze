import { useImageFile } from "../../../context/ImageFileProvider";
import "./selectImage.css";

const SelectImage = () => {
  const { setImageFile } = useImageFile();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  return (
    <div className="upload">
      <input type="file" onChange={handleImageChange} id="image-file" />
      <p>click to select or drag and drop image</p>
    </div>
  );
};

export default SelectImage;
