import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notify = () =>
  toast.success(`El producto se agregó al carrito`, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
const errorNotify = () =>
  toast.error(
    "Ha ocurrido un error al agregar el producto al carrito, intente de nuevo",
    {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    }
  );
export const POST_REGISTER = "POST_REGISTER";
export const POST_COMMENTS_RATING = "POST_COMMENTS_RATING";

export const ADD_ITEMS = "ADD_ITEMS";
export const REMOVE_ITEMS = "REMOVE_ITEMS";
export const DELETE_ITEMS = "DELETE_ITEMS";
export const CREATE_ITEMS = "CREATE_ITEMS";
export const POST_COMMENTS_PAGE = "POST_COMMENTS_PAGE";

export const putRegister = (fromRegister, token) => async (dispatch) => {
  const response = await axios.put(
    "http://localhost:4000/setInfo",
    fromRegister,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  dispatch({
    type: "HOLA",
    // DATA SERIA POR EL EXIOS
    payload: response.data,
  });
};

export function getProductsByInput(searchValue) {
  return async function (dispatch) {
    try {
      const res = await axios.get(
        `http://localhost:4000/product/getProductsByInput?input=${searchValue}`
      );
      return dispatch({
        type: "GET_PRODUCTS_BY_INPUT",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const postRegisterAuth0 = (fromRegister) => async (dispatch) => {
  console.log(fromRegister);
  const response = await axios.post(
    "http://localhost:4000/user/userAuth0Register",
    fromRegister
  );

  dispatch({
    type: POST_REGISTER,
    // DATA SERIA POR EL EXIOS
    payload: response.data,
  });
};

export const postCommentsAndRatings =
  (fromCommentsAndRatings) => async (dispatch) => {
    console.log(fromCommentsAndRatings);
    const response = await axios.post(
      "http://localhost:4000/commentsRaiting/createCommentsRaiting",
      fromCommentsAndRatings
    );

    dispatch({
      type: POST_COMMENTS_RATING,
      // DATA SERIA POR EL EXIOS
      payload: response.data,
    });
  };

export const createAddToShoppingCart = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      `http://localhost:4000/shoppingCart/createShoppingCart`,
      data
    );
    notify();
    dispatch({
      type: CREATE_ITEMS,
      // DATA SERIA POR EL EXIOS
      payload: response.data,
    });
  } catch (error) {
    errorNotify();
  }
};

export const addItemsToShoppingCart = (data) => async (dispatch) => {
  console.log(data);
  const response = await axios.put(
    "http://localhost:4000/shoppingCart/addItemsToShoppingCartByProduct",
    data
  );

  dispatch({
    type: ADD_ITEMS,
    // DATA SERIA POR EL EXIOS
    payload: response.data,
  });
};

export const removeItemsToShoppingCart = (data) => async (dispatch) => {
  console.log(data);
  const response = await axios.put(
    "http://localhost:4000/shoppingCart/removeItemsToShoppingCartByProduct",
    data
  );

  dispatch({
    type: REMOVE_ITEMS,
    // DATA SERIA POR EL EXIOS
    payload: response.data,
  });
};
export const toShoppingCartDelete = (id) => async (dispatch) => {
  console.log(id);
  const response = await axios.delete(
    `http://localhost:4000/shoppingCart/deleteShoppingCart?id=${id}`
  );

  dispatch({
    type: DELETE_ITEMS,
    // DATA SERIA POR EL EXIOS
    payload: response.data,
  });
};
export const postCommentsPage = (fromCommentsPage) => async (dispatch) => {
  console.log(fromCommentsPage);
  const response = await axios.post(
    "http://localhost:4000/commentsRaiting/createCommentsRaiting",
    fromCommentsPage
  );

  dispatch({
    type: POST_COMMENTS_PAGE,
    // DATA SERIA POR EL EXIOS
    payload: response.data,
  });
};
