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
  productXSuCategory: [
    {
      id: 1,
      model: "model",
      brand: "brand",
      description: "description",
      price: 40,
      image: "imagen",
      Laptop: {
        id: 1,
        name: "Laptop",
        ramMemory: "ramMemory",
        internalMemory: "internalMemory",
        processor: "processor",
        ProductId: 1,
      },
    },
    {
      id: 2,
      model: "model",
      brand: "brand",
      description: "description",
      price: 20,
      image: "imagen",
      Tablet: {
        id: 1,
        name: "Tablet1",
        ramMemory: "ramMemory",
        internalMemory: "internalMemory",
        color: "rojo",
        mainCamera: "mainCamera",
        screenSize: "screenSize",
        ProductId: 2,
      },
    },
    {
      id: 3,
      model: "model",
      brand: "brand",
      description: "description",
      price: 20,
      image: "imagen",
      Tablet: {
        id: 2,
        name: "Tablet",
        ramMemory: "ramMemory",
        internalMemory: "internalMemory",
        color: "rojo",
        mainCamera: "mainCamera",
        screenSize: "screenSize",
        ProductId: 3,
      },
    },
    {
      id: 4,
      model: "model",
      brand: "brand",
      description: "description",
      price: 20,
      image: "imagen",
      Tablet: {
        id: 3,
        name: "Tablet",
        ramMemory: "ramMemory",
        internalMemory: "internalMemory",
        color: "rojo",
        mainCamera: "mainCamera",
        screenSize: "screenSize",
        ProductId: 4,
      },
    },
    {
      id: 5,
      model: "model",
      brand: "brand",
      description: "description",
      price: 40,
      image: "imagen",
      Laptop: {
        id: 2,
        name: "Laptop",
        ramMemory: "ramMemory",
        internalMemory: "internalMemory",
        processor: "processor",
        ProductId: 5,
      },
    },
    {
      id: 6,
      model: "model",
      brand: "brand",
      description: "description",
      price: 40,
      image: "imagen",
      Laptop: {
        id: 3,
        name: "Laptop",
        ramMemory: "ramMemory",
        internalMemory: "internalMemory",
        processor: "processor",
        ProductId: 6,
      },
    },
  ],
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
