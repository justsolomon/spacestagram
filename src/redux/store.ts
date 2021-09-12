import { applyMiddleware, createStore, Middleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

let middleware: Middleware[] = [thunk];

if (process.env.NODE_ENV !== "production") {
  middleware = [...middleware, logger];
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
