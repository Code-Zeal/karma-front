import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

import SideBar from "./SideBar";
import { FeedbackHome } from "./FeedbackHome";
import PaymentMethods from "./PaymentMethods";
import OffersAndNews from "./OffersAndNews";

export default function Profile() {
  const nameUrl = window.location.pathname;
  console.log(nameUrl);
  const [info, setInfo] = useState("");
  useEffect(() => {
    switch (nameUrl) {
      case "/profile/orders":
        setInfo("orders");
        break;
      case "/profile/data":
        setInfo("data");
        break;
      default: {
        return;
      }
    }
  }, [nameUrl]);

  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className="container mx-auto mt-12">
          <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
              <div className="text-sm font-medium font-mono text-center text-gray-500 truncate">
                Para ver tus compras puedes ir a
              </div>
              <div className="mt-1 text-3xl font-mono font-normal text-center text-gray-900">
                ORDENES 🧾
              </div>
            </div>
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
              <div className="text-sm font-medium font-mono text-center text-gray-500 truncate">
                Puedes modificar tus datos en la sección de
              </div>
              <div className="mt-1 text-3xl font-normal font-mono text-center text-gray-900">
                DATOS 📝
              </div>
            </div>
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
              <div className="text-sm font-medium font-mono text-center text-gray-500 truncate">
                Y no te olvides de siempre revisar nuestras últimas
              </div>
              <div className="mt-1 text-3xl font-normal font-mono text-center text-gray-900">
                OFERTAS 👀
              </div>
            </div>
          </div>
          <FeedbackHome></FeedbackHome>
          <OffersAndNews></OffersAndNews>
          <PaymentMethods></PaymentMethods>
        </div>
      </div>
      <Footer />
    </div>
  );
}
