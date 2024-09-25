/* eslint-disable react/prop-types */
import "./helpDialog.css";
import { IoMdCloseCircleOutline } from "react-icons/io";

const HelpDialog = ({ title, content, open, setOpen }) => {
  return (
    <div
      onClick={() => {
        setOpen(false);
      }}
      className="dialog"
      style={{ display: open ? "flex" : "none" }}
    >
      <div onClick={(e) => e.stopPropagation()} className="content">
        <h4>{title}</h4>
        <p>{content}</p>
        <IoMdCloseCircleOutline
          className="close-dialog"
          size={28}
          onClick={() => setOpen(false)}
        />
      </div>
    </div>
  );
};

export default HelpDialog;
