import { ActionTypes } from "../actions";

export default function successReducer(state = false, action) {
  switch (action.type) {
    case ActionTypes.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
}
