import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "./model.css";

// components
import SelectImage from "../../components/model/selectImage/SelectImage";
import Recommendations from "../../components/model/recommendations/Recommendations";

// context
import { useImageFile } from "../../context/ImageFileProvider";

import { IoMdCloseCircle } from "react-icons/io";
import { useSearchParams } from "react-router-dom";
import { useScanpath } from "../../api/scanpath";
import { useHeatmap3s, useHeatmap7s } from "../../api/heatmap";
import Models from "../../components/model/heatmap/Models";

const Model = () => {
  const [activeTab, setActiveTab] = useState("heatmap3s");
  const {
    heatmap3sImage,
    setHeatmap3sImage,
    heatmap7sImage,
    setHeatmap7sImage,
    scanpathImage,
    setScanpathImage,
    recommendationImage,
    setRecommendationImage,
    heatmap3s,
    setHeatmap3s,
    heatmap7s,
    setHeatmap7s,
    scanpath,
    setScanpath,
  } = useImageFile();

  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab");

  const { mutate: generateHeatmap3s, isLoading: heatmap3sLoading } =
    useHeatmap3s((data) => {
      setHeatmap3s(URL.createObjectURL(data.data));
    });

  const heatmap3sHandler = () => {
    if (heatmap3sImage) {
      const formData = new FormData();
      formData.append("file", heatmap3sImage);
      generateHeatmap3s(formData);
    }
  };

  const { mutate: generateHeatmap7s, isLoading: heatmap7sLoading } =
    useHeatmap7s((data) => {
      setHeatmap7s(URL.createObjectURL(data.data));
    });

  const heatmap7sHandler = () => {
    if (heatmap7sImage) {
      const formData = new FormData();
      formData.append("file", heatmap7sImage);
      generateHeatmap7s(formData);
    }
  };

  const { mutate: generateScanpath, isLoading: scanpathLoading } = useScanpath(
    (data) => {
      setScanpath(URL.createObjectURL(data.data));
    }
  );

  const ScanpathHandler = () => {
    if (scanpathImage) {
      const formData = new FormData();
      formData.append("file", scanpathImage);
      generateScanpath(formData);
    }
  };

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
              onClick={() => setActiveTab("heatmap3s")}
              className={`${activeTab === "heatmap3s" && "active"}`}
            >
              Heatmap 3s
            </li>
            <li
              onClick={() => setActiveTab("heatmap7s")}
              className={`${activeTab === "heatmap7s" && "active"}`}
            >
              Heatmap 7s
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
            {activeTab === "heatmap3s" ? (
              <>
                {heatmap3sImage ? (
                  <>
                    <Models
                      originalImage={heatmap3sImage}
                      resultImage={heatmap3s}
                      handler={heatmap3sHandler}
                      loading={heatmap3sLoading}
                      setOriginalImage={setHeatmap3sImage}
                      setResultImage={setHeatmap3s}
                      helpName="heatmap-3s"
                      imageName="Heatmap 3s"
                    />
                    <IoMdCloseCircle
                      className="close"
                      onClick={() => {
                        setHeatmap3sImage(null);
                        setHeatmap3s(null);
                      }}
                    />
                  </>
                ) : (
                  <SelectImage setImage={setHeatmap3sImage} />
                )}
              </>
            ) : activeTab === "heatmap7s" ? (
              <>
                {heatmap7sImage ? (
                  <>
                    <Models
                      originalImage={heatmap7sImage}
                      resultImage={heatmap7s}
                      handler={heatmap7sHandler}
                      loading={heatmap7sLoading}
                      setOriginalImage={setHeatmap7sImage}
                      setResultImage={setHeatmap7s}
                      helpName="heatmap-7s"
                      imageName="Heatmap 7s"
                    />
                    <IoMdCloseCircle
                      className="close"
                      onClick={() => {
                        setHeatmap7sImage(null);
                        setHeatmap7s(null);
                      }}
                    />
                  </>
                ) : (
                  <SelectImage setImage={setHeatmap7sImage} />
                )}
              </>
            ) : activeTab === "scanpath" ? (
              <>
                {scanpathImage ? (
                  <>
                    <Models
                      originalImage={scanpathImage}
                      resultImage={scanpath}
                      handler={ScanpathHandler}
                      loading={scanpathLoading}
                      setOriginalImage={setScanpathImage}
                      setResultImage={setScanpath}
                      helpName="scanpath"
                      imageName="Scanpath"
                    />
                    <IoMdCloseCircle
                      className="close"
                      onClick={() => {
                        setScanpathImage(null);
                        setScanpath(null);
                      }}
                    />
                  </>
                ) : (
                  <SelectImage setImage={setScanpathImage} />
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
                  <SelectImage setImage={setRecommendationImage} />
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
