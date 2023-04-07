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

export default function Checkout() {
  const [isDataComplete, setisDataComplete] = useState(null);
  const [cartProducts, setCartProducts] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const { user } = useAuth0();
  const idUser = user?.sub;
  let total = 0;
  const [myData, setMyData] = useState("");
  console.log(myData);
  const Comprobador = async () => {
    await getData();
    if (
      myData?.address !== "none" ||
      myData?.city !== "none" ||
      myData?.phoneNumber !== "none" ||
      myData?.lastName !== "none" ||
      myData?.name !== "none"
    ) {
      setisDataComplete(true);
      const res = await axios.post("http://localhost:4000/order/createOrder", {
        idUser: user?.sub,
      });
      setMyData({
        ...myData,
        idOrder: res.data.id,
      });
    } else {
      setisDataComplete(false);
    }
  };

  const getData = async () => {
    const res = await axios.get(
      `http://localhost:4000/user/getUser?id=${user?.sub}`
    );
    setMyData(res.data);
  };
  useEffect(() => {
    if (user?.sub) {
      getData();
    }
  }, [user?.sub]);
  useEffect(() => {
    async function fetchData(id) {
      const response = await axios.get(
        `http://localhost:4000/product/getProductsFromUserShoppingCart?id=${id}`
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

      <div class="mx-auto h-[600px]  max-w-screen-2xl w-full flex  justify-between">
        <div class="bg-white border-[#D4D4D4] border-r-[1px] py-12 md:py-10">
          <div class="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
            <div>
              <p class="text-2xl font-medium tracking-tight text-gray-900">
                TOTAL: ${totalPrice}
              </p>

              <p class="mt-1 text-sm text-gray-600">Por la compra de</p>
            </div>

            <div className="">
              <div class="flow-root">
                <ul class="-my-4 divide-y divide-gray-100">
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
          <button onClick={Comprobador}>Ver metodos de pago</button>
          {isDataComplete === false ? (
            <>
              <h3 className="text-red-600 font-bold text-lg">
                Tienes datos que no has rellenado aún, por favor completa todos
                tus datos y vuelve a presionar "Ver metodos de pago"
              </h3>
            </>
          ) : (
            <>
              {isDataComplete === null ? (
                <></>
              ) : (
                <>
                  {isDataComplete === true ? (
                    <>
                      Metodos de Pago
                      {/* <MPButton
                        idUser={user?.sub}
                        idOrder={myData.idOrder && myData.idOrder}
                      ></MPButton> */}
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
      <Footer />
    </section>
  );
}
