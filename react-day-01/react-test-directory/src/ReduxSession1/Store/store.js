import { applyMiddleware, createStore } from "redux";
// import userReducer from "../Reducers/userReducer";
import thunkMiddleware from 'redux-thunk'
import rootReducer from "../Reducers/rootReducer";

const enhancer = applyMiddleware(thunkMiddleware)

const store = createStore(rootReducer,enhancer)
export default store