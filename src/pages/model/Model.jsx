import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "./model.css";

// components
import SelectImage from "../../components/model/selectImage/SelectImage";
import Heatmap from "../../components/model/heatmap/Heatmap";
import Scanpath from "../../components/model/scanpath/Scanpath";
import Recommendations from "../../components/model/recommendations/Recommendations";

// context
import { useImageFile } from "../../context/ImageFileProvider";

import { IoMdCloseCircle } from "react-icons/io";
import { useSearchParams } from "react-router-dom";

const Model = () => {
  const [activeTab, setActiveTab] = useState("heatmap");
  const {
    heatmapImage,
    setHeatmapImage,
    scanpathImage,
    setScanpathImage,
    recommendationImage,
    setRecommendationImage,
    setHeatmap3s,
    setHeatmap7s,
    setScanpath,
  } = useImageFile();

  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab");

  useEffect(() => {
    if (tab) {
      setActiveTab(tab);
    }
  }, [tab]);

  return (
    <>
      <Helmet>
        <title>Model</title>
        <meta name="description" content="Model" />
      </Helmet>
      <main>
        <div className="cont">
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
            {activeTab === "heatmap" ? (
              <>
                {heatmapImage ? (
                  <>
                    <Heatmap />
                    <IoMdCloseCircle
                      className="close"
                      onClick={() => {
                        setHeatmapImage(null);
                        setHeatmap3s(null);
                        setHeatmap7s(null);
                      }}
                    />
                  </>
                ) : (
                  <SelectImage imageType="heatmap" />
                )}
              </>
            ) : activeTab === "scanpath" ? (
              <>
                {scanpathImage ? (
                  <>
                    <Scanpath />
                    <IoMdCloseCircle
                      className="close"
                      onClick={() => {
                        setScanpathImage(null);
                        setScanpath(null);
                      }}
                    />
                  </>
                ) : (
                  <SelectImage imageType="scanpath" />
                )}
              </>
            ) : activeTab === "recommendations" ? (
              <>
                {recommendationImage ? (
                  <>
                    <Recommendations />
                    <IoMdCloseCircle
                      className="close"
                      onClick={() => setRecommendationImage(null)}
                    />
                  </>
                ) : (
                  <SelectImage imageType="recommendation" />
                )}
              </>
            ) : null}
          </div>
        </div>
      </main>
    </>
  );
};

export default Model;
