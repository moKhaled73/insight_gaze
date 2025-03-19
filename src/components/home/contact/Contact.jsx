import "./contact.css";

import logo from "../../../assets/sight-removebg-preview.png";

const Contact = () => {
  return (
    <>
      <footer id="contact">
        <div className="continer">
          <div className="big">
            <div className="imlogo">
              {/* <img src={logo} alt="" /> */}
              <span>SIGHTFUL</span>
            </div>
            <p className="copy">
              Eye-tracking AI to predict where viewers will focus in your
              images. Generate a heatmap for quick and clear visual insights.
            </p>
            <div className="icons">
              <i className="fa-brands fa-facebook"></i>

              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className="service">
            <h3>Our Services</h3>
            <div className="head">
              <i className="fa-solid fa-circle-check"></i>
              <span>Eye-tracking</span>
            </div>
            <div className="head">
              <i className="fa-solid fa-circle-check"></i>
              <span>Heatmaps</span>
            </div>
            <div className="head">
              <i className="fa-solid fa-circle-check"></i>
              <span>Reports</span>
            </div>
            <div className="head">
              <i className="fa-solid fa-circle-check"></i>
              <span>Tool Integration</span>
            </div>
          </div>
          <div className="service">
            <h3>Our Support</h3>
            <div className="head">
              <i className="fa-solid fa-sun"></i>
              <span>Services</span>
            </div>
            <div className="head">
              <i className="fa-solid fa-sun"></i>
              <span>FAQs</span>
            </div>
            <div className="head">
              <i className="fa-solid fa-sun"></i>
              <span>Contact</span>
            </div>
            <div className="head">
              <i className="fa-solid fa-sun"></i>
              <span>Terms</span>
            </div>
          </div>
          <div className="service">
            <h3>Contact Info</h3>

            <div className="head">
              <i className="fa-solid fa-envelope"></i>
              <div>
                <p>Email Address</p>
                <span className="small">Info@websiteinfo.com</span>
              </div>
            </div>

            <div className="head">
              <i className="fa-solid fa-location-dot"></i>
              <div>
                <p>Address</p>
                <span className="small">99 Rioville St.Big City</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className="footer">
        <p>
          &copy; Copyright @ 2024 || <span>Codex Team</span>
          <i className="fa-solid fa-heart" style={{ color: "black" }}></i>
        </p>
      </section>
    </>
  );
};

export default Contact;
