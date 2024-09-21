import axios from "axios";
import { useMutation } from "react-query";

const heatmap3s = (data) => {
  return axios.post("http://127.0.0.1:8000/heatmap3s/upload", data, {
    responseType: "blob",
  });
};

const heatmap7s = (data) => {
  return axios.post("http://127.0.0.1:8000/heatmap7s/upload", data, {
    responseType: "blob",
  });
};

const useHeatmap3s = (onSuccess) => {
  return useMutation(heatmap3s, {
    onSuccess,
  });
};

const useHeatmap7s = (onSuccess) => {
  return useMutation(heatmap7s, {
    onSuccess,
  });
};

export { useHeatmap3s, useHeatmap7s };
