import React from "react";
import BottomNavigation from "./BottomNavigation";
import Footer from "./Footer";
import NavBar from "./NavBar";
import OrderCard from "./OrderCard";

export default function MyOrders() {
  return (
    <section>
      <NavBar></NavBar>
      <BottomNavigation></BottomNavigation>
      <OrderCard></OrderCard>
      <Footer></Footer>
    </section>
  );
}
