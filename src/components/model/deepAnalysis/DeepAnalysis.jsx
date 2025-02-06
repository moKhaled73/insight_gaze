/* eslint-disable react/prop-types */
import { useImageFile } from "../../../context/ImageFileProvider";
import GenerateButton from "../button/GenerateButton";
import TryAgainButton from "../button/TryAgainButton";
import ImageContainer from "../imageContainer/ImageContainer";
import "./deepAnalysis.css";

const DeepAnalysis = ({
  originalImage,
  heatmap3s,
  heatmap7s,
  scanpath,
  setOriginalImage,
  setHeatmap3s,
  setHeatmap7s,
  setScanpath,
  handler,
  loading,
}) => {
  const { setOpenInputFile } = useImageFile();
  return (
    <>
      <div className="images-container">
        <ImageContainer
          originalImage={originalImage}
          resultImage={heatmap3s}
          setOriginalImage={setOriginalImage}
          setResultImage={setHeatmap3s}
          helpName={"heatmap3s"}
          imageName={"Heatmap 3s"}
        />
        {/* <div className="divider"></div> */}
        <ImageContainer
          originalImage={originalImage}
          resultImage={heatmap7s}
          setOriginalImage={setOriginalImage}
          setResultImage={setHeatmap7s}
          helpName={"heatmap7s"}
          imageName={"Heatmap 7s"}
        />
        {/* <div className="divider"></div> */}
        <ImageContainer
          originalImage={originalImage}
          resultImage={scanpath}
          setOriginalImage={setOriginalImage}
          setResultImage={setScanpath}
          helpName={"scanpath"}
          imageName={"Scanpath"}
        />
      </div>
      {heatmap3s && heatmap7s && scanpath ? (
        <TryAgainButton
          clearImage={() => {
            setOriginalImage(null);
            setHeatmap3s(null);
            setHeatmap7s(null);
            setScanpath(null);
            setOpenInputFile(true);
          }}
        />
      ) : (
        <GenerateButton
          text={"Generate"}
          loading={loading}
          onClickHandler={handler}
        />
      )}
    </>
  );
};

export default DeepAnalysis;
