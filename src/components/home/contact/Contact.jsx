import "./contact.css";

import logo from "../../../assets/logo-removebg-preview.png";

const Contact = () => {
  return (
    <>
      <footer id="contact">
        <div className="box">
          <div className="continer">
            <div className="logo">
              <div className="big">
                <div className="imlogo">
                  <img src={logo} alt="" />
                  <span>InsightGaze</span>
                </div>
                <div className="copy">
                  <p>
                    Eye-tracking AI to predict where viewers will focus in your
                    images. Generate a heatmap for quick and clear visual
                    insights.
                  </p>
                  <div className="icons">
                    <i
                      className="fa-brands fa-facebook"
                      style={{ color: "#e0901f" }}
                    ></i>

                    <i
                      className="fa-brands fa-twitter"
                      style={{ color: "#e0901f" }}
                    ></i>
                    <i
                      className="fa-brands fa-instagram"
                      style={{ color: "#e0901f" }}
                    ></i>
                    <i
                      className="fa-brands fa-linkedin"
                      style={{ color: "#e0901f" }}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="service">
                <h3>Our Services</h3>
                <div className="head">
                  <i
                    className="fa-solid fa-circle-check"
                    style={{ color: "#e0901f" }}
                  ></i>
                  <span>Eye-tracking</span>
                </div>
                <div className="head">
                  <i
                    className="fa-solid fa-circle-check"
                    style={{ color: "#e0901f" }}
                  ></i>
                  <span>Heatmaps</span>
                </div>
                <div className="head">
                  <i
                    className="fa-solid fa-circle-check"
                    style={{ color: "#e0901f" }}
                  ></i>
                  <span>Reports</span>
                </div>
                <div className="head">
                  <i
                    className="fa-solid fa-circle-check"
                    style={{ color: "#e0901f" }}
                  ></i>
                  <span>Tool Integration</span>
                </div>
              </div>
              <div className="service">
                <h3>Our Support</h3>
                <div className="head">
                  <i
                    className="fa-solid fa-sun"
                    style={{ color: "#e0901f" }}
                  ></i>
                  <span>Services</span>
                </div>
                <div className="head">
                  <i
                    className="fa-solid fa-sun"
                    style={{ color: "#e0901f" }}
                  ></i>
                  <span>FAQs</span>
                </div>
                <div className="head">
                  <i
                    className="fa-solid fa-sun"
                    style={{ color: "#e0901f" }}
                  ></i>
                  <span>Contact</span>
                </div>
                <div className="head">
                  <i
                    className="fa-solid fa-sun"
                    style={{ color: "#e0901f" }}
                  ></i>
                  <span>Terms</span>
                </div>
              </div>
              <div className="service">
                <h3>Contact Info</h3>
                <div className="email">
                  <div className="head">
                    <i
                      className="fa-solid fa-envelope"
                      style={{ color: "#e0901f" }}
                    ></i>
                    <p>Email Address</p>
                  </div>
                  <span className="small">Info@websiteinfo.com</span>
                </div>

                <div className="address">
                  <div className="head">
                    <i
                      className="fa-solid fa-location-dot"
                      style={{ color: "#e0901f" }}
                    ></i>
                    <p>Address</p>
                  </div>
                  <span className="small">99 Rioville St.Big City</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className="footer">
        <p>
          &copy; copyright @ 2024 || <span>Codex Team</span>
          <i className="fa-solid fa-heart" style={{ color: "black" }}></i>
        </p>
      </section>
    </>
  );
};

export default Contact;
