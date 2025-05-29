import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import mainReducer from "../reducers";
import favReducer from "../reducers/favReducer";
import jobListReducer from "../reducers/jobListReducer";

const rootReducer = combineReducers({
  favorite: favReducer,
  jobList: jobListReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
