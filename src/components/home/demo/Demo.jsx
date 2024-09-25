import "./demo.css";
import demo from "../../../assets/Demo.mp4";
import demoImage from "../../../assets/photo_2024-09-15_02-58-47.jpg";

const Demo = () => {
  return (
    <section className="demo" id="video">
      <div className="box">
        <div className="video">
          <h1>Demo</h1>
          <p>
            Discover how viewers interact with your videos in real-time. Our
            AI-powered heatmaps provide deep insights into which scenes capture
            the most attention, helping you optimize your content for maximum
            impact.
          </p>
          <video controls poster={demoImage}>
            <source src={demo} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Demo;
