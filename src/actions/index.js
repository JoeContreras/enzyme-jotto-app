import axios from "axios";
import { getLetterMatchCount } from "../helpers";

export const ActionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
};

export const guessWord = (guessedWord) => {
  return function (dispatch, getState) {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: ActionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount },
    });

    if (guessedWord === secretWord) {
      dispatch({ type: ActionTypes.CORRECT_GUESS });
    }
  };
};

export const getSecretWord = () => {
  return axios.get("http://localhost:3030").then((response) => response.data);
};
