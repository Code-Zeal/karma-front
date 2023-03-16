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
