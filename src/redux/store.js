import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import contactReducer from "./slice"; 


const persistConfig = {
  key: "root",
  storage,
  blacklist: ["contacts"],
};

const persistedReducer = persistReducer(persistConfig, contactReducer);

const store = configureStore({
  reducer: {
    contacts: persistedReducer, 
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
