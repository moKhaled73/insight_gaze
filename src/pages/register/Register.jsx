import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import logo from "../../assets/Screenshot 2025-03-19 031147.jpg";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    phone: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.password_confirmation) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("https://orientonline.info/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("userName", data.user?.name || "User");
        alert(
          "Registration Successful! Welcome, " + (data.user?.name || "User")
        );
        window.location.href = "/";
      } else {
        alert("Registration Failed: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      alert("Network Error: Could not connect to the server.");
    }
  };

  return (
    <div className="bodyForm">
      <form id="register-form" onSubmit={handleSubmit}>
        <h1 className="form-title">
          Hi, Welcome to <img src={logo} alt="SightFul" />
        </h1>
        <p className="register-title">Register your account</p>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Ahmed"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Mobile Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="+20123456789"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="Egypt"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleChange}
          />
        </div>
        <button className="register" to={"/home"} type="submit">
          Register
        </button>
        <div className="login-with">
          <hr className="one" />
          <p className="login-with">Or Login With</p>
          <hr className="two" />
        </div>

        <button className="signBtn">Sign up with Google</button>
      </form>
    </div>
  );
};

export default Register;
