import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

// import reducers
import appReducers from "./slices/app";

// slices
const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  // persist data
  // whitelist: [],
  //  when we donot want to persist data
  // blacklist: [appReducers],
};

const rootReducer = combineReducers({
  app: appReducers,
});

export { rootPersistConfig, rootReducer };
