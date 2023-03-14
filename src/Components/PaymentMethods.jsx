export const PaymentMethods = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg  mb-6 font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none ">
              Metodos de pago
              <br className="hidden md:block " />
              <div className="py-2 pr-2 inline-block">disponibles en </div>
              <span className="relative px-1 ">
                <div className="absolute inset-x-0 bottom-0 h-3 transform py-5  -skew-x-12 bg-stone-900" />
                <span className="relative inline-block text-zinc-50">
                  KARMA
                </span>
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              ¡Bienvenido/a! En nuestra tienda en línea, aceptamos dos
              excelentes métodos de pago: PayPal y Mercado Pago. Aquí te
              contamos un poco más sobre cada uno de ellos.
            </p>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
            <div className="bg-white border-l-4 shadow-sm border-[#a0c7d9]">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-bold leading-5 text-2xl py-2">
                  Mercado Pago
                </h6>
                <p className="text-sm text-gray-900">
                  Mercado Pago es una plataforma de pagos en línea muy popular
                  en América Latina. Al igual que PayPal, Mercado Pago es seguro
                  y fácil de usar. También ofrece múltiples opciones de pago,
                  como tarjetas de crédito, débito y transferencias bancarias,
                  así como pagos en efectivo a través de puntos de venta
                  autorizados. Además, Mercado Pago ofrece una garantía de
                  compra que protege tus transacciones en línea.
                </p>
              </div>
            </div>
            <div className="bg-white border-l-4 shadow-sm border-[#a0c7d9]">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-bold leading-5 text-2xl py-2">
                  Paypal
                </h6>
                <p className="text-sm text-gray-900">
                  PayPal es uno de los sistemas de pago más populares y seguros
                  del mundo. Cuenta con millones de usuarios y ofrece una
                  plataforma confiable y fácil de usar. Puedes vincular tu
                  cuenta de PayPal con tu tarjeta de crédito o débito, o incluso
                  con tu cuenta bancaria, lo que te permite hacer compras de
                  forma segura y rápida. Además, PayPal ofrece una garantía al
                  comprador que protege tus compras en caso de que algo no salga
                  como esperabas.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="object-fill w-full h-64 rounded-lg shadow-2xl sm:h-96"
            src="https://http2.mlstatic.com/D_NQ_NP_991501-MLA45229459134_032021-OO.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default PaymentMethods;
