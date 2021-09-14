import { combineReducers } from "redux";
import photoReducer from "./photo/photoReducer";

const rootReducer = combineReducers({
  photos: photoReducer,
});

export default rootReducer;
