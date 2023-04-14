import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";

import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import CartCard from "./CartCard";
import { Tooltip } from "flowbite-react";
import LoadingCheckout from "./LoadingCheckout";
import LoadingCart from "./LoadingCart";

export default function Cart() {
  const [cartProducts, setCartProducts] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const { user } = useAuth0();
  let total = 0;
  const handleChange = () => {
    window.location.reload();
  };
  async function fetchData() {
    const response = await axios.get(
      `/product/getProductsFromUserShoppingCart?id=${user?.sub}`
    );

    const sortedProducts = response.data.sort((a, b) =>
      a.Product.model.localeCompare(b.Product.model)
    );
    setCartProducts(sortedProducts);

    response.data.forEach((product) => {
      if (product.Product?.ProductDiscount) {
        product.pricePerUnit =
          product.Product.price -
          (product.Product.price *
            product.Product.ProductDiscount.discountValue) /
            100;

        setTotalPrice(
          (total +=
            (product.Product.price -
              (product.Product.price *
                product.Product.ProductDiscount.discountValue) /
                100) *
            product.amount)
        );
      } else {
        product.pricePerUnit = product.Product.price;
        setTotalPrice((total += product.pricePerUnit * product.amount));
      }
    });
  }
  useEffect(() => {
    fetchData();
  }, [user?.sub]);

  return (
    <section>
      {cartProducts ? (
        <>
          <NavBar />
          <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div class="mx-auto max-w-3xl">
              <header class="text-center">
                <h1 class="text-xl font-thin font-mono text-gray-900 sm:text-3xl">
                  TU COMPRA
                </h1>
              </header>

              <div class="mt-8">
                <ul class="space-y-4">
                  {cartProducts ? (
                    cartProducts.map((cart) => {
                      console.log();
                      return (
                        <CartCard
                          setHandleChange={handleChange}
                          productID={cart.ProductId}
                          image={cart.Product.images[0]}
                          model={cart.Product.model}
                          priceXProduct={cart.pricePerUnit}
                          cantidad={cart.amount}
                          userId={user && user?.sub}
                          delete={cart.id}
                        />
                      );
                    })
                  ) : (
                    <></>
                  )}
                </ul>

                <div class="mt-8 flex justify-end border-t border-neutral-300 pt-8">
                  <div class="w-screen max-w-lg space-y-4">
                    <dl class="space-y-0.5 text-sm text-gray-700">
                      <div class="flex justify-between !text-base font-medium">
                        <dt>Total</dt>
                        <dd>{totalPrice}</dd>
                      </div>
                    </dl>

                    <div class="flex justify-end">
                      {cartProducts && cartProducts.length > 0 ? (
                        <a
                          href="/checkout"
                          class="block rounded bg-neutral-900 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                        >
                          Comprar
                        </a>
                      ) : (
                        <Tooltip
                          placement="bottom"
                          style="dark"
                          content="Agrega productos para poder comprar!"
                        >
                          <div class="block rounded  px-5 py-3 text-sm text-gray-100 transition bg-gray-600 cursor-pointer">
                            Comprar
                          </div>
                        </Tooltip>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <>
          <LoadingCart></LoadingCart>
        </>
      )}
    </section>
  );
}
