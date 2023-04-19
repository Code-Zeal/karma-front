import { Button, Tooltip } from "flowbite-react";
import { Link } from "react-router-dom";
export const PaymentMethods = () => {
  return (
    <div className="bg-gray-100 py-10 mx-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="mr-8">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-center md:text-left">
              Métodos de pago disponibles en{" "}
              <span className="text-neutral-900">KARMA</span>
            </h2>
            <p className="mt-4 text-lg text-gray-700 text-center md:text-left">
              En nuestra tienda en línea, aceptamos dos excelentes métodos de
              pago: PayPal y Mercado Pago. Aquí te contamos un poco más sobre
              cada uno de ellos.
            </p>
          </div>
          <div className="mt-10 md:mt-0 flex flex-col md:flex-row gap-8">
            <div className="bg-white border-l-4 border-neutral-700 shadow-md rounded-lg px-6 py-8">
              <a
                href="https://www.mercadopago.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Tooltip
                  placement="top"
                  content="Haz clic en este botón para ser redirigido a Mercado Pago"
                >
                  <h6 className="text-xl md:text-2xl font-bold leading-tight text-neutral-700 mb-4 hover:underline">
                    Mercado Pago
                  </h6>
                </Tooltip>
              </a>
              <p className="text-gray-700 text-lg">
                Mercado Pago es una plataforma de pagos en línea muy popular en
                América Latina. Al igual que PayPal, Mercado Pago es seguro y
                fácil de usar. También ofrece múltiples opciones de pago, como
                tarjetas de crédito, débito y transferencias bancarias, así como
                pagos en efectivo a través de puntos de venta autorizados.
                Además, Mercado Pago ofrece una garantía de compra que protege
                tus transacciones en línea.
              </p>
            </div>
            <div className="bg-white border-l-4 border-neutral-700 shadow-md rounded-lg px-6 py-8">
              <a
                href="https://www.paypal.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Tooltip
                  placement="top"
                  content="Haz clic en este botón para ser redirigido a Paypal"
                >
                  <h6 className="text-xl md:text-2xl font-bold leading-tight text-neutral-600 mb-4 hover:underline">
                    Paypal
                  </h6>
                </Tooltip>
              </a>
              <p className="text-gray-700 text-lg">
                PayPal es uno de los sistemas de pago más populares y seguros
                del mundo. Cuenta con millones de usuarios y ofrece una
                plataforma confiable y fácil de usar. Puedes vincular tu cuenta
                de PayPal con tu tarjeta de crédito o débito, o incluso con tu
                cuenta bancaria, lo que te permite hacer compras de forma segura
                y rápida. Además, PayPal ofrece una garantía al comprador que
                protege tus compras en caso de que algo no salga como esperabas.
              </p>
            </div>
          </div>
          <div className="mt-10 md:hidden">
            <img
              className="object-fill w-full h-64 rounded-lg shadow-2xl sm:h-96"
              src="https://res.cloudinary.com/dx2me9gqm/image/upload/v1678830141/D_NQ_NP_991501-MLA45229459134_032021-OO_pxxwsy.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaymentMethods;
