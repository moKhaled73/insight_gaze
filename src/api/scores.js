import axios from "axios";
import { useMutation } from "react-query";

const scores = (data) => {
  return axios.post("http://127.0.0.1:8000/scores", data);
};

const useScores = (onSuccess) => {
  return useMutation(scores, {
    onSuccess,
  });
};

export { useScores };
