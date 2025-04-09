/* eslint-disable react/prop-types */
import { IoMdCloseCircle } from "react-icons/io";
import { useImageFile } from "../../context/ImageFileProvider";
import GenerateButton from "./button/GenerateButton";
import TryAgainButton from "./button/TryAgainButton";
import SelectImage from "./selectImage/SelectImage";
import { useHeatmap3s, useHeatmap7s } from "../../api/heatmap";
import { useScanpath } from "../../api/scanpath";
import HeatmapContainer from "./imageContainer/heatmapContainer/HeatmapContainer";
import ScanpathContainer from "./imageContainer/scanpathContainer/ScanpathContainer";

const DeepAnalysis = ({}) => {
  const {
    deepAnalysisImage,
    setDeepAnalysisImage,
    deepAnalysisHeatmap3s,
    setDeepAnalysisHeatmap3s,
    deepAnalysisHeatmap7s,
    setDeepAnalysisHeatmap7s,
    deepAnalysisScanpath,
    setDeepAnalysisScanpath,
    setOpenInputFile,
  } = useImageFile();

  // deep analysis api
  const { mutate: generateDeepAnalHeatmap3s, isLoading: heatmap3sLoading } =
    useHeatmap3s((data) => {
      setDeepAnalysisHeatmap3s(URL.createObjectURL(data.data));
    });

  const { mutate: generateDeepAnalHeatmap7s, isLoading: heatmap7sLoading } =
    useHeatmap7s((data) => {
      setDeepAnalysisHeatmap7s(URL.createObjectURL(data.data));
    });

  const { mutate: generateDeepAnalScanpath, isLoading: scanpathLoading } =
    useScanpath((data) => {
      setDeepAnalysisScanpath(data.data.scanpath);
    });

  const DeepAnalysisHandler = () => {
    if (deepAnalysisImage) {
      const formData = new FormData();
      formData.append("file", deepAnalysisImage);
      generateDeepAnalHeatmap3s(formData);
      generateDeepAnalHeatmap7s(formData);
      generateDeepAnalScanpath(formData);
    }
  };

  return (
    <>
      {deepAnalysisImage ? (
        <>
          <>
            <div className="images-container">
              <HeatmapContainer
                originalImage={deepAnalysisImage}
                setOriginalImage={setDeepAnalysisImage}
                resultImage={deepAnalysisHeatmap3s}
                setResultImage={setDeepAnalysisHeatmap3s}
                helpName={"heatmap3s"}
                imageName={"Heatmap 3s"}
              />
              <HeatmapContainer
                originalImage={deepAnalysisImage}
                setOriginalImage={setDeepAnalysisImage}
                resultImage={deepAnalysisHeatmap7s}
                setResultImage={setDeepAnalysisHeatmap7s}
                helpName={"heatmap7s"}
                imageName={"Heatmap 7s"}
              />
              <ScanpathContainer
                originalImage={deepAnalysisImage}
                setOriginalImage={setDeepAnalysisImage}
                scanpath={deepAnalysisScanpath}
                setResultImage={setDeepAnalysisScanpath}
                helpName={"scanpath"}
                imageName={"Scanpath"}
              />
            </div>
            {deepAnalysisHeatmap3s &&
            deepAnalysisHeatmap7s &&
            deepAnalysisScanpath ? (
              <TryAgainButton
                clearImage={() => {
                  setDeepAnalysisImage(null);
                  setDeepAnalysisHeatmap3s(null);
                  setDeepAnalysisHeatmap7s(null);
                  setDeepAnalysisScanpath(null);
                  setOpenInputFile(true);
                }}
              />
            ) : (
              <GenerateButton
                text={"Generate"}
                loading={
                  heatmap3sLoading || heatmap7sLoading || scanpathLoading
                }
                onClickHandler={DeepAnalysisHandler}
              />
            )}
          </>
          <IoMdCloseCircle
            className="close"
            onClick={() => setDeepAnalysisImage(null)}
          />
        </>
      ) : (
        <SelectImage setImage1={setDeepAnalysisImage} multiple={false} />
      )}
    </>
  );
};

export default DeepAnalysis;
