import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from 'redux-thunk'
import rootReducer from "../Reducer/rootReducer";
const enhancer = applyMiddleware(thunkMiddleware)
const store = createStore(rootReducer,enhancer)
export default store