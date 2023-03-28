import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { POST_REGISTER, POST_COMMENTS_RATING } from "./Actions";

const persistConfig = {
  key: "root",
  storage,
};

const initialState = {
  estadoInicial: [],
  searchedProducts: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // defecto
    case "GET_PRODUCTS_BY_INPUT":
      return {
        ...state,
        searchedProducts: action.payload,
      };

    case POST_REGISTER:
      return {
        ...state,
      };
    case POST_COMMENTS_RATING:
      return {
        ...state,
      };

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
