import { combineReducers, configureStore } from "@reduxjs/toolkit";

import addCompanyReducer from "../reducers/addCompanyReducer";
import jobsReducer from "../reducers/jobsReducer";
import searchReducer from "../reducers/searchReducer";
import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: "$1F$colomn",
      onError: function (error) {
        console.log(error);
      },
    }),
  ],
};

const bigReducer = combineReducers({
  jobs: jobsReducer,
  favjob: addCompanyReducer,
  value: searchReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
