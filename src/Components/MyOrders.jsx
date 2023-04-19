import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

import OrderCard from "./OrderCard";
import SideBar from "./SideBar";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

const arr = [1, 2];

export default function MyOrders() {
  const [order, setOrder] = useState(null);

  console.log(order);

  const { user } = useAuth0();
  const dataUser = user?.sub;

  useEffect(() => {
    async function fetchData(id) {
      const responseIdOder = await axios.get(
        `/user/getOrdersByUserId?id=${id}`
      );
      const data = responseIdOder.data;
      setOrder(data);
    }
    fetchData(dataUser);
  }, [dataUser]);
  console.log(order);
  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className="container mx-auto mt-12">
          <div className="w-12/12 h-[825px] items-center border border-neutral-900 justify-center gap-4 h-800 overflow-auto overflow-y-scroll">
            {order && order.Orders.length > 0 ? (
              order.Orders.map((el) => {
                console.log(el);
                if (
                  el.orderStatus !== "Orden Creada" &&
                  el.orderStatus !== "Procesando Orden"
                ) {
                  return (
                    <OrderCard
                      idOrder={el.id}
                      orderDate={el.datePurchase}
                      orderStatus={el.orderStatus}
                    />
                  );
                } else {
                  return <></>;
                }
              })
            ) : (
              <>
                {order && order.Orders.length === 0 ? (
                  <div className="flex w-full h-[700px] items-center justify-center">
                    <h3 className="text-2xl font-bold">
                      Aun no tienes ordenes, cuando realices alguna compra aquí
                      podras ver el progreso de tu pedido
                    </h3>
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
