import { useEffect, useRef } from "react";
import "./themeIcon.css";

const ThemeIcon = () => {
  const themeIcon = useRef(null);

  function changeIcon() {
    themeIcon.current.classList.remove("move");
    setTimeout(() => {
      themeIcon.current.classList.toggle("fa-moon");
      themeIcon.current.classList.toggle("fa-sun");
    }, 100);
    themeIcon.current.classList.add("move");
  }
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") === "light") {
        document.body.dataset.theme = "light";
        themeIcon.current.classList.add("fa-moon");
        themeIcon.current.classList.remove("fa-sun");
        themeIcon.current.classList.add("move");
      } else if (localStorage.getItem("theme") === "dark") {
        document.body.dataset.theme = "dark";
        themeIcon.current.classList.remove("fa-moon");
        themeIcon.current.classList.add("fa-sun");
        themeIcon.current.classList.add("move");
      }
    }
  }, []);

  const handleThemeChange = () => {
    if (
      document.body.dataset.theme === "light" ||
      document.body.dataset.theme === undefined
    ) {
      console.log("light inside");
      document.body.dataset.theme = "dark";
      localStorage.setItem("theme", "dark");
    } else if (document.body.dataset.theme === "dark") {
      document.body.dataset.theme = "light";
      localStorage.setItem("theme", "light");
    }
    changeIcon();
  };

  return (
    <div onClick={handleThemeChange} className="theme-container">
      <i ref={themeIcon} className="fa-solid fa-sun theme"></i>
    </div>
  );
};

export default ThemeIcon;
