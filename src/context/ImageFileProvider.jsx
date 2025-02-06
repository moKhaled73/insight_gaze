/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const imageFileContext = createContext();

const ImageFileProvider = ({ children }) => {
  const [heatmap3sImage1, setHeatmap3sImage1] = useState(null);
  const [heatmap3sImage2, setHeatmap3sImage2] = useState(null);
  const [heatmap3s1, setHeatmap3s1] = useState(null);
  const [heatmap3s2, setHeatmap3s2] = useState(null);
  const [heatmap7sImage1, setHeatmap7sImage1] = useState(null);
  const [heatmap7sImage2, setHeatmap7sImage2] = useState(null);
  const [heatmap7s1, setHeatmap7s1] = useState(null);
  const [heatmap7s2, setHeatmap7s2] = useState(null);
  const [scanpathImage1, setScanpathImage1] = useState(null);
  const [scanpathImage2, setScanpathImage2] = useState(null);
  const [scanpath1, setScanpath1] = useState(null);
  const [scanpath2, setScanpath2] = useState(null);
  const [recommendationImage, setRecommendationImage] = useState(null);
  const [deepAnalysisImage, setDeepAnalysisImage] = useState(null);
  const [deepAnalysisHeatmap3s, setDeepAnalysisHeatmap3s] = useState(null);
  const [deepAnalysisHeatmap7s, setDeepAnalysisHeatmap7s] = useState(null);
  const [deepAnalysisScanpath, setDeepAnalysisScanpath] = useState(null);

  const [openInputFile, setOpenInputFile] = useState(false);

  return (
    <imageFileContext.Provider
      value={{
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
        openInputFile,
        setOpenInputFile,
        deepAnalysisImage,
        setDeepAnalysisImage,
        deepAnalysisHeatmap3s,
        setDeepAnalysisHeatmap3s,
        deepAnalysisHeatmap7s,
        setDeepAnalysisHeatmap7s,
        deepAnalysisScanpath,
        setDeepAnalysisScanpath,
      }}
    >
      {children}
    </imageFileContext.Provider>
  );
};

export const useImageFile = () => {
  return useContext(imageFileContext);
};

export default ImageFileProvider;
