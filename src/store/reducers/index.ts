import { combineReducers } from "redux";
import { defaultReducer } from "./default/default";

export const reducers = combineReducers({
	default : defaultReducer
  });