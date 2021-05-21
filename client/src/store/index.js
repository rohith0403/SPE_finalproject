import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web




function confStore(){
  const persistConfig = {
    key: "root",
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, userReducer);
 const store = configureStore({
   reducer: {
     userDetails: persistedReducer,
   },
 });

 const persistor = persistStore(store);

  return { store, persistor };
};

export default confStore;