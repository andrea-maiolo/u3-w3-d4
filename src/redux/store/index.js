import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import mainReducer from "../reducers";
import favReducer from "../reducers/favReducer";

const rootReducer = combineReducers({
  favorite: favReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
