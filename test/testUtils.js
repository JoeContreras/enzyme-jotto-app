import { applyMiddleware, createStore } from "redux";
import rootReducer from "../src/reducers";
import { middlewares } from "../src/configureStore";

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const storeFactory = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
};
