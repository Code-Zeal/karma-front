import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Footer from "./Footer";

export default function AllOrderHistory() {
  const [allOrders, setAllOrders] = useState(null);
  console.log(allOrders);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/order/getAllOrder");
      const data = res.data;
      setAllOrders(data);
    }
    fetchData();
  }, []);

  async function updateOrderStatus(orderId, newStatus) {
    await axios.put("/order/updateOrder", {
      id: orderId,
      orderStatus: newStatus,
    });

    setAllOrders((prevOrders) => {
      return prevOrders.map((order) => {
        if (order.id === orderId) {
          return {
            ...order,
            orderStatus: newStatus,
          };
        } else {
          return order;
        }
      });
    });
  }

  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className="container mx-auto mt-12">
          <div className="w-12/12 h-[825px] items-center border border-neutral-900 justify-center gap-4 h-800 overflow-auto overflow-y-scroll">
            {allOrders &&
              allOrders.map((order) => {
                console.log(order);
                const purchaseDate = new Date(order.datePurchase);
                const formattedDate = purchaseDate.toLocaleDateString("es-MX");

                return (
                  <div
                    key={order.id}
                    class="border border-neutral-900 shadow rounded-sm p-4 max-w-xl m-8 mx-auto w-full"
                  >
                    <h2 class="text-2xl font-bold mb-4">Orden N° {order.id}</h2>
                    <p class="text-gray-700">ID del usuario: {order.UserId}</p>
                    <p class="text-gray-700">
                      Fecha de compra: {formattedDate}
                    </p>
                    <p class="text-gray-700">Estado: {order.orderStatus}</p>
                    {order.orderStatus === "Orden Pagada" && (
                      <button
                        className="bg-neutral-900 text-white border border-neutral-900 hover:bg-white hover:text-neutral-900 p-1 mt-3 rounded-sm"
                        onClick={() => updateOrderStatus(order.id, "Enviando")}
                      >
                        Marcar como enviado
                      </button>
                    )}
                    {order.orderStatus === "Enviando" && (
                      <button
                        className="bg-neutral-900 text-white border border-neutral-900 hover:bg-white hover:text-neutral-900 p-1 mt-3 rounded-sm"
                        onClick={() => updateOrderStatus(order.id, "Entregado")}
                      >
                        Marcar como entregado
                      </button>
                    )}
                    <h3 class="text-lg font-medium mt-4 mb-2">Pedido:</h3>
                    <div class="grid grid-cols-2 gap-4">
                      {order.orderData.ShoppingCarts.map((cart) => (
                        <div
                          key={cart.id}
                          class="border border-neutral-400 shadow rounded-sm p-2"
                        >
                          <p class="text-gray-700 mb-2">
                            ID del producto: {cart.ProductId}
                          </p>
                          <p class="text-gray-700">Cantidad: {cart.amount}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
