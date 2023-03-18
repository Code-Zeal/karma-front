import React from "react";

export default function Orders() {
  return (
    <section className="flex items-center justify-end">
      <div className="w-9/12 flex justify-evenly ">
        <div className="flex flex-col">
          <select name="" id="">
            <option value="" selected disabled="true">
              Precio
            </option>
            <option value="">Mas Barato</option>
            <option value="">Mas Caro</option>
          </select>
        </div>
        <div className="flex flex-col">
          <select name="" id="">
            <option value="" selected disabled="true">
              Alfabetico
            </option>
            <option value="">A-z</option>
            <option value="">z-A</option>
          </select>
        </div>
      </div>
    </section>
  );
}
