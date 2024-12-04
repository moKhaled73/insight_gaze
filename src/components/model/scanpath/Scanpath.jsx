import { useImageFile } from "../../../context/ImageFileProvider";
import ImageContainer from "../imageContainer/ImageContainer";
import { useScanpath } from "../../../api/scanpath";
import GenerateButton from "../button/GenerateButton";
import TryAgainButton from "../button/TryAgainButton";

const Scanpath = () => {
  const { scanpathImage, setScanpath, scanpath } = useImageFile();

  const onSuccess = (data) => {
    setScanpath(URL.createObjectURL(data.data));
  };
  const { mutate: generateScanpath, isLoading } = useScanpath(onSuccess);

  const generateScanpathHandler = () => {
    if (scanpathImage) {
      const formData = new FormData();
      formData.append("file", scanpathImage);
      generateScanpath(formData);
    }
  };

  return (
    <>
      <div className="images-container">
        <ImageContainer imageName={"scanpath"} helpName={"scanpath"} />
      </div>
      {scanpath ? (
        <TryAgainButton />
      ) : (
        <GenerateButton
          text={"Generate Scanpath"}
          loading={isLoading}
          onClickHandler={generateScanpathHandler}
        />
      )}
    </>
  );
};

export default Scanpath;
