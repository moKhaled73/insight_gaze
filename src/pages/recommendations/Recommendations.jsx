import { useState } from "react";
import "./recommendations.css";

import before from "../../assets/before.png";
import after from "../../assets/after.png";
import before_spec from "../../assets/before_spec.png";
import after_spec from "../../assets/after_spec.png";
import before_reco1 from "../../assets/reco1.png";
import after_reco2 from "../../assets/reco2.png";
import before_reco3 from "../../assets/reco3.png";
import after_reco4 from "../../assets/reco4.png";
import before_reco5 from "../../assets/before_reco5.png";
import after_reco5 from "../../assets/after_reco5.png";
import before_reco6 from "../../assets/before_reco6.png";
import after_reco6 from "../../assets/after_reco6.png";
import before_reco7 from "../../assets/before_reco7.png";
import after_reco7 from "../../assets/after_reco7.png";






import { useNavigate } from "react-router-dom";

const Recommendations = () => {
  const [activeRule, setActiveRule] = useState("con1");
  const navigate = useNavigate();

  return (
    <section className="recommend">
      <div className="container">
        <div className="head">
          <div className="group">
            <h1>Recommendations</h1>
            <p className="info">
              Browse the guidelines and choose them what you want to assess your
              design on it
            </p>
          </div>
        </div>

        <div className="box">
          <div className="rules">
            <h2>Guidelines</h2>
            <ul className="guideline">
              <li
                onClick={() => setActiveRule("con1")}
                className={`${activeRule === "con1" && "active"}`}
              >
                Human Interface Guidelines (HIG)
              </li>
              <li
                onClick={() => setActiveRule("con2")}
                className={`${activeRule === "con2" && "active"}`}
              >
                Material Design Guidelines
              </li>
              <li
                onClick={() => setActiveRule("con3")}
                className={`${activeRule === "con3" && "active"}`}
              >
                Fluent Design System
              </li>
              <li
                onClick={() => setActiveRule("con4")}
                className={`${activeRule === "con4" && "active"}`}
              >
                Accessibility Guidelines
              </li>
              <li
                onClick={() => setActiveRule("con5")}
                className={`${activeRule === "con5" && "active"}`}
              >
                Platform-Specific Guidelines
              </li>
              <li
                onClick={() => setActiveRule("con6")}
                className={`${activeRule === "con6" && "active"}`}
              >
                Nielsen’s 10 Heuristic Principles
              </li>
              <li
                onClick={() => setActiveRule("con7")}
                className={`${activeRule === "con7" && "active"}`}
              >
                Norman’s 7 Principles
              </li>
            </ul>
            <div className="contents">
              {activeRule === "con1" ? (
                <div id="con1" className="content">
                  <div className="rule">
                    <div className="header">
                      <span>Clarity :</span><br />
                      <span>Deference :</span><br />
                      <span>Depth : </span><br />
                      <span>Feedback : </span><br />
                      <span>Consistency :</span><br />
                      <span>Adaptivity :</span>
                    </div>
                    <div className="example">
                      <span> Focus on content and functionality. Text should be legible, and icons
                        should be
                        precise.</span><br />
                      <span> The design should not overpower the content. Subtle visuals enhance
                        interaction.</span><br />
                      <span> Use layers and motion to help users understand hierarchy.</span><br />
                      <span> Apps should respond immediately to user actions with visual
                        feedback.</span><br />
                      <span> Maintain predictability by using familiar patterns.</span><br />
                      <span> Adapt designs to different device sizes and orientations.
                      </span>
                    </div>
                  </div>
                  <div className="img">
                    <div className="before">
                      <img src={before} alt="" />
                    </div>
                    <div className="after">
                      <img src={after} alt="" />
                    </div>
                  </div>
                  <p>
                    In this experiment, a Frequently Asked Questions section was added
                    near the bottom of a short lead gen form. This test ran on one of Expert Institute's
                    landing pages for their expert
                    witness seeking services. Impact on leads was measured.
                  </p>
                  <button
                    onClick={() => navigate("/model?tab=recommendations")}
                  >
                    Try it
                  </button>
                </div>
              ) : activeRule === "con2" ? (
                <div id="con2" className="content">
                  <div className="rule">
                    <div className="header">
                      <span>Material Metaphor :</span><br />
                      <span>Bold Use of Color :</span><br />
                      <span>Motion : </span><br />
                      <span>Responsive Design : </span><br />
                      <span>Elevation :</span><br />
                      <span>Typography :</span>
                    </div>
                    <div className="example">
                      <span> Simulates the real world using layers, shadows, and
                        depth.</span><br />
                      <span> Strong, intentional use of color to guide the user.</span><br />
                      <span> Transitions and animations help users understand interface
                        changes.</span><br />
                      <span> Apps should respond immediately to user actions with visual
                        feedback.</span><br />
                      <span>Elements appear elevated using shadows to indicate
                        importance.</span><br />
                      <span> Clear, readable typography, often using the Roboto font.
                      </span>
                    </div>
                  </div>
                  <div className="img">
                    <div className="before">
                      {" "}
                      <img src={before_spec} alt="" />
                    </div>
                    <div className="after">
                      <img src={after_spec} alt="" />
                    </div>
                  </div>
                  <p>
                    Do by placing important actions at the top of the screen they’re given more 
                    importance in the hierarchy.
                  </p>
                  <button
                    onClick={() => navigate("/model?tab=recommendations")}
                  >
                    Try it
                  </button>
                </div>
              ) : activeRule === "con3" ? (
                <div id="con3" className="content">
                  <div className="rule">
                    <div className="header">
                      <span>Light :</span><br />
                      <span>Depth :</span><br />
                      <span>Motion : </span><br />
                      <span>Material :</span><br />
                      <span>Scale :</span>
                    </div>
                    <div className="example">
                      <span> Light guides the user’s eye to important elements</span><br />
                      <span> Layers create a 3D feel, making navigation easier.</span><br />
                      <span> Motion explains transitions and changes in the interface.</span><br />
                      <span>Transparency and blur give a tactile, physical feel to elements.</span><br />
                      <span> Design elements smoothly adjust to different devices and screen sizes.
                      </span>
                    </div>
                  </div>
                  <div className="img">
                    <div className="before">
                      {" "}
                      <img src={before_reco1} alt="" />
                    </div>
                    <div className="after">
                      <img src={after_reco2} alt="" />
                    </div>
                  </div>
                  <p>
                    In this signup flow experiment, form fields on the right hand side (control) were shifted to the left column (variation). Impact on account creations and checkouts was measured.
                  </p>
                  <button
                    onClick={() => navigate("/model?tab=recommendations")}
                  >
                    Try it
                  </button>
                </div>
              ) : activeRule === "con4" ? (
                <div id="con4" className="content">
                  <div className="rule">
                    <div className="header">
                      <span>Perceivable :</span><br />
                      <span>Operable :</span><br />
                      <span>Understandable : </span><br />
                      <span>Robust :</span><br />
                    </div>
                    <div className="example">
                      <span> Information and elements must be accessible to all users.</span><br />
                      <span> Ensure easy navigation using multiple input methods.</span><br />
                      <span> Content should be easy to understand, and error messages should be
                        clear.</span><br />
                      <span> The design should work across a wide range of devices and assistive
                        technologies.
                      </span>
                    </div>
                  </div>
                  <div className="img">
                    <div className="before">
                      {" "}
                      <img src={before_reco3} alt="" />
                    </div>
                    <div className="after">
                      <img src={after_reco4} alt="" />
                    </div>
                  </div>
                  <p>
                    In this experiment, a thanking confirmation message was appended at
                    the top of the checkout screen of a local food delivery service.
                    Impact on completed transactions was measured.
                  </p>
                  <button
                    onClick={() => navigate("/model?tab=recommendations")}
                  >
                    Try it
                  </button>
                </div>
              ) : activeRule === "con5" ? (
                <div id="con5" className="content">
                  <div className="rule">
                    <div className="header">
                      <span>Android (Material Design) :</span><br />
                      <span>iOS (HIG) :</span><br />
                      <span>Windows (Fluent Design) : </span><br />
                      <span>Web (WCAG) :</span><br />
                    </div>
                    <div className="example">
                      <span> Use floating action buttons and bottom navigation for
                        consistency.</span><br />
                      <span> Follow iOS navigation patterns, such as the back button and gestures.</span><br />
                      <span> Use depth, lighting, and motion for a cohesive experience.</span><br />
                      <span> Focus on accessibility, using frameworks like Bootstrap for responsive
                        design.
                      </span>
                    </div>
                  </div>
                  <div className="img">
                    <div className="before">
                      {" "}
                      <img src={before_reco5} alt="" />
                    </div>
                    <div className="after">
                      <img src={after_reco5} alt="" />
                    </div>
                  </div>
                  <p>
                    In this experiment, selling points and benefits of a subscription were placed as bullets
                    at the top of a checkout page. The benefits highlighted things such as: unlimited applications,
                    access to vetted jobs and the ability to cancel anytime.
                    Impact on sales was measured.
                  </p>
                  <button
                    onClick={() => navigate("/model?tab=recommendations")}
                  >
                    Try it
                  </button>
                </div>
              ) : activeRule === "con6" ? (
                <div id="con6" className="content">
                  <div className="rule">
                    <div className="header">
                      <span>System Status Visibility :</span><br />
                      <span>System & the Real World :</span><br />
                      <span>User Control : </span><br />
                      <span>Consistency & Standards :</span><br />
                      <span>Error Prevention :</span><br />
                      <span>Recognition Over Recall :</span><br />
                      <span>Flexibility & Efficiency :</span><br />
                      <span>Aesthetic & Minimalist Design :</span><br />
                      <span>Error Recovery :</span><br />
                      <span>Help & Documentation :</span><br />
                    </div>
                    <div className="example">
                      <span> Keep users informed of ongoing processes.</span><br />
                      <span> Use familiar concepts and language.</span><br />
                      <span> Allow undo and redo actions to help users recover.</span><br />
                      <span> Follow platform conventions to reduce confusion.</span><br />
                      <span> Design to prevent problems before they occur.</span><br />
                      <span>Reduce memory load by showing options.</span><br />
                      <span> Support both novice and advanced users.</span><br />
                      <span> Avoid unnecessary information and clutter.</span><br />
                      <span> Provide clear error messages and paths to recovery.</span><br />
                      <span> Ensure information is easily accessible</span><br />
                    </div>
                  </div>
                  <div className="img">
                    <div className="before">
                      <img src={before_reco6} alt="" />
                    </div>
                    <div className="after">
                      <img src={after_reco6} alt="" />
                    </div>
                  </div>
                  <p>
                    In this experiment, the click area of job listing tiles was expanded to the
                    size of the full job tile. In the control, the click area was smaller -
                    mostly only the job headline, along with additional "view more" links on the right hand column.
                    Clicking the tile or headline would open up a new job details page in both control and variation.
                    Impact on progression and membership sales was measured.
                  </p>
                  <button
                    onClick={() => navigate("/model?tab=recommendations")}
                  >
                    Try it
                  </button>
                </div>
              ) : (
                <div id="con7" className="content">
                  <div className="rule">
                    <div className="header">
                      <span>Visibility :</span><br />
                      <span>Feedback :</span><br />
                      <span>Constraints : </span><br />
                      <span>Mapping :</span><br />
                      <span>Consistency :</span><br />
                      <span>Affordance :</span><br />
                      <span> Error Prevention :</span>
                    </div>
                    <div className="example">
                      <span> Ensure important elements are visible and easy to find.</span><br />
                      <span> Provide clear and immediate responses to user actions.</span><br />
                      <span> Guide users with limitations to prevent errors.</span><br />
                      <span>Ensure a logical relationship between controls and effects.</span><br />
                      <span> Maintain uniformity to make the design intuitive.</span><br />
                      <span> Design elements should visually indicate how to use them.</span><br />
                      <span> Minimize errors and make recovery easy when mistakes occur.</span>

                    </div>
                  </div>
                  <div className="img">
                    <div className="before">
                      <img src={before_reco7} alt="" />
                    </div>
                    <div className="after">
                      <img src={after_reco7} alt="" />
                    </div>
                  </div>
                  <p>
                    In this experiment, pricing plans were laid out horizontally for easier comparison. In the variation,
                    most of the plan benefits, features and differences were also referenced using a single lable that was
                    left-aligned.
                    The idea was to make the variables aligned and therefore more comparable.
                  </p>
                  <button
                    onClick={() => navigate("/model?tab=recommendations")}
                  >
                    Try it
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
