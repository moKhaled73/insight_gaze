import { useImageFile } from "../../context/ImageFileProvider";
import "./generateButton.css";

const TryAgainButton = () => {
  const { setImageFile, setHeatmap3s, setHeatmap7s, setScanpath } =
    useImageFile();
  return (
    <>
      <button
        type="button"
        className="button"
        onClick={() => {
          setImageFile(null);
          setHeatmap3s(null);
          setHeatmap7s(null);
          setScanpath(null);
        }}
      >
        Try Again
      </button>
    </>
  );
};

export default TryAgainButton;
