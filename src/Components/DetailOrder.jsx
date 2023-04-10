import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CommentsAndRatings from "./CommentsAndRatings";

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
    <section>
      <h1>
        Este es el listado de los productos comprados de acuerdo a tu pedido :
        {id}
      </h1>
      <ul>
        {detailOrder ? (
          <>
            {detailOrder.ShoppingCarts.map((shopping) => {
              return (
                <li class="flex items-center gap-4">
                  <img
                    src={shopping.Product.images[0]}
                    alt=""
                    class="h-16 w-16 rounded object-cover"
                  />

                  <div>
                    <h3 class="text-sm text-gray-900">
                      {shopping.Product.model}
                    </h3>
                  </div>

                  <div className="bg-gray-800 py-6 rounded-lg mx-2 text-md font-bold">
                    <h3 className="mx-2">
                      Dejanos tu opinion sobre el producto
                    </h3>
                    <button
                      onClick={handleOpenPopup}
                      className="bg-white text-[#171717] px-3 py-1 rounded-lg font-bold mt-4"
                    >
                      Dejar Valoración
                    </button>
                    {popupOpen && (
                      <CommentsAndRatings
                        productId={shopping.ProductId}
                        onClose={handleClosePopup}
                      />
                    )}
                  </div>
                  <div class="flex flex-1 items-center justify-end gap-8">
                    <label>{shopping.amount}</label>
                  </div>

                  <div class="flex flex-1 items-center justify-end gap-8">
                    <label>{shopping.pricePerUnit}</label>
                  </div>
                </li>
              );
            })}

            <div class="flex justify-between !text-base font-medium">
              <dt>Total</dt>
              <dd>{totalPrice}</dd>
            </div>
          </>
        ) : (
          <></>
        )}
      </ul>
    </section>
  );
}
