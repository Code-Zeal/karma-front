import React, { useEffect, useState } from "react";
import FiltersAndCards from "./FiltersAndCards";
import Footer from "./Footer";
import NavBar from "./NavBar";
import axios from "axios";

export default function Shop() {
  const nameUrl = window.location.pathname;
  const [info, setInfo] = useState("");
  console.log(nameUrl);
  useEffect(() => {
    switch (nameUrl) {
      case "/shop/CellPhone":
        const cellPhoneProducts = async () => {
          const res = await axios.get(
            "http://localhost:4000/product/getProductsByCategory?category=CellPhone"
          );
          setInfo(res.data);
        };
        cellPhoneProducts();
        return;
      case "/shop/Laptop":
        const laptopProducts = async () => {
          const res = await axios.get(
            "http://localhost:4000/product/getProductsByCategory?category=Laptop"
          );
          setInfo(res.data);
        };
        laptopProducts();
        return;
      case "/shop/Tablet":
        const tabletProducts = async () => {
          const res = await axios.get(
            "http://localhost:4000/product/getProductsByCategory?category=Tablet"
          );
          setInfo(res.data);
        };
        tabletProducts();
        return;
      case "/shop/TV":
        const TVProducts = async () => {
          const res = await axios.get(
            "http://localhost:4000/product/getProductsByCategory?category=Television"
          );
          setInfo(res.data);
        };
        TVProducts();
        return;

      default: {
        return;
      }
    }
  }, [nameUrl]);

  return (
    <section>
      <NavBar></NavBar>
      <FiltersAndCards info={info && info}></FiltersAndCards>
      <Footer></Footer>
    </section>
  );
}
