import { combineReducers } from "redux";
import { routerReducer }   from "react-router-redux";
import photoStore          from "./photoStore.js";

const rootReducer = combineReducers({
  routing: routerReducer,
  photoStore: photoStore
});

export default rootReducer;
