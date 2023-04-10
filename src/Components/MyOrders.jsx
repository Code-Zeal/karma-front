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
  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className="container mx-auto mt-12">
          <>
            {order &&
              order.Orders.map((el) => {
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
              })}
          </>
        </div>
      </div>
      <Footer />
    </div>
  );
}
