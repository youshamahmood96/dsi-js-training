import { combineReducers } from "redux";
import fetchUserReducer from "./fetchUserReducer";
import userReducer from "./userReducer";
const rootReducer = combineReducers({
    staticUsers:userReducer,
    dynamicUsers:fetchUserReducer
})
export default rootReducer