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
import { Carousel, Tooltip } from "flowbite-react";
import Login from "./Login";
import { HeartIcon } from "@heroicons/react/24/outline";

export default function DetailsCard() {
  const notify = (msg) =>
    toast.info(msg, {
      icon: false,
      toastId: "success",
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const errorNotify = (msg) =>
    toast.error(msg, {
      toastId: "error",
      icon: false,
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const { user, isAuthenticated } = useAuth0();

  const { id } = useParams();
  // el id del Producto para hacer la request para los detalles del producto
  const [detailProduct, setDetailProduct] = useState(null);
  const [isFav, setIsFav] = useState(null);
  const [hasChange, setHasChange] = useState(true);
  useEffect(() => {
    const isProductFav = async () => {
      const res = await axios.get(
        `/product/getUserProducts?userId=${user?.sub}`
      );
      if (res.data.Products.length > 0) {
        res.data.Products.map((product) => {
          console.log(product.id === parseInt(id));
          let data = res.data.Products.filter(
            (product) => product.id === parseInt(id)
          );
          if (data.length > 0) {
            setIsFav(true);
            return null;
          } else {
            setIsFav(false);
            return null;
          }
        });
      } else {
        setIsFav(false);
      }
    };
    isProductFav();
  }, [user?.sub, hasChange]);

  const handleFavorite = async () => {
    if (isFav === true) {
      const res = await axios.post("/product/removeProductToUser", {
        userId: user?.sub,
        productId: id,
      });
      setIsFav(null);
      setHasChange(!hasChange);
    } else {
      const res = await axios.post("/product/addProductToUser", {
        userId: user?.sub,
        productId: id,
      });
      setIsFav(null);
      setHasChange(!hasChange);
    }
  };

  useEffect(() => {
    async function fetchData(id) {
      let dataClicksUpdate = {
        productId: id,
      };
      const response = await axios.get(`/product/getProduct?id=${id}`);
      const data = response.data;
      setDetailProduct(data);
      const responseClicksUpdate = await axios.put(
        `/product/updateProductClicks`,
        dataClicksUpdate
      );
    }
    fetchData(id);
  }, [id]);

  const [cantidad, setCantidad] = useState(1);
  const [precioTotal, setPrecioTotal] = useState(null);
  const precioUnitario = detailProduct?.price;
  useEffect(() => {
    if (detailProduct?.ProductDiscount) {
      setPrecioTotal(
        cantidad * precioUnitario -
          (precioUnitario * detailProduct.ProductDiscount[0].discountValue) /
            100
      );
    } else {
      setPrecioTotal(cantidad * precioUnitario);
    }
  }, [cantidad, detailProduct]);

  const handleAddCart = async () => {
    const response = await axios.get(
      `/product/getProductsFromUserShoppingCart?id=${user?.sub}`
    );
    if (response.data.length > 0) {
      let data = await response.data.filter(
        (product) => product.Product.id === parseInt(id)
      );
      if (data.length > 0) {
        const handleIncrement = async () => {
          try {
            const response = await axios.put(
              "/shoppingCart/addItemsToShoppingCartByProduct",
              {
                UserId: user?.sub,
                ProductId: parseInt(id),
                amount: cantidad,
              }
            );
            notify("El producto se agregó al carrito");
            return;
          } catch (error) {
            errorNotify(
              "Ha ocurrido un error al agregar el producto al carrito, intente de nuevo"
            );
          }
        };
        handleIncrement();
      } else {
        const handleCreate = async () => {
          try {
            const response = await axios.post(
              "/shoppingCart/createShoppingCart",
              {
                UserId: user?.sub,
                ProductId: parseInt(id),
                amount: cantidad,
              }
            );
            notify("El producto se agregó al carrito");
            return;
          } catch (error) {
            errorNotify(
              "Ha ocurrido un error al agregar el producto al carrito, intente de nuevo"
            );
          }
        };
        handleCreate();
      }
    } else {
      const handleCreate = async () => {
        try {
          const response = await axios.post(
            "/shoppingCart/createShoppingCart",
            {
              UserId: user?.sub,
              ProductId: parseInt(id),
              amount: cantidad,
            }
          );
          notify("El producto se agregó al carrito");
          return;
        } catch (error) {
          errorNotify(
            "Ha ocurrido un error al agregar el producto al carrito, intente de nuevo"
          );
        }
      };
      handleCreate();
    }
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
  const [diasRestantes, setDiasRestantes] = useState(null);

  useEffect(() => {
    if (detailProduct?.ProductDiscount) {
      const hoy = new Date();
      const fechaObjetivoEnTiempo = new Date(
        detailProduct.ProductDiscount[0].endingDate
      );
      const diferenciaEnTiempo = fechaObjetivoEnTiempo - hoy;
      const diasRestantes = Math.ceil(diferenciaEnTiempo / (1000 * 3600 * 24)); // convertir a días y redondear hacia arriba
      setDiasRestantes(diasRestantes);
    }
  }, [detailProduct]);
  return (
    <>
      <NavBar />
      {detailProduct ? (
        <>
          <section className="flex justify-center items-center flex-row px-8 py-8">
            <div className="w-6/12 mx-32 border border-neutral-900 p-4 h-96 overflow-hidden flex flex-col items-center justify-center">
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
              </Carousel>
            </div>

            <div className="flex flex-col w-6/12 ">
              <div className="flex w-full justify-between">
                {detailProduct.Laptop && (
                  <h5 className="text-2xl font-bold my-3 ">{`${detailProduct.Laptop[0].name}`}</h5>
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
                {isAuthenticated && (
                  <>
                    {isFav === null ? (
                      <Tooltip content="Cargando...">
                        <div className="animate-spin">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40px"
                            height="36px"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 2.99988V5.99988M12 20.9999V17.9999M4.20577 16.4999L6.80385 14.9999M21 11.9999H18M16.5 19.7941L15 17.196M3 11.9999H6M7.5 4.20565L9 6.80373M7.5 19.7941L9 17.196M19.7942 16.4999L17.1962 14.9999M4.20577 7.49988L6.80385 8.99988"
                              stroke="#000000"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </Tooltip>
                    ) : isFav === false ? (
                      <div
                        className="cursor-pointer mr-10 flex flex-col justify-center items-center"
                        onClick={handleFavorite}
                      >
                        <Tooltip content="Haz click si quieres agregarlo a tus favoritos">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.6392 17.0252L3.6332 17.019L3.6271 17.0129C2.47129 15.8571 1.69537 14.5067 1.28745 12.947C0.877168 11.3782 0.878175 9.83387 1.28648 8.29672C1.69339 6.76485 2.46847 5.42574 3.6271 4.26711C4.78291 3.1113 6.13334 2.33538 7.69302 1.92746C9.26177 1.51718 10.8061 1.51818 12.3433 1.92649C13.861 2.32963 15.1895 3.09418 16.3407 4.23509L19.2303 7.71846L20 8.64627L20.7696 7.71846L23.6662 4.22678C24.7561 3.0984 26.0765 2.33355 27.6494 1.92839C29.2484 1.51654 30.8074 1.51851 32.3433 1.92649C33.8751 2.33339 35.2143 3.10847 36.3729 4.26711C37.5315 5.42574 38.3066 6.76485 38.7135 8.29672C39.1218 9.83387 39.1228 11.3782 38.7125 12.947C38.3046 14.5067 37.5287 15.8571 36.3729 17.0129L36.3668 17.019L36.3608 17.0252L20 33.9607L3.6392 17.0252Z"
                              fill="white"
                              stroke="black"
                              stroke-width="2"
                            />
                          </svg>
                        </Tooltip>
                        Agregar a favorito
                      </div>
                    ) : (
                      <div
                        className="cursor-pointer mr-10 flex flex-col justify-center items-center"
                        onClick={handleFavorite}
                      >
                        <Tooltip content="Producto favorito! haz click si quieres removerlo de tus favoritos">
                          <svg
                            width="50"
                            height="50"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_2_2)">
                              <path
                                d="M3.6392 19.0252L3.6332 19.019L3.6271 19.0129C2.47129 17.8571 1.69537 16.5067 1.28745 14.947C0.877168 13.3782 0.878175 11.8339 1.28648 10.2967C1.69339 8.76485 2.46847 7.42574 3.6271 6.26711C4.78291 5.1113 6.13334 4.33538 7.69302 3.92746C9.26177 3.51718 10.8061 3.51818 12.3433 3.92649C13.861 4.32963 15.1895 5.09418 16.3407 6.23509L19.2303 9.71846L20 10.6463L20.7696 9.71846L23.6662 6.22678C24.7561 5.0984 26.0765 4.33355 27.6494 3.92839C29.2484 3.51654 30.8074 3.51851 32.3433 3.92649C33.8751 4.33339 35.2143 5.10847 36.3729 6.26711C37.5315 7.42574 38.3066 8.76485 38.7135 10.2967C39.1218 11.8339 39.1228 13.3782 38.7125 14.947C38.3046 16.5067 37.5287 17.8571 36.3729 19.0129L36.3668 19.019L36.3608 19.0252L20 35.9607L3.6392 19.0252Z"
                                fill="#F33131"
                                stroke="black"
                                stroke-width="2"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_2_2">
                                <rect width="40" height="40" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </Tooltip>
                        Favorito
                      </div>
                    )}
                  </>
                )}
              </div>

              <div className="flex flex-col my-3">
                {detailProduct?.ProductDiscount && diasRestantes > -1 ? (
                  <div className="flex flex-col">
                    <div>
                      <span className="text-gray-500 line-through">
                        ${precioUnitario.toFixed(2)}
                      </span>
                      <div class="bg-red-500 text-white rounded-md px-1 text-sm w-9">
                        {detailProduct.ProductDiscount[0].discountValue}%
                        {console.log(detailProduct)}
                      </div>
                      <span className="font-bold text-green-500">
                        $
                        {(
                          precioUnitario -
                          (precioUnitario *
                            detailProduct.ProductDiscount[0].discountValue) /
                            100
                        ).toFixed(2)}
                      </span>
                    </div>
                    <p className="text-start">
                      {diasRestantes === 0
                        ? `¡Esta oferta termina hoy!`
                        : diasRestantes === 1
                        ? `¡Esta oferta termina mañana!`
                        : `¡Esta oferta termina en ${diasRestantes} dias`}
                    </p>
                  </div>
                ) : (
                  <>
                    <span className="text-lg font-bold text-gray-900 dark:text-white ">
                      ${precioUnitario.toFixed(2)}
                    </span>
                  </>
                )}
              </div>
              {isAuthenticated ? (
                <>
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
                    <span className="ml-2 text-2xl font-bold">
                      $ {precioTotal.toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={handleAddCart}
                    className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
                  >
                    Agregar al carrito
                  </button>
                </>
              ) : (
                <div className="flex flex-col justify-center items-center">
                  <h4 className="text-lg font-thin">
                    ¡Para agregar productos al carrito, ingresa a tu cuenta!
                  </h4>
                  <button className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white">
                    <Login></Login>
                  </button>
                </div>
              )}
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
