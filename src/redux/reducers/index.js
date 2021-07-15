import { combineReducers } from "redux";
import filterReducer from "./filterReducers";
import todoReducer from "./todoReducers";

const rootReducer = combineReducers({ todoReducer, filterReducer });
export default rootReducer;
