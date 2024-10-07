import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";


import alertReducer from "./alert.reducer";
import errorReducer from "./error.reducer";
import loadingReducer from "./loading.reducer";
import ThemeOptions from "./themeoptions.reducer"

const alertPersistConfig = {
  key: "alert",
  storage: storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  alert: persistReducer(alertPersistConfig, alertReducer),
  error: errorReducer,
  loading: loadingReducer,
  ThemeOptions: ThemeOptions
});

export default rootReducer;
