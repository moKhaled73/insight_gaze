import { useHeatmap3s, useHeatmap7s } from "../../api/heatmap";
import { useImageFile } from "../../context/ImageFileProvider";
import ImageContainer from "../imageContainer/ImageContainer";
import "./heatmap.css";
const Heatmap = () => {
  const { imageFile, setHeatmap3s, setHeatmap7s } = useImageFile();

  const onSuccessHeatmap3s = (data) => {
    setHeatmap3s(URL.createObjectURL(data.data));
  };

  const onSuccessHeatmap7s = async (data) => {
    setHeatmap7s(URL.createObjectURL(data.data));
  };
  const { mutate: generateHeatmap3s, isLoading: isLoadingHeatmap3s } =
    useHeatmap3s(onSuccessHeatmap3s);
  const { mutate: generateHeatmap7s, isLoading: isLoadingHeatmap7s } =
    useHeatmap7s(onSuccessHeatmap7s);

  const generateHeatmap = () => {
    if (imageFile) {
      const formData = new FormData();
      formData.append("file", imageFile);
      generateHeatmap3s(formData);
      generateHeatmap7s(formData);
    }
  };

  return (
    <>
      <div className="images-container">
        <ImageContainer imageName={"heatmap 3s"} helpName={"heatmap-3s"} />
        <div className="divider"></div>
        <ImageContainer imageName={"heatmap 7s"} helpName={"heatmap-7s"} />
      </div>
      <button
        type="button"
        onClick={() => {
          generateHeatmap();
        }}
        className="generate"
      >
        {isLoadingHeatmap3s || isLoadingHeatmap7s ? (
          <span className="loading"></span>
        ) : (
          "Generate heatmap"
        )}
      </button>
    </>
  );
};

export default Heatmap;
