import "./services.css";

const Services = () => {
  return (
    <section className="serv" id="services">
      <h1>Services</h1>
      <div className="group">
        <div className="srv">
          <i
            className="fa-solid fa-wand-magic-sparkles"
            style={{ color: "#c25105" }}
          ></i>
          <h2>Generate HeatMap</h2>
          <p>
            Images are being converted into heat map images that show the
            designer the most important parts of the image that attract
            users&apos; attention.
          </p>
          <a href="../model_page/heatmap.html?tab=heatmap">
            <span>Let&apos;s Try</span>
            <i className="fa-solid fa-chevron-right"></i>
          </a>
        </div>
        <div className="srv">
          <i className="fa-solid fa-eye" style={{ color: "#8018e7" }}></i>
          <h2>HeatMap 3s</h2>
          <p>
            This feature prioritizes fast response. It is designed to be most
            effective when speed is essential or the design is less elemental
            like landing page or banner designs that contain headers or mostly
            like that.
          </p>
          <a href="../model_page/heatmap.html?tab=heatmap">
            <span>Let&apos;s Try</span>
            <i className="fa-solid fa-chevron-right"></i>
          </a>
        </div>
        <div className="srv">
          <i className="fa-solid fa-splotch" style={{ color: "#16a10c" }}></i>
          <h2>HeatMap 7s</h2>
          <p>
            This feature is provided for cases where the design is complex, when
            the user requires a deeper understanding of the design, or when
            multiple elements need to be thoroughly reviewed.
          </p>
          <a href="../model_page/heatmap.html?tab=heatmap">
            <span>Let&apos;s Try</span>
            <i className="fa-solid fa-chevron-right"></i>
          </a>
        </div>
        <div className="srv">
          <i className="fa-solid fa-crown" style={{ color: "#ffd43b" }}></i>
          <h2>Scan Path</h2>
          <p>
            This feature shows the path that the user&apos;s eye will follow or
            the transitions that the eye will make. Therefore, it shows the
            interface designer how the user will receive the design.
          </p>
          <a href="../model_page/heatmap.html?tab=scanpath">
            <span>Let&apos;s Try</span>
            <i className="fa-solid fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
