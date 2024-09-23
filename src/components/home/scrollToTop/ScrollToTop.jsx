import { useRef } from "react";
import "./scrollToTop.css";

const ScrollToTop = () => {
  const scrollBtn = useRef(null);

  window.onscroll = function () {
    if (scrollY >= 400) {
      scrollBtn.current.style.display = "block";
    } else {
      scrollBtn.current.style.display = "none";
    }
  };

  const scrollToTop = () => {
    scroll({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button ref={scrollBtn} id="scroll" onClick={scrollToTop}>
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
};

export default ScrollToTop;
