import { combineReducers } from "redux";
import fetchReducer from "./fetchReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({users:userReducer,fetchApi:fetchReducer})
export default rootReducer