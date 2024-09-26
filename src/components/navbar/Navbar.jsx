import "./navbar.css";
import logo from "../../assets/logo-removebg-preview.png";
import { useRef } from "react";
import { useEffect } from "react";

import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Navbar = () => {
  const themeIcon = useRef(null);
  const links = useRef();

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
    <nav>
      <Link to="/" className="img">
        <img src={logo} alt="InsightGaze" />
        <span>InsightGaze</span>
      </Link>
      <ul className="lg-links">
        <li className="active">
          <i className="fa-solid fa-house"></i>
          <HashLink to="/#home">Home</HashLink>
        </li>
        <li className="active">
          <i className="fa-solid fa-users-gear"></i>
          <HashLink to="/#services">Services</HashLink>
        </li>
        <li className="active">
          <i className="fa-regular fa-address-card"></i>
          <HashLink to="/#about">About</HashLink>
        </li>
        <li className="active">
          <i id="conn" className="fa-solid fa-phone-volume"></i>
          <HashLink to="/#contact">Contact</HashLink>
        </li>
        <li
          className="menu"
          onClick={() => (links.current.style.display = "block")}
        >
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#5f6368"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </a>
        </li>
        <div onClick={handleThemeChange} className="theme-container">
          <i ref={themeIcon} className="fa-solid fa-sun theme"></i>
        </div>
      </ul>

      <ul ref={links} className="links">
        <li onClick={() => (links.current.style.display = "none")}>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26px"
              viewBox="0 -960 960 960"
              width="26px"
              fill="#5f6368"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </a>
        </li>
        <li className="link">
          <i className="fa-solid fa-house"></i>
          <a href="#home">Home</a>
        </li>
        <li className="link">
          <i className="fa-solid fa-users-gear"></i>
          <a href="#services">Services</a>
        </li>
        <li className="link">
          <i className="fa-regular fa-address-card"></i>
          <a href="#about">about</a>
        </li>
        <li className="link">
          <i id="conn" className="fa-solid fa-phone-volume"></i>
          <a href="#contact">contact</a>
        </li>
        <button className="btn1">log in</button>
        <button className="btn">sign up</button>
      </ul>
      <div className="buttons">
        <button className="login">log in</button>
        <button className="signup">sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
