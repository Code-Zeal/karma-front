import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CommentsAndRatings from "./CommentsAndRatings";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Footer from "./Footer";
import CommentsPage from "./CommentsPage";
import { useAuth0 } from "@auth0/auth0-react";

export default function DetailOrder(props) {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupFeedBackOpen, setPopupFeedBackOpen] = useState(false);
  const { user } = useAuth0();

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };
  const handleFeedOpenPopup = () => {
    setPopupFeedBackOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };
  const handleFeedClosePopup = () => {
    setPopupFeedBackOpen(false);
  };
  const [detailOrder, setDetailOrder] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const { id } = useParams();
  let total = 0;
  console.log(detailOrder);
  useEffect(() => {
    async function fetchData(id) {
      const responseOrder = await axios.get(`/order/getOrder?id=${id}`);
      const dataOrder = responseOrder.data;

      setDetailOrder(dataOrder);
      dataOrder.orderData.ShoppingCarts.forEach((product) => {
        if (product.Product?.ProductDiscount) {
          product.pricePerUnit =
            product.Product.price -
            (product.Product.price *
              product.Product.ProductDiscount.discountValue) /
              100;

          setTotalPrice(
            (total +=
              (product.Product.price -
                (product.Product.price *
                  product.Product.ProductDiscount.discountValue) /
                  100) *
              product.amount)
          );
        } else {
          product.pricePerUnit = product.Product.price;
          setTotalPrice((total += product.pricePerUnit * product.amount));
        }
      });
      setTotalPrice(total);
    }
    fetchData(id);
  }, [id, totalPrice]);

  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className="container mx-auto mt-12">
          <section className="bg-gray-100 py-8">
            <h1 className="text-3xl font-bold mb-4 text-center">
              Número de orden #{id}
            </h1>
            <p className="text-lg text-center">
              Estado de tu orden:
              {detailOrder && detailOrder.orderStatus === "Orden Pagada"
                ? "Procesando"
                : detailOrder && detailOrder.orderStatus === "Enviando"
                ? "Enviado"
                : detailOrder && detailOrder.orderStatus}
            </p>
            <ul className="max-w-4xl mx-auto">
              {detailOrder ? (
                <>
                  {detailOrder.orderData.ShoppingCarts.map((shopping) => {
                    console.log(shopping);
                    return (
                      <li className="flex items-center justify-between border-b-2 border-gray-300 py-4">
                        <a href={`/detail/${shopping.ProductId}`}>
                          <img
                            className="w-16 h-16 object-contain mr-4"
                            src={shopping.Product.images[0]}
                            alt=""
                          />
                        </a>

                        <div className="flex flex-col justify-between w-1/2">
                          <div>
                            <h3 className="text-lg font-bold mb-2">
                              {shopping.Product.model}
                            </h3>
                            <div className="mb-2">
                              {detailOrder &&
                              detailOrder.orderStatus === "Entregado" ? (
                                <>
                                  <h3 className="font-normal mb-2">
                                    Déjanos tu opinión sobre el producto
                                  </h3>
                                  <button
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                                    onClick={handleOpenPopup}
                                  >
                                    Dejar valoración
                                  </button>
                                </>
                              ) : (
                                <></>
                              )}

                              {popupOpen && (
                                <CommentsAndRatings
                                  productId={shopping.ProductId}
                                  onClose={handleClosePopup}
                                />
                              )}
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <label className="text-gray-800">
                              Cantidad: {shopping.amount}{" "}
                            </label>
                            <div>
                              <label className="text-gray-800">
                                ${shopping.pricePerUnit} c/u
                              </label>

                              {shopping.Product?.ProductDiscount ? (
                                <label className="text-gray-800 ml-5">
                                  {
                                    shopping.Product.ProductDiscount
                                      .discountValue
                                  }
                                  %
                                </label>
                              ) : (
                                <></>
                              )}
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="text-gray-600">
                            ${shopping.pricePerUnit}
                          </label>
                        </div>
                      </li>
                    );
                  })}
                  {popupFeedBackOpen && (
                    <CommentsPage onClose={handleFeedClosePopup} />
                  )}

                  <div
                    className={
                      detailOrder && detailOrder.orderStatus !== "Entregado"
                        ? "flex w-full justify-between   items-center"
                        : "flex w-full justify-end   items-center"
                    }
                  >
                    {detailOrder && detailOrder.orderStatus !== "Entregado" ? (
                      <div className="flex flex-col border border-neutral-900 p-2">
                        <p className="w-[500px] font-thin">
                          Entendemos que a veces pueden surgir problemas con el
                          envío de su pedido. Si por alguna razón no ha recibido
                          su pedido en el plazo esperado o si ha recibido un
                          producto dañado o incorrecto, por favor, no dude en
                          ponerse en contacto con nosotros.
                        </p>
                        <button
                          onClick={handleFeedOpenPopup}
                          className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-slate-900 hover:bg-slate-600 focus:shadow-outline focus:outline-none my-2"
                        >
                          Dejanos tu valoración
                          <span className="ml-1 -mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30px"
                              height="30px"
                              viewBox="0 0 1024 1024"
                              class="icon"
                              version="1.1"
                            >
                              <path
                                d="M415.808 755.2L512 851.392 608.192 755.2H883.2V204.8H704V128h256v704h-320l-128 128-128-128H64V128h256v76.8H140.8v550.4h275.008zM473.6 64h76.8v448H473.6V64z m0 512h76.8v76.8H473.6V576z"
                                fill="#FFFFFF"
                              />
                            </svg>
                          </span>
                        </button>
                        <a
                          href="https://wa.me/+584127822655"
                          className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-slate-900 hover:bg-slate-600 focus:shadow-outline focus:outline-none my-2"
                        >
                          WhatsApp
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            width="48px"
                            height="48px"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                          >
                            <path
                              fill="#fff"
                              d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                            />
                            <path
                              fill="#fff"
                              d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                            />
                            <path
                              fill="#cfd8dc"
                              d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                            />
                            <path
                              fill="#40c351"
                              d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                            />
                            <path
                              fill="#fff"
                              fill-rule="evenodd"
                              d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>
                    ) : (
                      <></>
                    )}
                    <div className="flex justify-end mt-4">
                      <dt className="text-xl font-bold mr-4">Total:</dt>
                      <dd className="text-xl font-bold">${totalPrice}</dd>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
