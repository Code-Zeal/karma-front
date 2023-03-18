import React from "react";
import FiltersAndCards from "./FiltersAndCards";
import Footer from "./Footer";
import Orders from "./Orders";
import NavBar from "./NavBar";

export default function Shop() {
  return (
    <section>
      <NavBar></NavBar>
      <Orders></Orders>
      <FiltersAndCards></FiltersAndCards>
      <Footer></Footer>
    </section>
  );
}
