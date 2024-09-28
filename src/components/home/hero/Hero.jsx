import "./hero.css";
import home from "../../../assets/home.png";
import home_heatmap from "../../../assets/home_heatmap.png";
import move from "../../../assets/move.png";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useRef } from "react";

const Hero = () => {
  const imageContainerRef = useRef(null);
  const topImageRef = useRef(null);
  const sliderRef = useRef(null);

  function moveSlider(e) {
    const slider = sliderRef.current;
    const container = imageContainerRef.current;
    const resultImage = topImageRef.current;

    const containerRect = container.getBoundingClientRect();
    let x = containerRect.right - e.clientX;

    // Ensure the slider does not go outside the container
    if (x < 0) {
      x = 0; // Prevent moving outside the left boundary
    } else if (x > containerRect.width) {
      x = containerRect.width;
    }

    // Set the position of the slider
    slider.style.right = `${x}px`;

    // Clip the top image based on the slider position
    resultImage.style.clipPath = `inset(0 ${x}px 0 0)`;
  }

  const navigate = useNavigate();
  return (
    <header className="home" id="home">
      <div className="container">
        <div className="row">
          <div className="info">
            <h1 className="head">
              Discover the power of visual attention with AI-driven heatmaps for
              photo analysis!
            </h1>
            <p>
              Understand where viewers focus their attention on your images
              instantly. Optimize your visuals before sharing them to ensure
              maximum engagement. Improve your content strategy by fine-tuning
              photos based on actual user interaction, platform requirements,
              and more.
            </p>
          </div>
          <div className="image" ref={imageContainerRef}>
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
              ref={topImageRef}
            />
            <img
              ref={sliderRef}
              className="slider"
              src={move}
              draggable="false"
              onMouseDown={() => {
                document.addEventListener("mousemove", moveSlider);
                document.addEventListener("mouseup", () => {
                  document.removeEventListener("mousemove", moveSlider);
                });
              }}
            />
          </div>
        </div>
        <div className="buttons">
          <button className="try-free" onClick={() => navigate("/model")}>
            Try it for free
          </button>
          <HashLink className="view-demo" to="/#video">
            <i className="fa-regular fa-circle-play"></i>
            <span>View Demo</span>
          </HashLink>
        </div>
      </div>
    </header>
  );
};

export default Hero;
