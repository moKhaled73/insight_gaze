import "./navbar.css";
import logo from "../../assets/Screenshot 2025-03-19 031147.jpg";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ThemeIcon from "../themeIcon/ThemeIcon";
import NavbarLinks from "../navbarLinks/NavbarLinks";

const Navbar = () => {
  const links = useRef();
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userName"); // حذف اسم المستخدم
    setUserName(null); // تحديث حالة الـ state
  };

  return (
    <nav>
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="InsightGaze" />
        </Link>
        <div className="lg-links">
          <NavbarLinks />
        </div>
        <div
          className="menu"
          onClick={() => {
            links.current.style.display = "flex";
          }}
        >
          <i className="fa-solid fa-bars"></i>
        </div>

        <div className="buttons">
          <ThemeIcon />
          {userName ? (
            <>
              <span className="user-name">Welcome, {userName}</span>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="login" to="/login">Log in</Link>
              <Link className="signup" to="/register">Sign up</Link>
            </>
          )}
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
          
          {userName && (
            <li className="user-name">
              <p>Welcome, </p>
              <p>{userName}</p>
              <button onClick={handleLogout} className="logout-button">Logout</button>
            </li>
          )}

          {!userName && (
            <div className="buttons">
              <Link className="login" to="/login">Log in</Link>
              <Link className="signup" to="/register">Sign up</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
