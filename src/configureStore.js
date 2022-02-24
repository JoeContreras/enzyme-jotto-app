import rootReducer from "./reducers/index";
import ReduxThunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";

export const middlewares = [ReduxThunk];

const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));

export default store;
