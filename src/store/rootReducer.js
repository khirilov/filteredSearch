import { combineReducers } from "redux";
import { filterReducer } from "./filters/filter-reducers";
import { positionReducer } from "./position/position-reducers";

export const rootReducer = combineReducers({
  positions: positionReducer,
  filters: filterReducer,
});
