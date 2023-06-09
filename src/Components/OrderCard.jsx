import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function OrderCard(props) {
  const dateString = new Date(props.orderDate);
  const dateObject = new Date(dateString);

  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();

  const [popupOpen, setPopupOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };
  let total = 0;

  useEffect(() => {
    async function fetchData(id) {
      const responseOrder = await axios.get(`/order/getOrder?id=${id}`);
      const dataOrder = responseOrder.data;
      console.log(dataOrder);
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
      console.log(dataOrder);
    }
    fetchData(props.idOrder);
  }, [props.idOrder]);

  return (
    <div class="border mx-auto border-gray-300 p-4 rounded-lg shadow-lg m-4 max-w-md flex flex-row">
      <div class="flex-1">
        <p class="text-lg font-bold mb-2">Número de orden #{props.idOrder}</p>
        <p class="text-gray-700 text-sm mb-2">
          Fecha de orden{" "}
          <span className="font-bold">{`${props.orderDate}`} </span>
        </p>
        <p class="text-gray-700 text-sm mb-2">
          Pago de orden <span className="font-bold">$ {totalPrice}</span>
        </p>
        <p class="text-gray-700 text-sm mb-4">
          Estado de la orden{" "}
          <span className="font-bold">
            {props.orderStatus === "Orden Pagada"
              ? "Procesando"
              : props.orderStatus === "Enviando"
              ? "Enviado"
              : props.orderStatus}
          </span>
        </p>
        <div>
          <Link
            to={`/detailOrder/${props.idOrder}`}
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Ver detalles del pedido
          </Link>
        </div>
      </div>
      <div class="flex items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/679/679720.png"
          alt=""
          class="h-[128px] w-[128px]"
        />
      </div>
    </div>
  );
}
