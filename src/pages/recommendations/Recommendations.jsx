import { useState } from "react";
import "./recommendations.css";

import before from "../../assets/before.jpg";
import after from "../../assets/after.jpg";
import before_spec from "../../assets/before_spec.png";
import after_spec from "../../assets/after_spec.png";
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
                  <p>
                    <span>Clarity</span> : Focus on content and functionality.
                    Text should be legible, and icons should be precise.
                    <br />
                    <span>Deference</span> : The design should not overpower the
                    content. Subtle visuals enhance interaction.
                    <br />
                    <span>Depth</span> : Use layers and motion to help users
                    understand hierarchy.
                    <br />
                    <span>Feedback</span> : Apps should respond immediately to
                    user actions with visual feedback.
                    <br />
                    <span>Consistency</span> : Maintain predictability by using
                    familiar patterns.
                    <br />
                    <span>Adaptivity</span> : Adapt designs to different device
                    sizes and orientations.
                  </p>
                  <div className="img">
                    <div className="before">
                      <img src={before} alt="" />
                    </div>
                    <div className="after">
                      <img src={after} alt="" />
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Exercitationem quas eum impedit porro delectus, odio
                    placeat? Recusandae itaque eligendi fugit?
                  </p>
                  <button
                    onClick={() => navigate("/model?tab=recommendations")}
                  >
                    Try it
                  </button>
                </div>
              ) : activeRule === "con2" ? (
                <div id="con2" className="content">
                  <p>
                    <span> Material Metaphor</span>: Simulates the real world
                    using layers, shadows, and depth.
                    <br />
                    <span> Bold Use of Color</span> : Strong, intentional use of
                    color to guide the user.
                    <br />
                    <span> Motion</span> : Transitions and animations help users
                    understand interface changes.
                    <br />
                    <span> Responsive Design</span> : Designs adapt to all
                    screen sizes and platforms.
                    <br />
                    <span> Elevation </span> : Elements appear elevated using
                    shadows to indicate importance.
                    <br />
                    <span> Typography</span>: Clear, readable typography, often
                    using the Roboto font.
                  </p>
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Exercitationem quas eum impedit porro delectus, odio
                    placeat? Recusandae itaque eligendi fugit?
                  </p>
                  <button
                    onClick={() => navigate("/model?tab=recommendations")}
                  >
                    Try it
                  </button>
                </div>
              ) : activeRule === "con3" ? (
                <div id="con3" className="content">
                  <p>
                    <span> Light</span> : guides the user’s eye to important
                    elements.
                    <br />
                    <span>Depth </span>: Layers create a 3D feel, making
                    navigation easier.
                    <br />
                    <span>Motion</span>: Motion explains transitions and changes
                    in the interface.
                    <br />
                    <span>Material</span>: Transparency and blur give a tactile,
                    physical feel to elements.
                    <br />
                    <span>Scale: </span>Design elements smoothly adjust to
                    different devices and screen sizes.
                  </p>
                  <div className="img">
                    <div className="before">
                      {" "}
                      <img src={before} alt="" />
                    </div>
                    <div className="after">
                      <img src={after} alt="" />
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Exercitationem quas eum impedit porro delectus, odio
                    placeat? Recusandae itaque eligendi fugit?
                  </p>
                  <button
                    onClick={() => navigate("/model?tab=recommendations")}
                  >
                    Try it
                  </button>
                </div>
              ) : activeRule === "con4" ? (
                <div id="con4" className="content">
                  <p>
                    <span>Perceivable</span>: Information and elements must be
                    accessible to all users.
                    <br />
                    <span>Operable </span>: Ensure easy navigation using
                    multiple input methods.
                    <br />
                    <span>Understandable</span>: Content should be easy to
                    understand, and error messages should be clear.
                    <br />
                    <span>Robust </span> : The design should work across a wide
                    range of devices and assistive technologies.
                  </p>
                  <div className="img">
                    <div className="before">
                      {" "}
                      <img src={before} alt="" />
                    </div>
                    <div className="after">
                      <img src={after} alt="" />
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Exercitationem quas eum impedit porro delectus, odio
                    placeat? Recusandae itaque eligendi fugit?
                  </p>
                  <button
                    onClick={() => navigate("/model?tab=recommendations")}
                  >
                    Try it
                  </button>
                </div>
              ) : activeRule === "con5" ? (
                <div id="con5" className="content">
                  <p>
                    <span>Android (Material Design) </span>: Use floating action
                    buttons and bottom navigation for consistency.
                    <br />
                    <span>iOS (HIG) </span> : Follow iOS navigation patterns,
                    such as the back button and gestures.
                    <br />
                    <span>Windows (Fluent Design) </span> : Use depth, lighting,
                    and motion for a cohesive experience.
                    <br />
                    <span>Web (WCAG) </span>: Focus on accessibility, using
                    frameworks like Bootstrap for responsive design.
                  </p>
                  <div className="img">
                    <div className="before">
                      {" "}
                      <img src={before} alt="" />
                    </div>
                    <div className="after">
                      <img src={after} alt="" />
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Exercitationem quas eum impedit porro delectus, odio
                    placeat? Recusandae itaque eligendi fugit?
                  </p>
                  <button
                    onClick={() => navigate("/model?tab=recommendations")}
                  >
                    Try it
                  </button>
                </div>
              ) : activeRule === "con6" ? (
                <div id="con6" className="content">
                  <p>
                    <span>System Status Visibility </span>: Keep users informed
                    of ongoing processes.
                    <br />
                    <span>Match Between System and the Real World </span>: Use
                    familiar concepts and language.
                    <br />
                    <span>User Control </span>: Allow undo and redo actions to
                    help users recover.
                    <br />
                    <span>Consistency & Standards </span>: Follow platform
                    conventions to reduce confusion.
                    <br />
                    <span>Error Prevention </span>: Design to prevent problems
                    before they occur.
                    <br />
                    <span>Recognition Over Recall </span> : Reduce memory load
                    by showing options.
                    <br />
                    <span>Flexibility & Efficiency </span> : Support both novice
                    and advanced users.
                    <br />
                    <span>Aesthetic and Minimalist Design </span> : Avoid
                    unnecessary information and clutter.
                    <br />
                    <span>Error Recovery </span> : Provide clear error messages
                    and paths to recovery. <br />
                    <span>Help & Documentation </span> : Ensure information is
                    easily accessible.
                  </p>
                  <div className="img">
                    <div className="before">
                      <img src={before} alt="" />
                    </div>
                    <div className="after">
                      <img src={after} alt="" />
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Exercitationem quas eum impedit porro delectus, odio
                    placeat? Recusandae itaque eligendi fugit?
                  </p>
                  <button
                    onClick={() => navigate("/model?tab=recommendations")}
                  >
                    Try it
                  </button>
                </div>
              ) : (
                <div id="con7" className="content">
                  <p>
                    <span> Visibility </span>: Ensure important elements are
                    visible and easy to find.
                    <span> Feedback </span>: Provide clear and immediate
                    responses to user actions.
                    <span> Constraints</span>: Guide users with limitations to
                    prevent errors.
                    <span> Mapping </span> :Ensure a logical relationship
                    between controls and effects.
                    <span> Consistency</span> : Maintain uniformity to make the
                    design intuitive.
                    <span> Affordance </span> : Design elements should visually
                    indicate how to use them.
                    <span> Error Prevention</span> : Minimize errors and make
                    recovery easy when mistakes occur.
                  </p>
                  <div className="img">
                    <div className="before">
                      <img src={before} alt="" />
                    </div>
                    <div className="after">
                      <img src={after} alt="" />
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Exercitationem quas eum impedit porro delectus, odio
                    placeat? Recusandae itaque eligendi fugit?
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
