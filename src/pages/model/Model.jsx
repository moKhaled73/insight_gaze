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
import Models from "../../components/model/models/Models";

const Model = () => {
  const [activeTab, setActiveTab] = useState("heatmap3s");
  const {
    heatmap3sImage1,
    heatmap3sImage2,
    setHeatmap3sImage1,
    setHeatmap3sImage2,
    heatmap3s1,
    heatmap3s2,
    setHeatmap3s1,
    setHeatmap3s2,
    heatmap7sImage1,
    heatmap7sImage2,
    setHeatmap7sImage1,
    setHeatmap7sImage2,
    setHeatmap7s1,
    setHeatmap7s2,
    heatmap7s1,
    heatmap7s2,
    scanpathImage1,
    scanpathImage2,
    scanpath1,
    scanpath2,
    setScanpath1,
    setScanpath2,
    setScanpathImage1,
    setScanpathImage2,
    recommendationImage,
    setRecommendationImage,
  } = useImageFile();

  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab");

  const { mutate: generateHeatmap3s1, isLoading: heatmap3sLoading } =
    useHeatmap3s((data) => {
      setHeatmap3s1(URL.createObjectURL(data.data));
    });

  const { mutate: generateHeatmap3s2 } = useHeatmap3s((data) => {
    setHeatmap3s2(URL.createObjectURL(data.data));
  });

  const heatmap3sHandler = () => {
    if (heatmap3sImage1) {
      const formData = new FormData();
      formData.append("file", heatmap3sImage1);
      generateHeatmap3s1(formData);
      if (heatmap3sImage2) {
        const formData = new FormData();
        formData.append("file", heatmap3sImage2);
        generateHeatmap3s2(formData);
      }
    }
  };

  const { mutate: generateHeatmap7s1, isLoading: heatmap7sLoading } =
    useHeatmap7s((data) => {
      setHeatmap7s1(URL.createObjectURL(data.data));
    });

  const { mutate: generateHeatmap7s2 } = useHeatmap7s((data) => {
    setHeatmap7s2(URL.createObjectURL(data.data));
  });

  const heatmap7sHandler = () => {
    if (heatmap7sImage1) {
      const formData = new FormData();
      formData.append("file", heatmap7sImage1);
      generateHeatmap7s1(formData);
      if (heatmap7sImage2) {
        const formData = new FormData();
        formData.append("file", heatmap7sImage2);
        generateHeatmap7s2(formData);
      }
    }
  };

  const { mutate: generateScanpath1, isLoading: scanpathLoading } = useScanpath(
    (data) => {
      setScanpath1(URL.createObjectURL(data.data));
    }
  );

  const { mutate: generateScanpath2 } = useScanpath((data) => {
    setScanpath2(URL.createObjectURL(data.data));
  });

  const ScanpathHandler = () => {
    if (scanpathImage1) {
      const formData = new FormData();
      formData.append("file", scanpathImage1);
      generateScanpath1(formData);
      if (scanpathImage2) {
        const formData = new FormData();
        formData.append("file", scanpathImage2);
        generateScanpath2(formData);
      }
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
                {heatmap3sImage1 ? (
                  <>
                    <Models
                      originalImage1={heatmap3sImage1}
                      originalImage2={heatmap3sImage2}
                      resultImage1={heatmap3s1}
                      resultImage2={heatmap3s2}
                      handler={heatmap3sHandler}
                      loading={heatmap3sLoading}
                      setOriginalImage1={setHeatmap3sImage1}
                      setOriginalImage2={setHeatmap3sImage2}
                      setResultImage1={setHeatmap3s1}
                      setResultImage2={setHeatmap3s2}
                      helpName="heatmap-3s"
                      imageName="Heatmap 3s"
                      buttonName="Generate Heatmap 3s"
                    />
                    <IoMdCloseCircle
                      className="close"
                      onClick={() => {
                        setHeatmap3sImage1(null);
                        setHeatmap3sImage2(null);
                        setHeatmap3s1(null);
                        setHeatmap3s2(null);
                      }}
                    />
                  </>
                ) : (
                  <SelectImage
                    setImage1={setHeatmap3sImage1}
                    setImage2={setHeatmap3sImage2}
                    multiple={true}
                  />
                )}
              </>
            ) : activeTab === "heatmap7s" ? (
              <>
                {heatmap7sImage1 ? (
                  <>
                    <Models
                      originalImage1={heatmap7sImage1}
                      originalImage2={heatmap7sImage2}
                      resultImage1={heatmap7s1}
                      resultImage2={heatmap7s2}
                      handler={heatmap7sHandler}
                      loading={heatmap7sLoading}
                      setOriginalImage1={setHeatmap7sImage1}
                      setOriginalImage2={setHeatmap7sImage2}
                      setResultImage1={setHeatmap7s1}
                      setResultImage2={setHeatmap7s2}
                      helpName="heatmap-7s"
                      imageName="Heatmap 7s"
                      buttonName="Generate Heatmap 7s"
                    />
                    <IoMdCloseCircle
                      className="close"
                      onClick={() => {
                        setHeatmap7sImage1(null);
                        setHeatmap7sImage2(null);
                        setHeatmap7s1(null);
                        setHeatmap7s2(null);
                      }}
                    />
                  </>
                ) : (
                  <SelectImage
                    setImage1={setHeatmap7sImage1}
                    setImage2={setHeatmap7sImage2}
                    multiple={true}
                  />
                )}
              </>
            ) : activeTab === "scanpath" ? (
              <>
                {scanpathImage1 ? (
                  <>
                    <Models
                      originalImage1={scanpathImage1}
                      originalImage2={scanpathImage2}
                      resultImage1={scanpath1}
                      resultImage2={scanpath2}
                      handler={ScanpathHandler}
                      loading={scanpathLoading}
                      setOriginalImage1={setScanpathImage1}
                      setOriginalImage2={setScanpathImage2}
                      setResultImage1={setScanpath1}
                      setResultImage2={setScanpath2}
                      helpName="scanpath"
                      imageName="Scanpath"
                      buttonName="Generate Scanpath"
                    />
                    <IoMdCloseCircle
                      className="close"
                      onClick={() => {
                        setScanpathImage1(null);
                        setScanpathImage2(null);
                        setScanpath1(null);
                        setScanpath2(null);
                      }}
                    />
                  </>
                ) : (
                  <SelectImage
                    setImage1={setScanpathImage1}
                    setImage2={setScanpathImage2}
                    multiple
                  />
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
                  <SelectImage
                    setImage1={setRecommendationImage}
                    multiple={false}
                  />
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
