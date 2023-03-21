import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {} from "./Actions";

const persistConfig = {
  key: "root",
  storage,
};

const initialState = {
  estadoInicial: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // defecto
    default:
      return {
        ...state,
      };
  }
};

const rootReducer = combineReducers({
  user: userReducer,
});
export default persistReducer(persistConfig, rootReducer);
