import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CommentsAndRatings from "./CommentsAndRatings";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Footer from "./Footer";

export default function DetailOrder(props) {
  const [popupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };
  const [detailOrder, setDetailOrder] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const { id } = useParams();
  console.log(id);
  console.log(detailOrder);
  let total = 0;

  useEffect(() => {
    async function fetchData(id) {
      const responseOrder = await axios.get(`/order/getOrder?id=${id}`);
      const dataOrder = responseOrder.data;

      setDetailOrder(dataOrder);
      dataOrder.ShoppingCarts.forEach((order) => {
        order.pricePerUnit = order.Product.price * order.amount;
        return (total += order.pricePerUnit);
      });
      setTotalPrice(total);
    }
    fetchData(id);
  }, [id, totalPrice]);
  console.log(totalPrice);

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
              Estado de tu orden:{" "}
              {detailOrder && detailOrder.orderStatus === "Orden Pagada"
                ? "Procesando"
                : detailOrder && detailOrder.orderStatus === "Enviando"
                ? "Enviado"
                : detailOrder && detailOrder.orderStatus}
            </p>
            <ul className="max-w-4xl mx-auto">
              {detailOrder ? (
                <>
                  {detailOrder.ShoppingCarts.map((shopping) => {
                    return (
                      <li className="flex items-center justify-between border-b-2 border-gray-300 py-4">
                        <img
                          className="w-16 h-16 object-contain mr-4"
                          src={shopping.Product.images[0]}
                          alt=""
                        />

                        <div className="flex flex-col justify-between w-1/2">
                          <div>
                            <h3 className="text-lg font-bold mb-2">
                              {shopping.Product.model}
                            </h3>
                            <div className="mb-2">
                              <h3 className="font-normal mb-2">
                                Déjanos tu opinión sobre el producto
                              </h3>
                              <button
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                                onClick={handleOpenPopup}
                              >
                                Dejar valoración
                              </button>
                              {popupOpen && (
                                <CommentsAndRatings
                                  productId={shopping.ProductId}
                                  onClose={handleClosePopup}
                                />
                              )}
                            </div>
                          </div>
                          <div>
                            <label className="text-gray-800">
                              Cantidad: {shopping.amount}{" "}
                            </label>
                            <label className="text-gray-800">
                              ${shopping.pricePerUnit}
                            </label>
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

                  <div className="flex justify-end mt-4">
                    <dt className="text-xl font-bold mr-4">Total:</dt>
                    <dd className="text-xl font-bold">${totalPrice}</dd>
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
