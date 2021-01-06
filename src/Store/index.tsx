import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import rootReducer from "./rootSlice";
const reducer = combineReducers({
  rootReducer,
  // here we will be adding reducers
});
const store = configureStore({
  reducer,
});
export default store;
