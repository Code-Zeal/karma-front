import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="mt-12 flex justify-center text-xl  bg-[white] w-48 h-12 rounded-2xl border-2 font-bold">
      <button className="text-[black] " onClick={() => loginWithRedirect()}>
        INGRESAR
      </button>
    </div>
  );
};

export default Login;
