import axios from "axios";

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
