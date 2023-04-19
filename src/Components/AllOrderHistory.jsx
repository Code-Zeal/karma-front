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
            {allOrders && allOrders.length > 0 ? (
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
              })
            ) : (
              <>
                {allOrders && allOrders.length === 0 ? (
                  <div className="flex w-full h-[700px] items-center justify-center">
                    <h3 className="text-2xl font-bold">Aún no hay ordenes</h3>
                  </div>
                ) : (
                  <div className="flex w-full h-[700px] items-center justify-center">
                    <div className="animate-spin">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100px"
                        height="100px"
                        viewBox="0 0 24 24"
                        fill="#000"
                      >
                        <path
                          d="M12 2.99988V5.99988M12 20.9999V17.9999M4.20577 16.4999L6.80385 14.9999M21 11.9999H18M16.5 19.7941L15 17.196M3 11.9999H6M7.5 4.20565L9 6.80373M7.5 19.7941L9 17.196M19.7942 16.4999L17.1962 14.9999M4.20577 7.49988L6.80385 8.99988"
                          stroke="#000000"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
