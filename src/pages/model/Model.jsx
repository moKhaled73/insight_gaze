import { useState } from "react";
import { Helmet } from "react-helmet";
import "./model.css";

// components
import SelectImage from "../../components/selectImage/SelectImage";
import Heatmap from "../../components/heatmap/Heatmap";
import Scanpath from "../../components/scanpath/Scanpath";

// context
import { useImageFile } from "../../context/ImageFileProvider";

import { IoMdCloseCircle } from "react-icons/io";
import Recommendations from "../../components/recommendations/Recommendations";

const Model = () => {
  const [activeTab, setActiveTab] = useState("heatmap");
  const { imageFile, setImageFile, setHeatmap3s, setHeatmap7s, setScanpath } =
    useImageFile();

  return (
    <>
      <Helmet>
        <title>Model</title>
        <meta name="description" content="Model" />
      </Helmet>
      <main>
        <ul className="tabs">
          <li
            onClick={() => setActiveTab("heatmap")}
            className={`${activeTab === "heatmap" && "active"}`}
          >
            Heatmap
          </li>
          <li
            onClick={() => setActiveTab("scanpath")}
            className={`${activeTab === "scanpath" && "active"}`}
          >
            Scanpath
          </li>
          <li
            onClick={() => setActiveTab("recommendations")}
            className={`${activeTab === "recommendations" && "active"}`}
          >
            Recommendations
          </li>
        </ul>
        <div className="container">
          {!imageFile ? (
            <SelectImage />
          ) : (
            <>
              <>
                {activeTab === "heatmap" ? (
                  <Heatmap />
                ) : activeTab === "scanpath" ? (
                  <Scanpath />
                ) : (
                  <Recommendations />
                )}
              </>
              <IoMdCloseCircle
                className="close"
                onClick={() => {
                  setImageFile(null);
                  setHeatmap3s(null);
                  setHeatmap7s(null);
                  setScanpath(null);
                }}
              />
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Model;
