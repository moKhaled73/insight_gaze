/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const imageFileContext = createContext();

const ImageFileProvider = ({ children }) => {
  const [imageFile, setImageFile] = useState(null);
  const [heatmap3s, setHeatmap3s] = useState(null);
  const [heatmap7s, setHeatmap7s] = useState(null);
  const [scanpath, setScanpath] = useState(null);
  return (
    <imageFileContext.Provider
      value={{
        imageFile,
        setImageFile,
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
