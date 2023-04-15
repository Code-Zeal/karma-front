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
          <>
            {order && order.Orders.length > 0 ? (
              order.Orders.map((el) => {
                console.log(order);
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
              <div className="flex w-full h-[700px] items-center justify-center">
                <h3 className="text-2xl font-bold">Aun no tienes ordenes :(</h3>
              </div>
            )}
          </>
        </div>
      </div>
      <Footer />
    </div>
  );
}
