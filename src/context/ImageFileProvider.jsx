/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const imageFileContext = createContext();

const ImageFileProvider = ({ children }) => {
  const [heatmap3sImage, setHeatmap3sImage] = useState(null);
  const [heatmap7sImage, setHeatmap7sImage] = useState(null);
  const [scanpathImage, setScanpathImage] = useState(null);
  const [recommendationImage, setRecommendationImage] = useState(null);
  const [heatmap3s, setHeatmap3s] = useState(null);
  const [heatmap7s, setHeatmap7s] = useState(null);
  const [scanpath, setScanpath] = useState(null);
  return (
    <imageFileContext.Provider
      value={{
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
