import HeatmapContainer from "../imageContainer/heatmapContainer/HeatmapContainer";
import TryAgainButton from "../button/TryAgainButton";
import GenerateButton from "../button/GenerateButton";
import SelectImage from "../selectImage/SelectImage";
import { useImageFile } from "../../../context/ImageFileProvider";
import { useHeatmap3s } from "../../../api/heatmap";
import { IoMdCloseCircle } from "react-icons/io";

const Heatmap3s = () => {
  const {
    heatmap3sImage1,
    setHeatmap3sImage1,
    heatmap3s1,
    setHeatmap3s1,
    heatmap3sImage2,
    setHeatmap3sImage2,
    heatmap3s2,
    setHeatmap3s2,
    setOpenInputFile,
  } = useImageFile();

  const { mutate: generateHeatmap3s1, isLoading: heatmap3sLoading1 } =
    useHeatmap3s((data) => {
      setHeatmap3s1(URL.createObjectURL(data.data));
    });

  const { mutate: generateHeatmap3s2, isLoading: heatmap3sLoading2 } =
    useHeatmap3s((data) => {
      setHeatmap3s2(URL.createObjectURL(data.data));
    });

  const heatmap3sHandler = () => {
    if (heatmap3sImage1) {
      const formData = new FormData();
      formData.append("file", heatmap3sImage1);
      generateHeatmap3s1(formData);
      if (heatmap3sImage2) {
        const formData = new FormData();
        formData.append("file", heatmap3sImage2);
        generateHeatmap3s2(formData);
      }
    }
  };

  return (
    <>
      {heatmap3sImage1 ? (
        <>
          <div className="images-container">
            <HeatmapContainer
              originalImage={heatmap3sImage1}
              setOriginalImage={setHeatmap3sImage1}
              resultImage={heatmap3s1}
              setResultImage={setHeatmap3s1}
              helpName={"heatmap-3s"}
              imageName={"Heatmap 3s"}
            />
            {heatmap3sImage2 && (
              <>
                <div className="divider"></div>
                <HeatmapContainer
                  originalImage={heatmap3sImage2}
                  setOriginalImage={setHeatmap3sImage2}
                  resultImage={heatmap3s2}
                  setResultImage={setHeatmap3s2}
                  helpName={"heatmap-3s"}
                  imageName={"Heatmap 3s"}
                />
              </>
            )}
          </div>
          {heatmap3s1 ? (
            <TryAgainButton
              clearImage={() => {
                setHeatmap3sImage1(null);
                setHeatmap3s1(null);
                setHeatmap3sImage2(null);
                setHeatmap3s2(null);
                setOpenInputFile(true);
              }}
            />
          ) : (
            <GenerateButton
              text={"Generate Heatmap 3s"}
              loading={heatmap3sLoading1 || heatmap3sLoading2}
              onClickHandler={heatmap3sHandler}
            />
          )}
          <IoMdCloseCircle
            className="close"
            onClick={() => {
              setHeatmap3sImage1(null);
              setHeatmap3s1(null);
              setHeatmap3sImage2(null);
              setHeatmap3s2(null);
            }}
          />
        </>
      ) : (
        <SelectImage
          setImage1={setHeatmap3sImage1}
          setImage2={setHeatmap3sImage2}
          multiple={true}
        />
      )}
    </>
  );
};

export default Heatmap3s;
