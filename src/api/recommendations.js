import axios from "axios";
import { useMutation } from "react-query";

const recommendations = (data) => {
  return axios.post(
    "https://test-api-git-main-mohamed-khaleds-projects-a009ea96.vercel.app/generate_ui_recommendations",
    data
  );
};

const useRecommendations = (onSuccess) => {
  return useMutation(recommendations, {
    onSuccess,
  });
};

export { useRecommendations };
