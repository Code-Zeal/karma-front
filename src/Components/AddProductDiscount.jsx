import { useParams } from "react-router-dom";
import axios from "axios";
import Rating from "./Rating";
import { useAuth0 } from "@auth0/auth0-react";
import { createAddToShoppingCart } from "../Redux/Actions";
import { useDispatch } from "react-redux";

import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../custom.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Carousel } from "flowbite-react";
import { useForm } from "react-hook-form";
export default function DetailsCard() {
  const [percentage, setPercentage] = useState(null);
  console.log(percentage);
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();

  const { id } = useParams();
  // el id del Producto para hacer la request para los detalles del producto
  const [detailProduct, setDetailProduct] = useState(null);

  useEffect(() => {
    async function fetchData(id) {
      const response = await axios.get(`/product/getProduct?id=${id}`);
      const data = response.data;
      setDetailProduct(data);
    }
    fetchData(id);
  }, [id]);
  const {
    watch,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (form) => {
    console.log(form);
  };
  useEffect(() => {
    if (watch("Porcentaje") === "") {
      setPercentage(null);
    } else {
      setPercentage(watch("Porcentaje"));
    }
  }, [watch("Porcentaje")]);

  console.log(watch("Porcentaje"));
  console.log(errors);
  const [cantidad, setCantidad] = useState(1);
  const precioUnitario = detailProduct?.price;
  const precioTotal = cantidad * precioUnitario;
  console.log(id);
  console.log(detailProduct);

  const handleAddCart = () => {
    const dataAddCart = {
      UserId: user?.sub,
      ProductId: id,
      amount: cantidad,
    };
    console.log(dataAddCart);
    dispatch(createAddToShoppingCart(dataAddCart));
  };

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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <NavBar />
      {detailProduct ? (
        <>
          <section className="flex justify-center items-center flex-row px-8 py-8">
            <div className="w-6/12 mx-32 border border-neutral-900 p-4 h-96 overflow-hidden flex items-center justify-center">
              <Carousel
                leftControl={
                  <div className="bg-black rounded-full flex p-1 border-white border-2 items-center justify-center">
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
                {detailProduct.images.map((image) => {
                  return (
                    <img
                      className="object-contain h-full items-center justify-center"
                      src={`${image}`}
                      alt={`${detailProduct.brand} ${detailProduct.model}`}
                    />
                  );
                })}
                <img src={detailProduct.images[0]} alt="" />
              </Carousel>
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
            </div>
          </section>

          <section className="flex justify-center items-center flex-row px-8 py-8">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-6/12 mx-32 flex flex-col"
            >
              <h3 className="my-4 w-full font-thin text-lg flex items-center justify-center ">
                Este producto no cuenta con descuento aplicado actualmente
              </h3>
              <div className="flex">
                <div className="flex flex-col w-full">
                  <label htmlFor="">Fecha inicial:</label>
                  <input
                    {...register("fechaInicial", { required: true })}
                    className={
                      errors.fechaInicial
                        ? " border-l-[20px]  mr-2 bg-white border  text-neutral-900 py-2 px-4 rounded-sm  placeholder:font-light border-red-600  focus:border-red-600"
                        : " border-l-[20px]  mr-2 bg-white border  text-neutral-900 py-2 px-4 rounded-sm  placeholder:font-light border-[#171717] focus:border-[#171717]"
                    }
                    type="date"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="">Fecha final:</label>
                  <input
                    {...register("fechaFinal", { required: true })}
                    className={
                      errors.fechaFinal
                        ? "  border-l-[20px]  ml-2 bg-white border  text-neutral-900 py-2 px-4 rounded-sm  placeholder:font-light border-red-600  focus:border-red-600"
                        : " border-l-[20px]  ml-2 bg-white border  text-neutral-900 py-2 px-4 rounded-sm  placeholder:font-light border-[#171717] focus:border-[#171717]"
                    }
                    type="date"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex justify-center items-center mt-6">
                  <input
                    {...register("Porcentaje", { required: true })}
                    placeholder="Porcentaje"
                    className={
                      errors.Porcentaje
                        ? " w-[130px] border-l-[20px] text-center  mr-2 bg-white border  text-neutral-900 py-1 px-4 rounded-sm  placeholder:font-light border-red-600  focus:border-red-600"
                        : " w-[130px] border-l-[20px] text-center  mr-2 bg-white border  text-neutral-900 py-1 px-4 rounded-sm  placeholder:font-light border-[#171717] focus:border-[#171717]"
                    }
                    type="number"
                  />
                  <h3 className=" text-white border border-neutral-900 bg-neutral-900 py-1  px-2 rounded-sm hover:bg-neutral-900 hover:text-white">
                    %
                  </h3>
                </div>
                {percentage && percentage !== null ? (
                  <div className="flex justify-center items-center mt-2 h-[30px]">
                    <h3 className="font-thin">
                      Precio total con el descuento:
                      <span className="font-normal">
                        {" "}
                        ${precioUnitario - precioUnitario * (percentage / 100)}
                      </span>
                    </h3>
                  </div>
                ) : (
                  <div className="flex justify-center items-center mt-2 h-[30px]"></div>
                )}

                <button
                  className=" bg-white border border-neutral-900 text-neutral-900 py-1  px-2 rounded-sm hover:bg-neutral-900 hover:text-white mt-2"
                  type="submit"
                >
                  Agregar descuento
                </button>
              </div>
            </form>

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
                        <td>
                          |{" "}
                          {detailProduct.CellPhone[0].colors.map(
                            (c) => ` ${c} |`
                          )}
                        </td>
                      </>
                    ) : (
                      <></>
                    )}

                    {detailProduct.Tablet ? (
                      <>
                        <td>Colores</td>
                        <td>
                          |{" "}
                          {detailProduct.Tablet[0].colors.map((c) => ` ${c} |`)}
                        </td>
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
