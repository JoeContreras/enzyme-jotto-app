import { ActionTypes } from "../actions";

export default function guessedWordsReducer(state = [], action) {
  switch (action.type) {
    case ActionTypes.GUESS_WORD:
      return [...state, action.payload];
    default:
      return state;
  }
}
