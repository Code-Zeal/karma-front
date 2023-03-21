import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

import { useEffect, useState } from "react";
import NavBar from "./NavBar";

export default function DetailsCard() {
  const { id } = useParams();
  // el id del Producto para hacer la request para los detalles del producto
  const [detailProduct, setDetailProduct] = useState(null);

  // useEffect(() => {
  //   async function fetchData(id) {
  //     const response = await axios.get(
  //       `http://localhost:4000/product/getProduct?id=${id}`
  //     );
  //     const data = response.data;
  //     setDetailProduct(data);
  //   }
  //   fetchData(id);
  // }, []);

  const [cantidad, setCantidad] = useState(1);
  const precioUnitario = detailProduct.price;
  const precioTotal = cantidad * precioUnitario;
  //   console.log(productId);

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
    <>
      <section className="flex flex-row">
        <NavBar></NavBar>
        <div className="w-1/5 ">
          <span>Categoria</span>
          <img className=" " src={detailProduct.image} alt="" />
        </div>

        <div className="flex flex-col">
          {detailProduct.Laptop ? (
            <h5>{`${detailProduct.brand} ${detailProduct.model} ${detailProduct.Laptop.name}`}</h5>
          ) : (
            <></>
          )}
          {detailProduct.Tablet ? (
            <h5>{`${detailProduct.brand} ${detailProduct.model} ${detailProduct.Tablet.name}`}</h5>
          ) : (
            <></>
          )}
          {/* {detailProduct.Celulares ? (
          <h5>{`${detailProduct.brand} ${detailProduct.model} ${detailProduct.celulares.name}`}</h5>
        ) : (
          <></>
        )}
        {detailProduct.Tv ? (
          <h5>{`${detailProduct.brand} ${detailProduct.model} ${detailProduct.tv.name}`}</h5>
        ) : (
          <></>
        )} */}

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
      </section>

      <section>
        <div>
          {detailProduct.Laptop ? <p>{detailProduct.description}</p> : <></>}
          {detailProduct.Tablet ? (
            <p>{detailProduct.Tablet.description}</p>
          ) : (
            <></>
          )}
        </div>

        <div>
          <table>
            <thead>
              <tr>
                <th>Propiedad</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Modelo</td>
                {detailProduct.Laptop ? <td>{detailProduct.model}</td> : <></>}
                {detailProduct.Tablet ? <td>{detailProduct.model}</td> : <></>}
                {detailProduct.CellPhone ? (
                  <td>{detailProduct.model}</td>
                ) : (
                  <></>
                )}
                {detailProduct.Television ? (
                  <td>{detailProduct.model}</td>
                ) : (
                  <></>
                )}
              </tr>
              <tr>
                <td>Marca</td>
                {detailProduct.Laptop ? <td>{detailProduct.brand}</td> : <></>}

                {detailProduct.Tablet ? <td>{detailProduct.brand}</td> : <></>}

                {detailProduct.CellPhone ? (
                  <td>{detailProduct.brand}</td>
                ) : (
                  <></>
                )}

                {detailProduct.Television ? (
                  <td>{detailProduct.brand}</td>
                ) : (
                  <></>
                )}
              </tr>
              <tr>
                {detailProduct.Laptop ? (
                  <>
                    {" "}
                    <td>{detailProduct.Laptop.ramMemory}</td>
                  </>
                ) : (
                  <></>
                )}

                {detailProduct.Tablet ? (
                  <>
                    <td>RAM</td>

                    <td>{detailProduct.Tablet.ramMemory}</td>
                  </>
                ) : (
                  <></>
                )}

                {detailProduct.CellPhone ? (
                  <>
                    <td>RAM</td>

                    <td>{detailProduct.CellPhone.ram}</td>
                  </>
                ) : (
                  <></>
                )}

                {detailProduct.Television ? (
                  <>
                    <td>Resolucion</td>

                    <td>{detailProduct.Television.typeResolution}</td>
                  </>
                ) : (
                  <></>
                )}
              </tr>
              <tr>
                {detailProduct.Laptop ? (
                  <>
                    <td>Almacenamiento</td>

                    <td>{detailProduct.Laptop.internalMemory}</td>
                  </>
                ) : (
                  <></>
                )}

                {detailProduct.Tablet ? (
                  <>
                    <td>Almacenamiento</td>

                    <td>{detailProduct.Tablet.internalMemory}</td>
                  </>
                ) : (
                  <></>
                )}

                {detailProduct.CellPhone ? (
                  <>
                    <td>Almacenamiento</td>

                    <td>{detailProduct.CellPhone.internalMemory}</td>
                  </>
                ) : (
                  <></>
                )}

                {detailProduct.Television ? (
                  <>
                    <td>sistema operativo</td>

                    <td>{detailProduct.Television.systemOperating}</td>
                  </>
                ) : (
                  <></>
                )}
              </tr>
              <tr>
                {detailProduct.Laptop ? (
                  <>
                    <td>Procesador</td>

                    <td>{detailProduct.Laptop.internalMemory}</td>
                  </>
                ) : (
                  <></>
                )}

                {detailProduct.CellPhone ? (
                  <>
                    <td>Colores</td>
                    {detailProduct.CellPhone.colors.map((c) => (
                      <td>{c}</td>
                    ))}
                  </>
                ) : (
                  <></>
                )}

                {detailProduct.Tablet ? (
                  <>
                    <td>Colores</td>
                    {detailProduct.Tablet.colors.map((c) => (
                      <td>{c}</td>
                    ))}
                  </>
                ) : (
                  <></>
                )}

                {detailProduct.Television ? (
                  <>
                    <td>Tamaño pantalla</td>

                    <td>{detailProduct.Television.screenSize}</td>
                  </>
                ) : (
                  <></>
                )}
              </tr>

              {detailProduct.Tablet ? (
                <tr>
                  <td>Cámara</td>
                  <td>{detailProduct.Tablet.mainCamera}</td>
                </tr>
              ) : (
                <></>
              )}

              {detailProduct.CellPhone ? (
                <tr>
                  <td>Cámara</td>
                  <td>{detailProduct.CellPhone.mainCamera}</td>
                </tr>
              ) : (
                <></>
              )}

              {detailProduct.Tablet ? (
                <tr>
                  <td>Tamaño Pantalla</td>
                  <td> {detailProduct.Tablet.screenSize}</td>
                </tr>
              ) : (
                <></>
              )}

              {detailProduct.Tablet ? (
                <tr>
                  <td>Tamaño Pantalla</td>
                  <td>{detailProduct.Tablet.screenSize}</td>
                </tr>
              ) : (
                <></>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
