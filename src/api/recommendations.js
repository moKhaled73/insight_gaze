import axios from "axios";
import { useMutation } from "react-query";

const recommendations = (data) => {
  return axios.post(
    "http://127.0.0.1:8000/recommendations/gemini_recommendations",
    data
  );
};

const ourRecommendations = (data) => {
  return axios.post(
    "http://127.0.0.1:8000/recommendations/our_recommendations",
    data
  );
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
