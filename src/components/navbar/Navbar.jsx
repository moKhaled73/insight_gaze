import "./navbar.css";
import logo from "../../assets/logo-removebg-preview.png";

const Navbar = () => {
  return (
    <header>
      <div className="img">
        <img src={logo} alt="InsightGaze" />
        <span>InsightGaze</span>
      </div>
      <ul>
        <li className="active">
          <i className="fa-solid fa-house" style={{ color: " #c77529" }}></i>
          <a href="#home">Home</a>
        </li>
        <li className="active">
          <i
            className="fa-solid fa-users-gear"
            style={{ color: " #c77529" }}
          ></i>
          <a href="#services">Services</a>
        </li>
        <li className="active">
          <i
            className="fa-regular fa-address-card"
            style={{ color: " #c77529" }}
          ></i>
          <a href="#about">About</a>
        </li>
        <li className="active">
          <i
            id="conn"
            className="fa-solid fa-phone-volume"
            style={{ color: " #c77529" }}
          ></i>
          <a href="#contact">Contact</a>
        </li>
        <li className="menu">
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
        <div className="theme-container">
          <i className="fa-solid fa-sun theme"></i>
        </div>
      </ul>

      <ul className="links">
        <li>
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
          <i className="fa-solid fa-house" style={{ color: " #c77529" }}></i>
          <a href="#home">Home</a>
        </li>
        <li className="link">
          <i
            className="fa-solid fa-users-gear"
            style={{ color: " #c77529" }}
          ></i>
          <a href="#services">Services</a>
        </li>
        <li className="link">
          <i
            className="fa-regular fa-address-card"
            style={{ color: " #c77529" }}
          ></i>
          <a href="#about">about</a>
        </li>
        <li className="link">
          <i
            id="conn"
            className="fa-solid fa-phone-volume"
            style={{ color: " #c77529" }}
          ></i>
          <a href="#contact">contact</a>
        </li>
        <button className="btn1">log in</button>
        <button className="btn">sign up</button>
      </ul>
      <div className="buttons">
        <button className="btn1">log in</button>
        <button className="btn">sign up</button>
      </div>
    </header>
  );
};

export default Navbar;
