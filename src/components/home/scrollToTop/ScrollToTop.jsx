import { useEffect, useRef } from "react";
import "./scrollToTop.css";

const ScrollToTop = () => {
  const scrollBtn = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 400) {
        if (scrollBtn.current) {
          scrollBtn.current.style.display = "block";
        }
      } else {
        if (scrollBtn.current) {
          scrollBtn.current.style.display = "none";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


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