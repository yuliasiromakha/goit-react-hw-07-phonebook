import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./slice";

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  devTools: true,
});

export default store;
