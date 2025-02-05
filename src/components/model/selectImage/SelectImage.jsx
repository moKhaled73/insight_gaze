/* eslint-disable react/prop-types */
import { IoMdHelp } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import HelpDialog from "../helpDialog/HelpDialog";
import { useImageFile } from "../../../context/ImageFileProvider";
import "./selectImage.css";

const SelectImage = ({ setImage1, setImage2, multiple }) => {
  const [open, setOpen] = useState(false);
  const { openInputFile, setOpenInputFile } = useImageFile();
  const inputFileRef = useRef(null);

  useEffect(() => {
    if (openInputFile) {
      inputFileRef.current.click();
      setOpenInputFile(false);
    }
  }, []);

  const handleImageChange = (event) => {
    setImage1(event.target.files[0] || null);
    if (multiple) {
      setImage2(event.target.files[1] || null);
    }
  };

  return (
    <>
      <div className="upload">
        <input
          type="file"
          onChange={handleImageChange}
          id="image-file"
          multiple={multiple}
          ref={inputFileRef}
        />
        <div className="upload-text">
          <div className="icon-container">
            <i className="fa-regular fa-image"></i>
            <i className="fa-solid fa-plus"></i>
          </div>
          <p>Choose one design or two to compare between them </p>
        </div>
      </div>
      <IoMdHelp className="help" onClick={() => setOpen(true)} />

      <div className="innovation">
        <i className="fa-solid fa-lightbulb"></i>
        <p className="idea">
          Good designs bring life. Make your design speak for you, and let our
          smart recommendations guide your creativity.
        </p>
      </div>
      <HelpDialog
        title={"Try our comparison tool!"}
        content={
          "To make your design more distinctive, upload your designs to compare them and decide which one is the best among them. With Our HeatMap and Scanpath feature."
        }
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};

export default SelectImage;
