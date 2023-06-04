import { combineReducers } from "redux";
import { destinationsReducer } from "./destination";

const allReducers = combineReducers({
    destinations: destinationsReducer
});

export default allReducers;