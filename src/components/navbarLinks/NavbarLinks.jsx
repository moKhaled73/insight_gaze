import { HashLink } from "react-router-hash-link";
import "./navbarLinks.css";

const NavbarLinks = () => {
  return (
    <ul className="navbar-links">
      <HashLink to="/#home" className="link">
        <i className="fa-solid fa-house"></i>
        <span>Home</span>
      </HashLink>
      <HashLink to="/#services" className="link">
        <i className="fa-solid fa-users-gear"></i>
        <span>Services</span>
      </HashLink>
      <HashLink to="/#about" className="link">
        <i className="fa-regular fa-address-card"></i>
        <span>About</span>
      </HashLink>
      <HashLink to="/#contact" className="link">
        <i className="fa-solid fa-phone-volume rotate"></i>
        <span>Contact</span>
      </HashLink>
    </ul>
  );
};

export default NavbarLinks;
