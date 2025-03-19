import "./navbar.css";
import logo from "../../assets/sight-removebg-preview.png";
import { useRef } from "react";
// import { Link } from "react-router-dom";
import ThemeIcon from "../themeIcon/ThemeIcon";
import NavbarLinks from "../navbarLinks/NavbarLinks";
import { Link, useNavigate } from "react-router-dom";
{/* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lemonada:wght@300..700&display=swap" rel="stylesheet"> */}

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
          {/* <button className="login" onClick={() => navigate("/login")}>Log in</button> */}
          <Link className="login" onClick={() => navigate("/login")}>Log in</Link>
          <Link className="signup">Sign up</Link>
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
