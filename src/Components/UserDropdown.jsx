import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { UserIcon } from "@heroicons/react/24/outline";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./Logout";
import Login from "./Login";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function UserDropdown() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div class="block border-transparent p-3.5 hover:border-neutral-900">
      <Menu as="div" className="relative inline-block text-center">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900">
            <UserIcon
              className="-mr-1 h-5 w-5 text-neutral-900"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute top-12 -right-4  z-10 mt-2 w-56 origin-top-right rounded-sm bg-white shadow-lg ring-1 ring-black ring-opacity-100 focus:outline-none lg:uppercase font-mono">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {isAuthenticated ? <Logout></Logout> : <Login></Login>}
                  </a>
                )}
              </Menu.Item>
              <hr />
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/profile/orders"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {isAuthenticated ? "Mi Perfil" : <></>}
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
