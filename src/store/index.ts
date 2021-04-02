import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createReducer from "./combineReducers";

const store = createStore(createReducer(), applyMiddleware(thunk));
export default store;
