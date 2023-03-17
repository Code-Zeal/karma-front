import React from "react";
import { useDispatch } from "react-redux";

import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const dispatch = useDispatch();

  const { logout } = useAuth0();
  const result = () => {
    logout({ returnTo: window.location.origin });
  };
  return (
    <div>
      <button onClick={result}>Cerrar Sesion</button>
    </div>
  );
};

export default Logout;
