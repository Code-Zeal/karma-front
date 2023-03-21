import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Checkout() {
  return (
    <section>
      <NavBar />
      <h1 class="sr-only">Checkout</h1>

      <div class="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
        <div class="bg-gray-50 py-12 md:py-24">
          <div class="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
            <div class="flex items-center gap-4">
              <span class="h-10 w-10 rounded-full bg-blue-700"></span>

              <h2 class="font-medium text-gray-900">Nombre del usuario</h2>
            </div>

            <div>
              <p class="text-2xl font-medium tracking-tight text-gray-900">
                $99.99
              </p>

              <p class="mt-1 text-sm text-gray-600">Por la compra de</p>
            </div>

            <div>
              <div class="flow-root">
                <ul class="-my-4 divide-y divide-gray-100">
                  <li class="flex items-center gap-4 py-4">
                    <img
                      src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                      alt=""
                      class="h-16 w-16 rounded object-cover"
                    />

                    <div>
                      <h3 class="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                      <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                          <dt class="inline">Size:</dt>
                          <dd class="inline">XXS</dd>
                        </div>

                        <div>
                          <dt class="inline">Color:</dt>
                          <dd class="inline">White</dd>
                        </div>
                      </dl>
                    </div>
                  </li>

                  <li class="flex items-center gap-4 py-4">
                    <img
                      src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                      alt=""
                      class="h-16 w-16 rounded object-cover"
                    />

                    <div>
                      <h3 class="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                      <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                          <dt class="inline">Size:</dt>
                          <dd class="inline">XXS</dd>
                        </div>

                        <div>
                          <dt class="inline">Color:</dt>
                          <dd class="inline">White</dd>
                        </div>
                      </dl>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white py-12 md:py-24">
          <div class="mx-auto max-w-lg px-4 lg:px-8">
            <form class="grid grid-cols-6 gap-4">
              <div class="col-span-3">
                <label class="block text-xs font-medium text-gray-700">
                  Nombre
                </label>

                <input
                  type="text"
                  class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </div>

              <div class="col-span-3">
                <label class="block text-xs font-medium text-gray-700">
                  Apellido
                </label>

                <input
                  type="text"
                  class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </div>

              <div class="col-span-6">
                <label class="block text-xs font-medium text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </div>

              <div class="col-span-6">
                <label class="block text-xs font-medium text-gray-700">
                  Teléfono
                </label>

                <input
                  type="tel"
                  class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </div>

              <div class="col-span-6">
                <label class="block text-xs font-medium text-gray-700">
                  País
                </label>

                <select class="relative mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm">
                  <option>Argentina</option>
                  <option>Brasil</option>
                  <option>Chile</option>
                  <option>Colombia</option>
                  <option>Perú</option>
                  <option>Venezuela</option>
                </select>
              </div>

              <div class="col-span-6">
                <label class="block text-xs font-medium text-gray-700">
                  Estado/Provincia/Región
                </label>

                <input
                  type="text"
                  class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </div>

              <div class="col-span-6">
                <label class="block text-xs font-medium text-gray-700">
                  Localidad
                </label>

                <input
                  type="text"
                  class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </div>

              <div class="col-span-6">
                <label class="block text-xs font-medium text-gray-700">
                  Dirección
                </label>

                <input
                  type="text"
                  class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </div>

              <div class="col-span-6">
                <button class="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg">
                  Pagar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
