/* eslint-disable react/prop-types */

import { useState } from "react";
import HelpDialog from "../helpDialog/HelpDialog";
import ResultDisplay from "./ResultDisplay";
import { IoMdHelp } from "react-icons/io";
import { FaDownload } from "react-icons/fa6";

const HelpDialogContent = {
  "heatmap-3s": {
    title: "Heatmap 3s",
    content:
      "Heatmap 3sThis feature prioritizes fast response. It is designed to be most effective when speed is essential or the design is less elemental like landing page or banner designs that contain headers or mostly like that.",
  },
  "heatmap-7s": {
    title: "Heatmap 7s",
    content:
      "This feature is provided for cases where the design is complex, when the user requires a deeper understanding of the design, or when multiple elements need to be thoroughly reviewed.",
  },
  scanpath: {
    title: "Scanpath",
    content:
      "This feature shows the path that the user's eye will follow or the transitions that the eye will make. Therefore, it shows the interface designer how the user will receive the design.",
  },
};

const download = (original, result, name) => {
  const canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");

  const originalImage = new Image();
  originalImage.src = URL.createObjectURL(original);

  const resultImage = new Image();
  resultImage.src = result;

  originalImage.onload = () => {
    canvas.width = resultImage.width;
    canvas.height = resultImage.height;

    ctx.drawImage(originalImage, 0, 0, canvas.width, canvas.height);

    if (/heatmap/.test(name)) ctx.globalAlpha = 0.5;

    ctx.drawImage(resultImage, 0, 0, canvas.width, canvas.height);

    ctx.globalAlpha = 1;

    let link = document.createElement("a");
    link.download = `${name}.png`;
    link.href = canvas.toDataURL(); // Convert canvas to data URL
    link.click();
  };
};

const ImageContainer = ({
  helpName,
  imageName,
  resultImage,
  originalImage,
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false);

  const handleDisplayHelp = () => {
    setTitle(HelpDialogContent[helpName].title);
    setContent(HelpDialogContent[helpName].content);
    setOpen(true);
  };
  return (
    <div className={`image-container`}>
      <div className="info">
        <span className="image-name">{imageName}</span>
        <IoMdHelp onClick={handleDisplayHelp} className="icon" size={28} />
        <FaDownload
          style={{
            display: `${resultImage ? "block" : "none"}`,
          }}
          onClick={() => download(originalImage, resultImage, helpName)}
          className="icon"
          size={28}
        />
      </div>
      <ResultDisplay
        helpName={helpName}
        resultImage={resultImage}
        originalImage={originalImage}
      />
      <HelpDialog
        title={title}
        content={content}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};

export default ImageContainer;
