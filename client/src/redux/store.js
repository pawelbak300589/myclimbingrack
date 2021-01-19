import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from "redux-thunk";

import rootReducer from './rootReducer';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'deployment') {
  middlewares.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export const persistor = persistStore(store);

export default { store, persistor };