import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import authReducer from "./auth/authReducer";
import userReducer from "./user/userReducer";
import brandReducer from "./brand/brandReducer";
import gearReducer from "./gear/gearReducer";
import setReducer from "./set/setReducer";
import listReducer from "./list/listReducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
  // whitelist: ['auth']
}

const rootReducer = combineReducers({
  auth: authReducer,
  brand: brandReducer,
  user: userReducer,
  gear: gearReducer,
  set: setReducer,
  list: listReducer
});

export default persistReducer(persistConfig, rootReducer);