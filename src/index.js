import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import store from "./Redux/Store";

import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./Redux/Store";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-cz6i21an2opri7kv.us.auth0.com"
    clientId="5231HWOxNHttHOdY6roeBgciARNTyZyU"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "KARMA 2.0",
      scope: "openid profile email admin   ",
    }}
  >
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
