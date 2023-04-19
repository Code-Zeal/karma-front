import { useParams } from "react-router-dom";
import axios from "axios";

import { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../custom.css";
import EditProductPopUp from "./EditProductPopUp";
import { Carousel } from "flowbite-react";
import { toast, ToastContainer, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditProductDetails() {
  const handleUndo = () => {
    const recoverImage = async () => {
      const res = await axios.put("/product/updateProduct", {
        id: detailProduct.id,
        model: detailProduct.model,
        brand: detailProduct.brand,
        description: detailProduct.description,
        price: detailProduct.price,
        images: images,
        stock: detailProduct.stock,
      });
      notifyNoUndo("Imagen recuperada correctamente");
      fetchData();
    };
    recoverImage();
  };
  const notify = (msg) =>
    toast.info(
      <div className="flex flex-col items-start justify-start">
        {msg}{" "}
        <button
          onClick={handleUndo}
          className="bg-neutral-900 text-white hover:bg-white hover:text-neutral-900 border border-white font-normal px-2 py-1 rounded-sm text-base "
        >
          Deshacer
        </button>
      </div>,
      {
        icon: false,
        toastId: "delete",
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // Aquí puedes agregar más opciones de configuración de la notificación
      }
    );
  const notifyNoUndo = (msg) =>
    toast.info(msg, {
      icon: false,
      toastId: "recover",
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // Aquí puedes agregar más opciones de configuración de la notificación
    });
  const [images, setImages] = useState(null);
  const popUpRef = useRef();

  const { id } = useParams();
  // el id del Producto para hacer la request para los detalles del producto
  const [detailProduct, setDetailProduct] = useState(null);
  async function fetchData() {
    const response = await axios.get(`/product/getProduct?id=${id}`);
    const data = response.data;
    setDetailProduct(data);
    setImages(data.images);
  }
  useEffect(() => {
    fetchData();
  }, [id]);
  const precioUnitario = detailProduct?.price;
  const toggleEdit = (type, route) => {
    popUpRef.current.togglePopUp(type, route);
  };
  console.log(detailProduct);
  function deleteArray(index) {
    const DeleteImage = async (newArray) => {
      try {
        const res = await axios.put("/product/updateProduct", {
          id: detailProduct.id,
          model: detailProduct.model,
          brand: detailProduct.brand,
          description: detailProduct.description,
          price: detailProduct.price,
          images: newArray,
          stock: detailProduct.stock,
        });
        notify("Imagen eliminada correctamente");
        fetchData();
      } catch (error) {
        console.log(error);
      }
    };
    const newArray = [...images]; // Creamos una copia del array original
    console.log(images);
    newArray.splice(index, 1); // Borramos el elemento correspondiente al índice indicado
    console.log(newArray); // Devolvemos el nuevo array sin el elemento eliminado
    if (newArray.length > 0) {
      DeleteImage(newArray);
    } else {
      DeleteImage([
        "https://ingoodcompany.asia/images/products_attr_img/matrix/default.png",
      ]);
    }
  }

  return (
    <>
      <EditProductPopUp
        ref={popUpRef}
        getData={fetchData}
        data={detailProduct}
      ></EditProductPopUp>
      <NavBar />

      <div className="w-full flex justify-center items-center p-4">
        <a
          href="/admin/editproduct"
          className="bg-black text-white py-2 px-4 rounded-sm"
        >
          Volver
        </a>
      </div>
      {detailProduct ? (
        <>
          <section className="flex justify-center items-center flex-row px-8 py-8">
            <div className="w-6/12 mx-32 border border-neutral-900 p-4 h-[500px] overflow-hidden flex flex-col   items-center justify-center ">
              <Carousel
                leftControl={
                  <div className="bg-black rounded-full flex p-1 border-white border-2 items-center justify-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xlink="http://www.w3.org/1999/xlink"
                      width="30px"
                      height="30px"
                      viewBox="-4.5 0 20 20"
                      version="1.1"
                    >
                      <title>arrow_left [#335]</title>
                      <desc>Created with Sketch.</desc>
                      <defs></defs>
                      <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g
                          id="Dribbble-Light-Preview"
                          transform="translate(-345.000000, -6679.000000)"
                          fill="#000000"
                        >
                          <g
                            id="icons"
                            transform="translate(56.000000, 160.000000)"
                          >
                            <path
                              d="M299.633777,6519.29231 L299.633777,6519.29231 C299.228878,6518.90256 298.573377,6518.90256 298.169513,6519.29231 L289.606572,6527.55587 C288.797809,6528.33636 288.797809,6529.60253 289.606572,6530.38301 L298.231646,6538.70754 C298.632403,6539.09329 299.27962,6539.09828 299.685554,6538.71753 L299.685554,6538.71753 C300.100809,6538.32879 300.104951,6537.68821 299.696945,6537.29347 L291.802968,6529.67648 C291.398069,6529.28574 291.398069,6528.65315 291.802968,6528.26241 L299.633777,6520.70538 C300.038676,6520.31563 300.038676,6519.68305 299.633777,6519.29231"
                              id="arrow_left-[#335]"
                              fill="#FFFFFF"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                }
                rightControl={
                  <div className="bg-black rounded-full flex p-1 border-white border-2 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xlink="http://www.w3.org/1999/xlink"
                      width="30px"
                      height="30px"
                      viewBox="-4.5 0 20 20"
                      version="1.1"
                    >
                      <title>arrow_right [#336]</title>
                      <desc>Created with Sketch.</desc>
                      <defs></defs>
                      <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g
                          id="Dribbble-Light-Preview"
                          transform="translate(-305.000000, -6679.000000)"
                          fill="#000000"
                        >
                          <g
                            id="icons"
                            transform="translate(56.000000, 160.000000)"
                          >
                            <path
                              d="M249.365851,6538.70769 L249.365851,6538.70769 C249.770764,6539.09744 250.426289,6539.09744 250.830166,6538.70769 L259.393407,6530.44413 C260.202198,6529.66364 260.202198,6528.39747 259.393407,6527.61699 L250.768031,6519.29246 C250.367261,6518.90671 249.720021,6518.90172 249.314072,6519.28247 L249.314072,6519.28247 C248.899839,6519.67121 248.894661,6520.31179 249.302681,6520.70653 L257.196934,6528.32352 C257.601847,6528.71426 257.601847,6529.34685 257.196934,6529.73759 L249.365851,6537.29462 C248.960938,6537.68437 248.960938,6538.31795 249.365851,6538.70769"
                              id="arrow_right-[#336]"
                              fill="#FFFFFF"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                }
                indicators={false}
              >
                {detailProduct &&
                  detailProduct.images.map((image, index) => {
                    return (
                      <div className="flex flex-col w-full h-full justify-center items-center">
                        {images[0] !==
                        "https://ingoodcompany.asia/images/products_attr_img/matrix/default.png" ? (
                          <button
                            className="font-thin text-base bg-red-600 w-[130px] rounded-md my-2 text-white"
                            onClick={() => deleteArray(index)}
                          >
                            Borrar imagen
                          </button>
                        ) : (
                          <></>
                        )}

                        <img
                          className="object-contain h-[350px] items-center justify-center"
                          src={image}
                          alt=""
                        />
                      </div>
                    );
                  })}
              </Carousel>

              <button
                className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
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
                    className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
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
                    className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
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
                    className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
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
                    className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
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
                  className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
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
                  className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
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
                        className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
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
                        className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
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
                            className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
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
                            className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
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
                            className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
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
                            className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
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
                            className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
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
                            className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
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
                            className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
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
                            className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
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
                    {detailProduct.Television ? (
                      <>
                        <td>
                          Tamaño pantalla{" "}
                          <button
                            className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
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
                          className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
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
                          className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
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
                          className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
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
                          className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
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
                        className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
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
