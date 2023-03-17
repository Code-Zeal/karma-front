import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function DetailsCard() {
  const [cantidad, setCantidad] = useState(1);
  const precioUnitario = 11999;
  const precioTotal = cantidad * precioUnitario;

  function handleCantidadChange(event) {
    setCantidad(event.target.value);
  }

  function handleIncrement() {
    setCantidad(cantidad + 1);
  }

  function handleDecrement() {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  }

  return (
    <div className="flex flex-row">
      <div className="w-1/5 ">
        <span>Categoria</span>
        <img
          className=" "
          src="https://falabella.scene7.com/is/image/Falabella/15083842_1?wid=1500&hei=1500&qlt=70"
          alt=""
        />
      </div>

      <div className="flex flex-col">
        <h2>Almohada Cic Microfibra King</h2>

        {/* area de precio */}
        <div>
          <span>Precio unitario: $ {precioUnitario}</span>
        </div>
        <div>
          <label>
            Cantidad:
            <button onClick={handleIncrement}>+</button>
            <input
              type="number"
              min="1"
              value={cantidad}
              onChange={handleCantidadChange}
            />
          </label>
          <button onClick={handleDecrement}>-</button>
          <br />

          <span>Precio total: $ {precioTotal}</span>
        </div>
        <h2>Agregar al carrito</h2>
      </div>
    </div>
  );
}
