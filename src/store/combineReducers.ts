import { combineReducers } from "redux";
import loginInfo from "./login/reducer";

const createReducer = () =>
  combineReducers({ loginInfo });

export default createReducer;
