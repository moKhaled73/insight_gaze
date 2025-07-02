/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const imageFileContext = createContext();

const ImageFileProvider = ({ children }) => {
  // heatmap 3s
  const [heatmap3sImage1, setHeatmap3sImage1] = useState(null);
  const [heatmap3s1, setHeatmap3s1] = useState(null);
  const [heatmap3sImage2, setHeatmap3sImage2] = useState(null);
  const [heatmap3s2, setHeatmap3s2] = useState(null);
  //heatmap 7s
  const [heatmap7sImage1, setHeatmap7sImage1] = useState(null);
  const [heatmap7s1, setHeatmap7s1] = useState(null);
  const [heatmap7sImage2, setHeatmap7sImage2] = useState(null);
  const [heatmap7s2, setHeatmap7s2] = useState(null);
  // scanpath
  const [scanpathImage1, setScanpathImage1] = useState(null);
  const [scanpath1, setScanpath1] = useState(null);
  const [scanpathImage2, setScanpathImage2] = useState(null);
  const [scanpath2, setScanpath2] = useState(null);
  // scores
  const [scoresImage, setScoresImage] = useState(null);
  const [scores, setScores] = useState(null);
  // recommendation
  const [recommendationImage, setRecommendationImage] = useState(null);
  // deep analysis
  const [deepAnalysisImage, setDeepAnalysisImage] = useState(null);
  const [deepAnalysisHeatmap3s, setDeepAnalysisHeatmap3s] = useState(null);
  const [deepAnalysisHeatmap7s, setDeepAnalysisHeatmap7s] = useState(null);
  const [deepAnalysisScanpath, setDeepAnalysisScanpath] = useState(null);
  // open the selection box again
  const [openInputFile, setOpenInputFile] = useState(false);

  return (
    <imageFileContext.Provider
      value={{
        // heatmap 3s
        heatmap3sImage1,
        setHeatmap3sImage1,
        heatmap3s1,
        setHeatmap3s1,
        heatmap3sImage2,
        setHeatmap3sImage2,
        heatmap3s2,
        setHeatmap3s2,
        // heatmap7s
        heatmap7sImage1,
        setHeatmap7sImage1,
        heatmap7s1,
        setHeatmap7s1,
        heatmap7sImage2,
        setHeatmap7sImage2,
        heatmap7s2,
        setHeatmap7s2,
        // scanpath
        scanpathImage1,
        setScanpathImage1,
        scanpath1,
        setScanpath1,
        scanpathImage2,
        setScanpathImage2,
        scanpath2,
        setScanpath2,
        // scores
        scoresImage,
        setScoresImage,
        scores,
        setScores,
        // recommendations
        recommendationImage,
        setRecommendationImage,
        // deep analysis
        deepAnalysisImage,
        setDeepAnalysisImage,
        deepAnalysisHeatmap3s,
        setDeepAnalysisHeatmap3s,
        deepAnalysisHeatmap7s,
        setDeepAnalysisHeatmap7s,
        deepAnalysisScanpath,
        setDeepAnalysisScanpath,
        // open the selection box again
        openInputFile,
        setOpenInputFile,
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
