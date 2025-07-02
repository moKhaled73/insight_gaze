import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import logo from "../../assets/Screenshot 2025-03-19 031147.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://orientonline.info/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("userName", data.user?.name || "User");
        alert("Login Successful! Welcome, " + (data.user?.name || "User"));
        window.location.href = "/";
      } else {
        alert("Login Failed: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      alert("Network Error: Could not connect to the server.");
    }
  };

  return (
    <div className="login-container">
      <form id="login-form" onSubmit={handleSubmit}>
        <h1 className="form-title">
          Hi, Welcome to <img src={logo} alt="SightFul" />
        </h1>
        <p className="create-account">
          New here?{" "}
          <a href="/register" className="account">
            Create an account.
          </a>
        </p>

        <div className="email">
          <label>Email address</label>
          <div className="input">
            <input
              type="email"
              placeholder="your-email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="password">
          <label>Password</label>
          <div className="input">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="check">
          <p className="forget">Forgot Your password?</p>
        </div>

        <button type="submit" to={"/homme"} className="loginBtn">
          Log In
        </button>

        <div className="login-with">
          <hr className="one" />
          <p className="login-with">Or Login With</p>
          <hr className="two" />
        </div>

        <button className="signBtn">Login up with Google</button>
      </form>
    </div>
  );
};

export default Login;
