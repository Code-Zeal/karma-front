import axios from "axios";

export const POST_REGISTER = "POST_REGISTER";
export const POST_COMMENTS_RATING = "POST_COMMENTS_RATING";

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
