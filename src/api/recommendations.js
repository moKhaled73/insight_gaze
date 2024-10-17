import axios from "axios";
import { useMutation } from "react-query";

const recommendations = (data) => {
  return axios.post("http://127.0.0.1:8000/generate_ui_recommendations", data);
};

const ourRecommendations = (data) => {
  return axios.post("http://127.0.0.1:8000/our_recommendations", data);
};

const useRecommendations = (onSuccess) => {
  return useMutation(recommendations, {
    onSuccess,
  });
};

const useOurRecommendations = (onSuccess) => {
  return useMutation(ourRecommendations, {
    onSuccess,
  });
};

export { useRecommendations, useOurRecommendations };
