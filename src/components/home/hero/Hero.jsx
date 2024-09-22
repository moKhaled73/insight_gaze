import "./hero.css";
import home from "../../../assets/home.png";
import home_heatmap from "../../../assets/home_heatmap.png";
import move from "../../../assets/move.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="info">
          <h1 className="head">
            Gain Insights with Heatmap Analytics on Photos. <br />
            Unlock the Power of Visual Attention with <br />
            Our AI-Driven Heatmaps
          </h1>
          <p>
            Understand where viewers focus their attention on your images
            instantly. Optimize your visuals before sharing them to ensure
            maximum engagement. Improve your content strategy by fine-tuning
            photos based on actual user interaction, platform requirements, and
            more.
          </p>
        </div>
        <div className="image">
          <img
            className="bottom-image"
            src={home}
            alt="home"
            draggable="false"
          />
          <img
            className="top-image"
            src={home_heatmap}
            alt="home heatmap"
            draggable="false"
          />
          <img className="slider" src={move} draggable="false" />
        </div>
      </div>
      <div className="btns">
        <button className="btnhome" onClick={() => navigate("/model")}>
          Try it for free
        </button>
        <a className="btnhome2" href="#video">
          <i
            className="fa-regular fa-circle-play"
            style={{ color: "#c77529" }}
          ></i>
          <span>View Demo</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
