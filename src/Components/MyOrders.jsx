import React from "react";
import BottomNavigation from "./BottomNavigation";
import Footer from "./Footer";
import NavBar from "./NavBar";
import OrderCard from "./OrderCard";

const arr = [1, 2, 3, 4, 5];

export default function MyOrders() {
  return (
    <section>
      <NavBar></NavBar>
      <BottomNavigation></BottomNavigation>
      {arr.map((el) => {
        return <OrderCard></OrderCard>;
      })}
      <Footer></Footer>
    </section>
  );
}
