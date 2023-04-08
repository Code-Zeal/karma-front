import { useEffect, useState } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Transition } from "@headlessui/react";
import { useAuth0 } from "@auth0/auth0-react";
import CartCard from "./CartCard";
import axios from "axios";
import { Tooltip } from "flowbite-react";

export default function CartPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState(null);
  const { user } = useAuth0();
  const idUser = user?.sub;

  function togglePopup() {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    async function fetchData(id) {
      const response = await axios.get(
        `http://localhost:4000/product/getProductsFromUserShoppingCart?id=${id}`
      );
      const data = response.data;
      setCartProducts(data);
    }
    fetchData(idUser);
  }, [user?.sub, isOpen]);

  return (
    <span>
      <button
        class="block border-transparent p-6 hover:border-neutral-900"
        onClick={togglePopup}
      >
        <ShoppingBagIcon className="-mr-1 h-5 w-5 text-neutral-900" />
        <span class="sr-only">Cart</span>
      </button>
      {isOpen && (
        <div class="fixed inset-0 flex items-center justify-center z-50">
          <div
            class="w-screen max-w-sm border border-gray-600 bg-gray-100 p-4 pt-4 sm:p-6 lg:p-8"
            aria-modal="true"
            role="dialog"
            tabindex="-1"
          >
            <button
              class="relative ml-auto -mr-4 block text-gray-600 transition hover:scale-110"
              onClick={togglePopup}
            >
              <span class="sr-only">Close cart</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div class="mt-6 space-y-6">
              <ul class="space-y-4">
                {cartProducts ? (
                  cartProducts.map((cart) => {
                    return (
                      <li class="flex items-center gap-4">
                        <img
                          src={cart.Product.images[0]}
                          alt=""
                          class="h-16 w-16 rounded object-cover"
                        />

                        <div>
                          <h3 class="text-sm text-gray-900">
                            {cart.Product.model}
                          </h3>
                          <p>{cart.amount}</p>

                          <dl class="mt-0.5 space-y-px text-[10px] text-gray-600"></dl>
                        </div>
                      </li>
                    );
                  })
                ) : (
                  <></>
                )}
              </ul>

              <div class="space-y-4 text-center flex flex-col items-stretch">
                <a
                  href="/cart"
                  class="block rounded border border-neutral-600 px-5 py-3 text-sm text-neutral-600 transition hover:ring-1 hover:ring-neutral-600"
                >
                  Ver mi carrito ({cartProducts?.length})
                </a>
                {cartProducts && cartProducts.length < 1 ? (
                  <div class=" rounded  px-5 py-3 text-sm text-gray-100 transition bg-neutral-600 flex w-full items-center justify-center cursor-pointer">
                    <Tooltip
                      placement="bottom"
                      style="dark"
                      content="Agrega productos para poder comprar!"
                    >
                      Comprar
                    </Tooltip>
                  </div>
                ) : (
                  <a
                    href="/checkout"
                    class="block rounded bg-neutral-900 px-5 py-3 text-sm text-gray-100 transition hover:bg-neutral-600"
                  >
                    Comprar
                  </a>
                )}

                <a
                  class="inline-block text-sm text-neutral-600 underline underline-offset-4 transition hover:text-gray-800 cursor-pointer"
                  onClick={togglePopup}
                >
                  Seguir comprando
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </span>
  );
}
