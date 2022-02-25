import { ActionTypes } from "../actions";

export default function secretWordReducer(state = "", action) {
  switch (action.type) {
    case ActionTypes.SET_SECRET_WORD:
      return action.payload;
    default:
      return state;
  }
}
