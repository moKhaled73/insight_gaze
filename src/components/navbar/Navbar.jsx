import "./navbar.css";
import logo from "../../assets/Screenshot 2025-03-19 031147.jpg";
import { useRef } from "react";
// import { Link } from "react-router-dom";
import ThemeIcon from "../themeIcon/ThemeIcon";
import NavbarLinks from "../navbarLinks/NavbarLinks";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const links = useRef();
  const navigate = useNavigate();

  return (
    <nav>
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="InsightGaze" />
          {/* <span className="sight">sightful</span> */}
        </Link>
        <div className="lg-links">
          <NavbarLinks />
        </div>
        <div
          className="menu"
          onClick={() => {
            console.log("clicked");
            links.current.style.display = "flex";
          }}
        >
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className="buttons">
          <ThemeIcon />
          <Link className="login" to={"/login"}>Log in</Link>
          <Link className="signup" to="/register">Sign up</Link>
        </div>
        <div className="sm-links" ref={links}>
          <div className="controls">
            <i
              onClick={() => (links.current.style.display = "none")}
              className="fa-regular fa-circle-xmark close"
            ></i>
            <ThemeIcon />
          </div>
          <NavbarLinks />
          <div className="buttons">
            <Link className="login">log in</Link>
            <Link className="signup">sign up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
