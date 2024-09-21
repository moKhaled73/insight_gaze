import { useImageFile } from "../../context/ImageFileProvider";
import ImageContainer from "../imageContainer/ImageContainer";
import { useScanpath } from "../../api/scanpath";

const Scanpath = () => {
  const { imageFile, setScanpath } = useImageFile();

  const onSuccess = (data) => {
    setScanpath(URL.createObjectURL(data.data));
  };
  const { mutate: generateScanpath, isLoading } = useScanpath(onSuccess);

  const generateScanpathHandler = () => {
    if (imageFile) {
      const formData = new FormData();
      formData.append("file", imageFile);
      generateScanpath(formData);
    }
  };

  return (
    <>
      <div className="images-container">
        <ImageContainer imageName={"scanpath"} helpName={"scanpath"} />
      </div>
      <button onClick={generateScanpathHandler} className="generate">
        {isLoading ? <span className="loading"></span> : "Generate Scanpath"}
      </button>
    </>
  );
};

export default Scanpath;
