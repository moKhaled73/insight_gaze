import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "./model.css";

import { useSearchParams } from "react-router-dom";

import HelpDialog from "../../components/model/helpDialog/HelpDialog";
import Heatmap3s from "../../components/model/Heatmap3s";
import Heatmap7s from "../../components/model/Heatmap7s";
import Scanpath from "../../components/model/Scanpath";
import Recommendations from "../../components/model/recommendations/Recommendations";
import DeepAnalysis from "../../components/model/DeepAnalysis";
import { IoMdHelp } from "react-icons/io";

const features = [
  {
    name: "heatmap3s",
    title: "Heatmap 3s",
    content:
      "Heatmap 3sThis feature prioritizes fast response. It is designed to be most effective when speed is essential or the design is less elemental like landing page or banner designs that contain headers or mostly like that.",
  },
  {
    name: "heatmap7s",
    title: "Heatmap 7s",
    content:
      "This feature is provided for cases where the design is complex, when the user requires a deeper understanding of the design, or when multiple elements need to be thoroughly reviewed.",
  },
  {
    name: "scanpath",
    title: "Scanpath",
    content:
      "This feature shows the path that the user's eye will follow or the transitions that the eye will make. Therefore, it shows the interface designer how the user will receive the design.",
  },
  {
    name: "recommendation",
    title: "Recommendation",
    content:
      "This feature is provided for cases where the design is complex, when the user requires a deeper understanding of the design, or when multiple elements need to be thoroughly reviewed.",
  },
  {
    name: "deepAnalysis",
    title: "Deep Analysis",
    content:
      "This feature is provided for cases where the design is complex, when the user requires a deeper understanding of the design, or when multiple elements need to be thoroughly reviewed.",
  },
];

const Model = () => {
  const [activeTab, setActiveTab] = useState("heatmap3s");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false);

  // tab
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab");
  useEffect(() => {
    if (tab) {
      setActiveTab(tab);
    }
  }, [tab]);

  const helpHandler = (feature) => {
    setTitle(feature.title);
    setContent(feature.content);
    setOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Model</title>
        <meta name="description" content="Model" />
      </Helmet>
      <main>
        <div className="cont">
          <ul className="tabs">
            {features.map((feature) => (
              <li
                key={feature.name}
                onClick={() => setActiveTab(feature.name)}
                className={`${activeTab === feature.name && "active"}`}
              >
                {feature.title}{" "}
                <IoMdHelp
                  className="tab-help"
                  size={20}
                  onClick={() => helpHandler(feature)}
                />
              </li>
            ))}
          </ul>
          <div className="container">
            {activeTab === "heatmap3s" ? (
              <Heatmap3s />
            ) : activeTab === "heatmap7s" ? (
              <Heatmap7s />
            ) : activeTab === "scanpath" ? (
              <Scanpath />
            ) : activeTab === "recommendation" ? (
              <Recommendations />
            ) : activeTab === "deepAnalysis" ? (
              <DeepAnalysis />
            ) : null}
          </div>
          <HelpDialog
            open={open}
            setOpen={setOpen}
            title={title}
            content={content}
          />
        </div>
      </main>
    </>
  );
};

export default Model;
