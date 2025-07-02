import ScoresContainer from "../imageContainer/scoresContainer/ScoresContainer";
import TryAgainButton from "../button/TryAgainButton";
import GenerateButton from "../button/GenerateButton";
import SelectImage from "../selectImage/SelectImage";
import { useImageFile } from "../../../context/ImageFileProvider";
import { useScores } from "../../../api/scores";
import { IoMdCloseCircle } from "react-icons/io";

const Scores = () => {
  const { scoresImage, setScoresImage, scores, setScores, setOpenInputFile } =
    useImageFile();

  const { mutate: generateScores, isLoading } = useScores((data) => {
    setScores(data.data);
  });

  const scoresHandler = () => {
    if (scoresImage) {
      const formData = new FormData();
      formData.append("file", scoresImage);
      generateScores(formData);
    }
  };

  return (
    <>
      {scoresImage ? (
        <>
          <div className="images-container">
            <ScoresContainer
              originalImage={scoresImage}
              setOriginalImage={setScoresImage}
              scores={scores}
              setScores={setScores}
              helpName={"scores"}
              imageName={"scores"}
            />
          </div>
          {scores ? (
            <TryAgainButton
              clearImage={() => {
                setScoresImage(null);
                setScores(null);
                setOpenInputFile(true);
              }}
            />
          ) : (
            <GenerateButton
              text={"Generate Scores"}
              loading={isLoading}
              onClickHandler={scoresHandler}
            />
          )}
          <IoMdCloseCircle
            className="close"
            onClick={() => {
              setScoresImage(null);
              setScores(null);
            }}
          />
        </>
      ) : (
        <SelectImage setImage1={setScoresImage} multiple={false} />
      )}
    </>
  );
};

export default Scores;
