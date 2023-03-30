import { useParams } from "react-router-dom";
import axios from "axios";
import Rating from "./Rating";

import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../custom.css";

export default function DetailsCard() {
  const { id } = useParams();
  // el id del Producto para hacer la request para los detalles del producto
  const [detailProduct, setDetailProduct] = useState(null);

  useEffect(() => {
    async function fetchData(id) {
      const response = await axios.get(
        `http://localhost:4000/product/getProduct?id=${id}`
      );
      const data = response.data;
      setDetailProduct(data);
    }
    fetchData(id);
  }, [id]);

  const [cantidad, setCantidad] = useState(1);
  const precioUnitario = detailProduct?.price;
  const precioTotal = cantidad * precioUnitario;
  console.log(id);
  console.log(detailProduct);

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
      <NavBar />
      {detailProduct ? (
        <>
          <section className="flex justify-center items-center flex-row px-8 py-8">
            <div className="w-6/12 mx-32 border border-neutral-900 p-4 h-96 overflow-hidden flex items-center justify-center">
              <img
                className="object-contain h-full items-center justify-center"
                src={detailProduct.images[0]}
                alt=""
              />
            </div>

            <div className="flex flex-col w-6/12 ">
              {detailProduct.Laptop && (
                <h5 className="text-2xl font-bold my-3">{`${detailProduct.Laptop[0].name}`}</h5>
              )}
              {detailProduct.Tablet && (
                <h5 className="text-2xl font-bold my-3">{` ${detailProduct.Tablet[0].name}`}</h5>
              )}
              {detailProduct.CellPhone && (
                <h5 className="text-2xl font-bold my-3">{`${detailProduct.CellPhone[0].name}`}</h5>
              )}
              {detailProduct.Television && (
                <h5 className="text-2xl font-bold my-3">{`${detailProduct.Television[0].name}`}</h5>
              )}
              <div className="flex flex-col my-3">
                <span className="text-2xl font-bold">
                  Precio ${precioUnitario}
                </span>
              </div>
              <div className="flex flex-row my-3">
                <label className="text-lg font-medium mr-4">Cantidad</label>
                <button
                  className="py-1 px-2 bg-gray-100 rounded-lg mr-2"
                  onClick={handleDecrement}
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={cantidad}
                  onChange={handleCantidadChange}
                  className="w-16 h-10 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-300 focus:border-primary-300 appearance-none text-center"
                />
                <button
                  className="py-1 px-2 bg-gray-100 rounded-lg ml-2"
                  onClick={handleIncrement}
                >
                  +
                </button>
                <span className="ml-4 text-lg font-medium">Total</span>
                <span className="ml-2 text-2xl font-bold">$ {precioTotal}</span>
              </div>
              <button className="bg-neutral-900 bg text-white py-3 px-8 rounded-lg hover:bg-primary-600 transition duration-200 ease-in-out w-3/12 my-3">
                Agregar al carrito
              </button>
            </div>
          </section>

          <section className="flex justify-center items-center flex-row px-8 py-8">
            <div className="w-6/12 mx-32 ">
              <p className="text-lg font-medium mb-2">Descripción</p>
              <p className="text-gray-600">{detailProduct.description}</p>
            </div>

            <div className="w-6/12">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-200 w-full">
                    <th className="text-left px-4 py-2 font-medium text-gray-700 uppercase tracking-wider w-1/2">
                      Propiedad
                    </th>
                    <th className="text-left px-4 py-2 font-medium text-gray-700 uppercase tracking-wider w-1/2">
                      Valor
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Modelo</td>
                    <td>{detailProduct.model}</td>
                  </tr>
                  <tr>
                    <td>Marca</td>
                    <td>{detailProduct.brand}</td>
                  </tr>
                  <tr>
                    {detailProduct.Laptop ? (
                      <>
                        <td>RAM</td>

                        <td>{detailProduct.Laptop[0].ramMemory}</td>
                      </>
                    ) : (
                      <></>
                    )}

                    {detailProduct.Tablet ? (
                      <>
                        <td>RAM</td>

                        <td>{detailProduct.Tablet[0].ramMemory}</td>
                      </>
                    ) : (
                      <></>
                    )}

                    {detailProduct.CellPhone ? (
                      <>
                        <td>RAM</td>

                        <td>{detailProduct.CellPhone[0].ramMemory}</td>
                      </>
                    ) : (
                      <></>
                    )}

                    {detailProduct.Television ? (
                      <>
                        <td>Resolucion</td>

                        <td>{detailProduct.Television[0].typeResolution}</td>
                      </>
                    ) : (
                      <></>
                    )}
                  </tr>
                  <tr>
                    {detailProduct.Laptop ? (
                      <>
                        <td>Almacenamiento</td>

                        <td>{detailProduct.Laptop[0].internalMemory}</td>
                      </>
                    ) : (
                      <></>
                    )}

                    {detailProduct.Tablet ? (
                      <>
                        <td>Almacenamiento</td>

                        <td>{detailProduct.Tablet[0].internalMemory}</td>
                      </>
                    ) : (
                      <></>
                    )}

                    {detailProduct.CellPhone ? (
                      <>
                        <td>Almacenamiento</td>

                        <td>{detailProduct.CellPhone[0].internalMemory}</td>
                      </>
                    ) : (
                      <></>
                    )}

                    {detailProduct.Television ? (
                      <>
                        <td>sistema operativo</td>

                        <td>{detailProduct.Television[0].systemOperating}</td>
                      </>
                    ) : (
                      <></>
                    )}
                  </tr>
                  <tr>
                    {detailProduct.CellPhone ? (
                      <>
                        <td>Colores</td>
                        {detailProduct.CellPhone[0].colors.map((c) => (
                          <td>{c}</td>
                        ))}
                      </>
                    ) : (
                      <></>
                    )}

                    {detailProduct.Tablet ? (
                      <>
                        <td>Colores</td>
                        {detailProduct.Tablet[0].colors.map((c) => (
                          <td>{c}</td>
                        ))}
                      </>
                    ) : (
                      <></>
                    )}

                    {detailProduct.Television ? (
                      <>
                        <td>Tamaño pantalla</td>

                        <td>{detailProduct.Television[0].screenSize}</td>
                      </>
                    ) : (
                      <></>
                    )}
                  </tr>

                  {detailProduct.Tablet ? (
                    <tr>
                      <td>Cámara</td>
                      <td>{detailProduct.Tablet[0].mainCamera}</td>
                    </tr>
                  ) : (
                    <></>
                  )}

                  {detailProduct.Laptop ? (
                    <tr>
                      <td>Procesador</td>
                      <td>{detailProduct.Laptop[0].processor}</td>
                    </tr>
                  ) : (
                    <></>
                  )}

                  {detailProduct.CellPhone ? (
                    <tr>
                      <td>Cámara</td>
                      <td>{detailProduct.CellPhone[0].mainCamera}</td>
                    </tr>
                  ) : (
                    <></>
                  )}

                  {detailProduct.Tablet ? (
                    <tr>
                      <td>Tamaño Pantalla</td>
                      <td> {detailProduct.Tablet[0].screenSize}</td>
                    </tr>
                  ) : (
                    <></>
                  )}

                  {detailProduct.Tablet ? (
                    <tr>
                      <td>Tamaño Pantalla</td>
                      <td>{detailProduct.Tablet[0].screenSize}</td>
                    </tr>
                  ) : (
                    <></>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          <section className="border border-neutral-900 p-8 m-8">
            <p className="text-lg font-mono font-bold m-2">
              Promedio de valoración{" "}
              <Rating rating={detailProduct.averageRating} />
            </p>
            <p className="text-md font-mono m-2 underline">Comentarios</p>
            {detailProduct.CommentsRatings ? (
              detailProduct.CommentsRatings.map((comment) => (
                <p key={comment.id} className="p-2 ml-8 font-mono">
                  {comment.comments}
                  {<Rating rating={comment.rating} />}
                  <hr className="border-neutral-400" />
                </p>
              ))
            ) : (
              <></>
            )}
          </section>
          <Footer />
        </>
      ) : (
        <></>
      )}
    </>
  );
}
