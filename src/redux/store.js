import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contactReducer from "./slice";
import thunkMiddleware from "redux-thunk"; 

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  middleware: [...getDefaultMiddleware(), thunkMiddleware], 
  devTools: true,
});

export default store;
