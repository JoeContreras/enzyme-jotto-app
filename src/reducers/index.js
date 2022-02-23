import { combineReducers } from "redux";
import successReducer from "./successReducer";

const rootReducer = combineReducers({
  success: successReducer,
});

export default rootReducer;
