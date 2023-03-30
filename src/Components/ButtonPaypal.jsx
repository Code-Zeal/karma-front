import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";

const PaymentPage = () => {
  const [redirectUrl, setRedirectUrl] = useState("");

  useEffect(() => {
    axios
      .post("http://localhost:4000/api/paypal", { price: 10, currency: "USD" })
      .then((response) => {
        setRedirectUrl(response.data.redirectUrl);
      });
  }, []);

  return (
    <div>
      <h1>Realizar Pago con PayPal</h1>
      {redirectUrl ? (
        <PayPalButton
          amount="10.00"
          currency="USD"
          onSuccess={(details, data) => {
            axios
              .post("/api/paypal/success", { paymentId: data.orderID })
              .then(() => {
                // Redirigir al usuario a una página de éxito o mostrar un mensaje de éxito en esta página
              });
          }}
          onError={(error) => {
            console.log(error);
          }}
        />
      ) : (
        <div>Cargando...</div>
      )}
    </div>
  );
};

ReactDOM.render(<PaymentPage />, document.getElementById("root"));
export default PaymentPage;
