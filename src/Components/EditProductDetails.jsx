import { useParams } from "react-router-dom";
import axios from "axios";

import { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../custom.css";
import EditProductPopUp from "./EditProductPopUp";

export default function EditProductDetails() {
  const popUpRef = useRef();

  const { id } = useParams();
  // el id del Producto para hacer la request para los detalles del producto
  const [detailProduct, setDetailProduct] = useState(null);
  console.log(detailProduct);
  async function fetchData() {
    const response = await axios.get(
      `http://localhost:4000/product/getProduct?id=${id}`
    );
    const data = response.data;
    setDetailProduct(data);
  }
  useEffect(() => {
    fetchData();
  }, [id]);

  const precioUnitario = detailProduct?.price;
  const toggleEdit = (type, route) => {
    popUpRef.current.togglePopUp(type, route);
  };

  return (
    <>
      <EditProductPopUp
        getData={fetchData}
        data={detailProduct}
        ref={popUpRef}
      ></EditProductPopUp>
      <NavBar />
      <div className="w-full flex justify-center items-center">
        <a href="/allProducts" className="bg-black text-white p-2">
          Volver
        </a>
      </div>
      {detailProduct ? (
        <>
          <section className="flex justify-center items-center flex-row px-8 py-8">
            <div className="w-6/12 mx-32 border border-neutral-900 p-4 h-96 overflow-hidden flex flex-col   items-center justify-center">
              <img
                className="object-contain h-full items-center justify-center"
                src={detailProduct.images[0]}
                alt=""
              />
              <button
                className="ml-2 bg-black text-white px-2 py-1 rounded-lg"
                onClick={() => toggleEdit("images", "imagen")}
              >
                Agregar nuevas imagenes
              </button>
            </div>

            <div className="flex flex-col w-6/12 ">
              {detailProduct.Laptop && (
                <div className="flex">
                  <h5 className="text-2xl font-bold my-3">{`${detailProduct.Laptop[0].name}`}</h5>
                  <button
                    className="ml-2 bg-black text-white px-2 py-1 rounded-lg"
                    onClick={() => toggleEdit("name", "nombre")}
                  >
                    Editar
                  </button>
                </div>
              )}
              {detailProduct.Tablet && (
                <div className="flex">
                  <h5 className="text-2xl font-bold my-3">{` ${detailProduct.Tablet[0].name}`}</h5>
                  <button
                    className="ml-2 bg-black text-white px-2 py-1 rounded-lg"
                    name="Tablet"
                    onClick={() => toggleEdit("name", "nombre")}
                  >
                    Editar
                  </button>
                </div>
              )}
              {detailProduct.CellPhone && (
                <div className="flex">
                  <h5 className="text-2xl font-bold my-3">{`${detailProduct.CellPhone[0].name}`}</h5>
                  <button
                    className="ml-2 bg-black text-white px-2 py-1 rounded-lg"
                    name="CellPhone"
                    onClick={() => toggleEdit("name", "nombre")}
                  >
                    Editar
                  </button>
                </div>
              )}
              {detailProduct.Television && (
                <div className="flex">
                  <h5 className="text-2xl font-bold my-3">{`${detailProduct.Television[0].name}`}</h5>
                  <button
                    className="ml-2 bg-black text-white px-2 py-1 rounded-lg"
                    name="Television"
                    onClick={() => toggleEdit("name", "nombre")}
                  >
                    Editar
                  </button>
                </div>
              )}
              <div className="flex my-3">
                <span className="text-2xl font-bold">
                  Precio ${precioUnitario}
                </span>
                <button
                  className="ml-2 bg-black text-white px-2 py-1 rounded-lg"
                  name="price"
                  onClick={() => toggleEdit("price", "precio")}
                >
                  Editar
                </button>
              </div>
            </div>
          </section>

          <section className="flex justify-center items-center flex-row px-8 py-8">
            <div className="w-6/12 mx-32 ">
              <div className="flex">
                <p className="text-lg font-medium mb-2">Descripción</p>
                <button
                  className="ml-2 bg-black text-white px-2 py-1 rounded-lg"
                  onClick={() => toggleEdit("description", "descripción")}
                >
                  Editar
                </button>
              </div>
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
                    <td>
                      Modelo{" "}
                      <button
                        className="ml-2 bg-black text-white px-2 py-1 rounded-lg"
                        onClick={() => toggleEdit("model", "modelo")}
                      >
                        Editar
                      </button>
                    </td>
                    <td>{detailProduct.model} </td>
                  </tr>
                  <tr>
                    <td>
                      Marca{" "}
                      <button
                        className="ml-2 bg-black text-white px-2 py-1 rounded-lg"
                        onClick={() => toggleEdit("brand", "marca")}
                      >
                        Editar
                      </button>
                    </td>
                    <td>{detailProduct.brand}</td>
                  </tr>
                  <tr>
                    {detailProduct.Laptop ? (
                      <>
                        <td>
                          RAM{" "}
                          <button
                            className="ml-2 bg-black text-white px-2 py-1 rounded-lg"
                            onClick={() =>
                              toggleEdit("ramMemory", "memoria ram")
                            }
                          >
                            Editar
                          </button>
                        </td>

                        <td>{detailProduct.Laptop[0].ramMemory}</td>
                      </>
                    ) : (
                      <></>
                    )}

                    {detailProduct.Tablet ? (
                      <>
                        <td>
                          RAM{" "}
                          <button
                            className="ml-2 bg-black text-white px-2 py-1 rounded-lg"
                            name="Tablet.ramMemory"
                            onClick={() =>
                              toggleEdit("ramMemory", "memoria ram")
                            }
                          >
                            Editar
                          </button>
                        </td>

                        <td>{detailProduct.Tablet[0].ramMemory}</td>
                      </>
                    ) : (
                      <></>
                    )}

                    {detailProduct.CellPhone ? (
                      <>
                        <td>
                          RAM{" "}
                          <button
                            className="ml-2 bg-black text-white px-2 py-1 rounded-lg"
                            name="CellPhone.ramMemory"
                            onClick={() =>
                              toggleEdit("ramMemory", "memoria ram")
                            }
                          >
                            Editar
                          </button>
                        </td>

                        <td>{detailProduct.CellPhone[0].ramMemory}</td>
                      </>
                    ) : (
                      <></>
                    )}

                    {detailProduct.Television ? (
                      <>
                        <td>
                          Resolucion{" "}
                          <button
                            className="ml-2 bg-black text-white px-2 py-1 rounded-lg"
                            name="Television.typeResolution"
                            onClick={() =>
                              toggleEdit("typeResolution", "tipo de resolución")
                            }
                          >
                            Editar
                          </button>
                        </td>

                        <td>{detailProduct.Television[0].typeResolution}</td>
                      </>
                    ) : (
                      <></>
                    )}
                  </tr>
                  <tr>
                    {detailProduct.Laptop ? (
                      <>
                        <td>
                          Almacenamiento{" "}
                          <button
                            className="ml-2 bg-black text-white px-2 py-1 rounded-lg"
                            name="Laptop.internalMemory"
                            onClick={() =>
                              toggleEdit("internalMemory", "almacenamiento")
                            }
                          >
                            Editar
                          </button>
                        </td>

                        <td>{detailProduct.Laptop[0].internalMemory}</td>
                      </>
                    ) : (
                      <></>
                    )}

                    {detailProduct.Tablet ? (
                      <>
                        <td>
                          Almacenamiento{" "}
                          <button
                            className="ml-2 bg-black text-white px-2 py-1 rounded-lg"
                            name="Tablet.internalMemory"
                            onClick={() =>
                              toggleEdit("internalMemory", "almacenamiento")
                            }
                          >
                            Editar
                          </button>
                        </td>

                        <td>{detailProduct.Tablet[0].internalMemory}</td>
                      </>
                    ) : (
                      <></>
                    )}

                    {detailProduct.CellPhone ? (
                      <>
                        <td>
                          Almacenamiento{" "}
                          <button
                            className="ml-2 bg-black text-white px-2 py-1 rounded-lg"
                            name="CellPhone.internalMemory"
                            onClick={() =>
                              toggleEdit("internalMemory", "almacenamiento")
                            }
                          >
                            Editar
                          </button>
                        </td>

                        <td>{detailProduct.CellPhone[0].internalMemory}</td>
                      </>
                    ) : (
                      <></>
                    )}

                    {detailProduct.Television ? (
                      <>
                        <td>
                          sistema operativo{" "}
                          <button
                            className="ml-2 bg-black text-white px-2 py-1 rounded-lg"
                            name="Television.systemOperating"
                            onClick={() =>
                              toggleEdit("systemOperating", "sistema operativo")
                            }
                          >
                            Editar
                          </button>
                        </td>

                        <td>{detailProduct.Television[0].systemOperating}</td>
                      </>
                    ) : (
                      <></>
                    )}
                  </tr>
                  <tr>
                    {detailProduct.CellPhone ? (
                      <>
                        <td>
                          Colores{" "}
                          <button
                            className="ml-2 bg-black text-white px-2 py-1 rounded-lg"
                            onClick={() =>
                              toggleEdit(
                                "colors",
                                "colores separados por un espacio"
                              )
                            }
                          >
                            Editar
                          </button>
                        </td>
                        <td>
                          |{" "}
                          {detailProduct.CellPhone[0].colors.map((c) => {
                            return ` ${c} |`;
                          })}
                        </td>
                      </>
                    ) : (
                      <></>
                    )}

                    {detailProduct.Tablet ? (
                      <>
                        <td>
                          Colores{" "}
                          <button
                            className="ml-2 bg-black text-white px-2 py-1 rounded-lg"
                            name="Tablet.colors"
                            onClick={() =>
                              toggleEdit(
                                "colors",
                                "colores separados por un espacio"
                              )
                            }
                          >
                            Editar
                          </button>
                        </td>
                        <td>
                          |{" "}
                          {detailProduct.Tablet[0].colors.map((c) => {
                            return ` ${c} |`;
                          })}
                        </td>
                      </>
                    ) : (
                      <></>
                    )}

                    {detailProduct.Television ? (
                      <>
                        <td>
                          Tamaño pantalla{" "}
                          <button
                            className="ml-2 bg-black text-white px-2 py-1 rounded-lg"
                            name="Television.screenSize"
                            onClick={() =>
                              toggleEdit(
                                "screenSize",
                                "tamaño de pantalla(en pulgadas)"
                              )
                            }
                          >
                            Editar
                          </button>
                        </td>

                        <td>{detailProduct.Television[0].screenSize}</td>
                      </>
                    ) : (
                      <></>
                    )}
                  </tr>

                  {detailProduct.Tablet ? (
                    <tr>
                      <td>
                        Cámara
                        <button
                          className="ml-2 bg-black text-white px-2 py-1 rounded-lg"
                          name="Tablet.mainCamera"
                          onClick={() =>
                            toggleEdit("mainCamera", "camara principal")
                          }
                        >
                          Editar
                        </button>
                      </td>
                      <td>{detailProduct.Tablet[0].mainCamera}</td>
                    </tr>
                  ) : (
                    <></>
                  )}

                  {detailProduct.Laptop ? (
                    <tr>
                      <td>
                        Procesador{" "}
                        <button
                          className="ml-2 bg-black text-white px-2 py-1 rounded-lg"
                          name="Laptop.processor"
                          onClick={() => toggleEdit("processor", "procesador")}
                        >
                          Editar
                        </button>
                      </td>
                      <td>{detailProduct.Laptop[0].processor}</td>
                    </tr>
                  ) : (
                    <></>
                  )}

                  {detailProduct.CellPhone ? (
                    <tr>
                      <td>
                        Cámara{" "}
                        <button
                          className="ml-2 bg-black text-white px-2 py-1 rounded-lg"
                          name="CellPhone.mainCamera"
                          onClick={() =>
                            toggleEdit("mainCamera", "camara principal")
                          }
                        >
                          Editar
                        </button>
                      </td>
                      <td>{detailProduct.CellPhone[0].mainCamera}</td>
                    </tr>
                  ) : (
                    <></>
                  )}

                  {detailProduct.Tablet ? (
                    <tr>
                      <td>
                        Tamaño Pantalla
                        <button
                          className="ml-2 bg-black text-white px-2 py-1 rounded-lg"
                          name="Tablet.screenSize"
                          onClick={() =>
                            toggleEdit(
                              "screenSize",
                              "tamaño de pantalla(en pulgadas)"
                            )
                          }
                        >
                          Editar
                        </button>
                      </td>
                      <td> {detailProduct.Tablet[0].screenSize}</td>
                    </tr>
                  ) : (
                    <></>
                  )}
                  <tr>
                    <td>
                      Stock{" "}
                      <button
                        className="ml-2 bg-black text-white px-2 py-1 rounded-lg"
                        onClick={() => toggleEdit("stock", "inventario")}
                      >
                        Editar
                      </button>
                    </td>
                    <td>{detailProduct.stock} </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <Footer />
        </>
      ) : (
        <></>
      )}
    </>
  );
}
