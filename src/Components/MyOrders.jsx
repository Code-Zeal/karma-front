import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import OrderCard from "./OrderCard";
import SideBar from "./SideBar";

const arr = [1, 2];

export default function MyOrders() {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className="container mx-auto mt-12">
          {arr.map((el) => {
            return <OrderCard></OrderCard>;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
