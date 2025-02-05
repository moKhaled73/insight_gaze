import axios from "axios";
import { useMutation } from "react-query";

const scanpath = (data) => {
  return axios.post("http://127.0.0.1:8000/scanpath/upload", data, {
    responseType: "blob",
  });
};

const useScanpath = (onSuccess) => {
  return useMutation(scanpath, {
    onSuccess,
  });
};
export { useScanpath };
