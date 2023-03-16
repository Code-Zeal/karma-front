import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userReducer } from "./Reducer";
import thunkMiddleware from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const pReducer = persistReducer(persistConfig, userReducer);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  pReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

export const persistor = persistStore(store);

export default store;
