import axios from "axios";

export const ActionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
};

export function correctGuess() {
  return { type: ActionTypes.CORRECT_GUESS };
}

export const getSecretWord = () => {
  return axios.get("http://localhost:3030").then((response) => response.data);
};
