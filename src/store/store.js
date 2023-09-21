import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";
import rootReducer from "../reducer";

const persistConfig = {
  key: "shopbits:root",
  storage: storage,
  transforms: [
    encryptTransform({
      secretKey: "HDHH33xxG%687sAJHJ@^&^2SS",
      onError: function (error) {
        // Handle the error.
      },
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export const useAppDispatch = () => useDispatch();
