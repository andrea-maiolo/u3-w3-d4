import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favReducer from "../reducers/favReducer";
import jobListReducer from "../reducers/jobListReducer";
import errorReducer from "../reducers/errorReducer";

const rootReducer = combineReducers({
  favorite: favReducer,
  jobList: jobListReducer,
  errorState: errorReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
