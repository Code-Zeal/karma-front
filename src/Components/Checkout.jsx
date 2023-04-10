import NavBar from "./NavBar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import CartCard from "./CartCard";
import CheckOutCard from "./CheckOutCard";
import MyData from "./MyData";
import MyDataCheckOut from "./MyDataCheckOut";
import MPButton from "./ButtonMercadoPago";
import PPButton from "./ButtonPaypal";

export default function Checkout() {
  const [isDataComplete, setisDataComplete] = useState(null);
  const [cartProducts, setCartProducts] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [idOrder, setIdOrder] = useState(null);
  function getIdOrdenCreada(orders) {
    for (let i = 0; i < orders.length; i++) {
      if (
        orders[i].orderStatus === "Orden Creada" ||
        orders[i].orderStatus === "Procesando Orden"
      ) {
        return orders[i].id;
      }
    }
    return null; // Si no se encuentra ninguna orden con orderStatus "Orden Creada"
  }

  const { user } = useAuth0();
  const idUser = user?.sub;
  let total = 0;
  const [myData, setMyData] = useState("");
  const getDataCheck = async () => {
    const res = await axios.get(`/user/getUser?id=${user?.sub}`);
    setMyData(res.data);
    if (
      res.data?.address !== "none" ||
      res.data?.city !== "none" ||
      res.data?.phoneNumber !== "none" ||
      res.data?.lastName !== "none" ||
      res.data?.name !== "none"
    ) {
      setisDataComplete(true);
      try {
        const res = await axios.post("/order/createOrder", {
          idUser: user?.sub,
        });
        setIdOrder(res.data.id);
      } catch (error) {
        const resId = await axios.get(`/user/getOrdersByUserId?id=${user.sub}`);
        console.log(resId.data.Orders);
        setIdOrder(getIdOrdenCreada(resId.data.Orders));
      }
    } else {
      setisDataComplete(false);
    }
  };

  const getData = async () => {
    const res = await axios.get(`/user/getUser?id=${user?.sub}`);
    setMyData(res.data);
  };
  useEffect(() => {
    if (user?.sub) {
      getData();
    }
  }, [user?.sub]);
  console.log(idOrder);
  useEffect(() => {
    async function fetchData(id) {
      const response = await axios.get(
        `/product/getProductsFromUserShoppingCart?id=${id}`
      );
      const data = response.data;
      setCartProducts(data);

      data.forEach((product) => {
        product.pricePerUnit = product.Product.price * product.amount;
        return (total += product.pricePerUnit);
      });
      setTotalPrice(total);
    }
    fetchData(idUser);
  }, [user?.sub, total]);
  return (
    <section>
      <NavBar />
      {cartProducts && cartProducts.length < 1 ? (
        <></>
      ) : (
        <div class="mx-auto h-[600px]  max-w-screen-2xl w-full flex  justify-between">
          <div class="bg-white border-[#D4D4D4] border-r-[1px] py-12 w-[50%] md:py-10">
            <div class="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
              <div>
                <p class="text-2xl font-thin tracking-tight text-black">
                  TOTAL: ${totalPrice}
                </p>

                <p class="mt-1 text-sm font-thin text-black">
                  Por la compra de
                </p>
              </div>

              <div className="">
                <div class="flow-root">
                  <ul class=" divide-gray-100">
                    {cartProducts?.map((product) => {
                      return (
                        <CheckOutCard
                          images={product.Product.images[0]}
                          amount={product.amount}
                          model={product.Product.model}
                          priceXProduct={product.pricePerUnit}
                        ></CheckOutCard>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white w-full flex flex-col items-center justify-center">
            <MyDataCheckOut></MyDataCheckOut>
            <button
              className="m-2 bg-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm hover:bg-neutral-900 hover:text-white"
              onClick={getDataCheck}
            >
              Ver metodos de pago
            </button>
            <div className="flex w-full justify-evenly">
              {isDataComplete === false ? (
                <div className="flex justify-center items-center">
                  <h3 className="text-red-600 font-normal text-md text-center">
                    Tienes datos que no has rellenado aún, por favor completa
                    todos tus datos y vuelve a presionar "Ver metodos de pago"
                  </h3>
                </div>
              ) : (
                <>
                  {isDataComplete === null ? (
                    <></>
                  ) : (
                    <>
                      {isDataComplete === true ? (
                        <>
                          {idOrder && (
                            <div className="my-2">
                              <MPButton
                                idOrder={idOrder}
                                idUser={user?.sub}
                              ></MPButton>
                            </div>
                          )}
                          {idOrder && (
                            <div className="my-2">
                              <PPButton
                                idOrder={idOrder}
                                idUser={user?.sub}
                              ></PPButton>
                            </div>
                          )}
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </section>
  );
}
