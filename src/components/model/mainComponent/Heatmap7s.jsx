import HeatmapContainer from "../imageContainer/heatmapContainer/HeatmapContainer";
import TryAgainButton from "../button/TryAgainButton";
import GenerateButton from "../button/GenerateButton";
import SelectImage from "../selectImage/SelectImage";
import { useImageFile } from "../../../context/ImageFileProvider";
import { useHeatmap7s } from "../../../api/heatmap";
import { IoMdCloseCircle } from "react-icons/io";

const Heatmap7s = () => {
  const {
    heatmap7sImage1,
    setHeatmap7sImage1,
    heatmap7s1,
    setHeatmap7s1,
    heatmap7sImage2,
    setHeatmap7sImage2,
    heatmap7s2,
    setHeatmap7s2,
    setOpenInputFile,
  } = useImageFile();

  const { mutate: generateHeatmap7s1, isLoading: heatmap7sLoading1 } =
    useHeatmap7s((data) => {
      setHeatmap7s1(URL.createObjectURL(data.data));
    });

  const { mutate: generateHeatmap7s2, isLoading: heatmap7sLoading2 } =
    useHeatmap7s((data) => {
      setHeatmap7s2(URL.createObjectURL(data.data));
    });

  const heatmap7sHandler = () => {
    if (heatmap7sImage1) {
      const formData = new FormData();
      formData.append("file", heatmap7sImage1);
      generateHeatmap7s1(formData);
      if (heatmap7sImage2) {
        const formData = new FormData();
        formData.append("file", heatmap7sImage2);
        generateHeatmap7s2(formData);
      }
    }
  };
  return (
    <>
      {heatmap7sImage1 ? (
        <>
          <div className="images-container">
            <HeatmapContainer
              originalImage={heatmap7sImage1}
              setOriginalImage={setHeatmap7sImage1}
              resultImage={heatmap7s1}
              setResultImage={setHeatmap7s1}
              helpName={"heatmap-7s"}
              imageName={"Heatmap 7s"}
            />
            {heatmap7sImage2 && (
              <>
                <div className="divider"></div>
                <HeatmapContainer
                  originalImage={heatmap7sImage2}
                  setOriginalImage={setHeatmap7sImage2}
                  resultImage={heatmap7s2}
                  setResultImage={setHeatmap7s2}
                  helpName={"heatmap-7s"}
                  imageName={"Heatmap 7s"}
                />
              </>
            )}
          </div>
          {heatmap7s1 ? (
            <TryAgainButton
              clearImage={() => {
                setHeatmap7sImage1(null);
                setHeatmap7s1(null);
                setHeatmap7sImage2(null);
                setHeatmap7s2(null);
                setOpenInputFile(true);
              }}
            />
          ) : (
            <GenerateButton
              text={"Generate Heatmap 7s"}
              loading={heatmap7sLoading1 || heatmap7sLoading2}
              onClickHandler={heatmap7sHandler}
            />
          )}
          <IoMdCloseCircle
            className="close"
            onClick={() => {
              setHeatmap7sImage1(null);
              setHeatmap7sImage2(null);
              setHeatmap7s1(null);
              setHeatmap7s2(null);
            }}
          />
        </>
      ) : (
        <SelectImage
          setImage1={setHeatmap7sImage1}
          setImage2={setHeatmap7sImage2}
          multiple={true}
        />
      )}
    </>
  );
};

export default Heatmap7s;
