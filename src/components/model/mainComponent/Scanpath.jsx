import ScanpathContainer from "../imageContainer/scanpathContainer/ScanpathContainer";
import TryAgainButton from "../button/TryAgainButton";
import GenerateButton from "../button/GenerateButton";
import SelectImage from "../selectImage/SelectImage";
import { useImageFile } from "../../../context/ImageFileProvider";
import { useScanpath } from "../../../api/scanpath";
import { IoMdCloseCircle } from "react-icons/io";

const Scanpath = () => {
  const {
    scanpathImage1,
    setScanpathImage1,
    scanpath1,
    setScanpath1,
    scanpathImage2,
    setScanpathImage2,
    scanpath2,
    setScanpath2,
    setOpenInputFile,
  } = useImageFile();

  const { mutate: generateScanpath1, isLoading: scanpathLoading1 } =
    useScanpath((data) => {
      setScanpath1(data.data.scanpath);
    });

  const { mutate: generateScanpath2, isLoading: scanpathLoading2 } =
    useScanpath((data) => {
      setScanpath2(data.data.scanpath);
    });

  const scanpathHandler = () => {
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

  return (
    <>
      {scanpathImage1 ? (
        <>
          <div className="images-container">
            <ScanpathContainer
              originalImage={scanpathImage1}
              setOriginalImage={setScanpathImage1}
              scanpath={scanpath1}
              setResultImage={setScanpath1}
              helpName={"scanpath"}
              imageName={"Scanapth"}
            />
            {scanpathImage2 && (
              <>
                <div className="divider"></div>
                <ScanpathContainer
                  originalImage={scanpathImage2}
                  setOriginalImage={setScanpathImage2}
                  scanpath={scanpath2}
                  setResultImage={setScanpath2}
                  helpName={"scanpath"}
                  imageName={"Scanapth"}
                />
              </>
            )}
          </div>
          {scanpath1 ? (
            <TryAgainButton
              clearImage={() => {
                setScanpathImage1(null);
                setScanpath1(null);
                setScanpathImage2(null);
                setScanpath2(null);
                setOpenInputFile(true);
              }}
            />
          ) : (
            <GenerateButton
              text={"Generate Scanpath"}
              loading={scanpathLoading1 || scanpathLoading2}
              onClickHandler={scanpathHandler}
            />
          )}
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
          multiple={true}
        />
      )}
    </>
  );
};

export default Scanpath;
