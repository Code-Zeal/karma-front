import { useEffect } from "react";

// In this example i'm using React
// Other way to use this is using the script tag in the html file
// and then use the global variable window.MercadoPago

// Then some document.querySelector('.cho-container') to get the element
// and then use the mp.checkout() method

export default function MPButton(props) {
  useEffect(() => {
    const fetchCheckout = async () => {
      const res = await fetch("http://localhost:4000/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({
        //   user,
        //   turno,
        // }),
      });
      const data = await res.json();
      const mp = new window.MercadoPago(
        "TEST-e2589318-ca7d-4703-b79d-090b64ee3c02",
        {
          locale: "es-CO",
        }
      );

      // The ".checkout" is the function that creates the connection between the button and the platform
      mp.checkout({
        preference: {
          id: data.response.body.id,
        },
        render: {
          container: ".cho-container",
          label: "Pagar",
        },
      });
    };
    fetchCheckout();
  }, []);

  return (
    <>
      <h3>hola</h3>
      <div className="cho-container"></div>
    </>
  );
}
