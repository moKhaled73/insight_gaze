import "./about.css";

import heatmap3s from "../../../assets/heatmap3s.png";
import heatmap7s from "../../../assets/photo_2024-09-15_02-58-47.jpg";
import scanpath from "../../../assets/scanpath.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="box">
        <h1>About</h1>
        <div className="mix">
          <div className="image-section">
            <div className="image-grid">
              <div className="image-item large">
                <img src={heatmap3s} alt="" />
              </div>
              <div className="image-item small top-right">
                <img src={heatmap7s} />
              </div>
              <div className="image-item small bottom-left">
                <img src={scanpath} alt="" />
              </div>
            </div>
          </div>
          <div className="text">
            <h2>What is an AI-Generated heatmaps?</h2>
            <p className="one">
              AI-powered photo heatmaps utilize advanced deep learning models to
              analyze visual focus and engagement on your images. By providing a
              graphical representation of where attention is concentrated, these
              heatmaps can reveal which areas of your photo are most
              captivating, which elements draw the eye, and which portions are
              overlooked.
            </p>
            <hr />
            <p className="two">
              Our platform offers a user-friendly photo heatmap tool that allows
              you to upload your images and receive instant heatmap feedback.
              For the most precise and detailed analysis, consider signing up
              for our service, which includes additional features to enhance
              your visual content strategy.
            </p>
            {/* <button>Learn More...</button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;