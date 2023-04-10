import { Dropdown, Tooltip } from "flowbite-react";
import CartPopup from "./CartPopup";
import UserDropdown from "./UserDropdown";
import SearchBar from "./SearchBar";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import { useEffect } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const searchBarRef = useRef();

  useEffect(() => {
    window.location.hash = "logo";
  });

  return (
    <header aria-label="Site Header" class="border-b border-neutral-300">
      <div class="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
        <div class="flex items-center gap-4">
          <button
            type="button"
            className="p-2 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:hidden absolute z-10 bg-white w-full mt-2 border border-neutral-700 rounded-sm`}
            style={{ top: "3rem", transform: "translateY(0.5rem)" }}
          >
            <a
              href="/"
              className="font-bold font-mono block px-3 py-2 rounded-sm text-sm text-center text-neutral-900 hover:text-white hover:bg-neutral-900"
            >
              INICIO
            </a>
            <hr />
            <div className="flex font-bold font-mono px-3 py-2 rounded-sm text-sm text-center justify-center text-neutral-900 hover:text-white hover:bg-neutral-900">
              <Dropdown inline={true} label="CATEGORIAS" color="white">
                <a href="/shop/CellPhone">
                  <Dropdown.Item>Celulares</Dropdown.Item>
                </a>
                <a href="/shop/Laptop">
                  <Dropdown.Item>Laptops</Dropdown.Item>
                </a>
                <a href="/shop/Tablet">
                  <Dropdown.Item>Tablets</Dropdown.Item>
                </a>
                <a href="/shop/TV">
                  <Dropdown.Item>Televisores</Dropdown.Item>
                </a>
              </Dropdown>
            </div>
            <hr />
            <div className="flex font-bold font-mono px-3 py-2 rounded-sm text-sm text-center justify-center text-neutral-900 hover:text-white hover:bg-neutral-900">
              <a
                href="/search"
                class="font-bold font-mono block px-3 py-2 rounded-sm text-sm text-center text-neutral-900 hover:text-white hover:bg-neutral-900"
              >
                EXPLORAR
              </a>
            </div>
            <hr />
          </div>
          <a href="/" class="flex" id="logo">
            <span class="sr-only">Logo</span>
            <img
              src="https://res.cloudinary.com/dpjxt54q0/image/upload/v1678751228/KarmaBlack_xsfd2j.png"
              alt=""
              class="inline-block h-10 w-32"
            />
          </a>
        </div>

        <div class="flex flex-1 items-center justify-center gap-8">
          <nav
            aria-label="Site Nav"
            class="hidden lg:flex lg:gap-8 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-neutral-900 font-mono items-center justify-center"
          >
            <a
              href="/"
              class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-neutral-900"
            >
              Inicio
            </a>
            <a
              href="/search"
              class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-neutral-900"
            >
              Explorar
            </a>
            <Dropdown inline={true} label="CATEGORIAS" color="white">
              <a href="/shop/CellPhone">
                <Dropdown.Item>Celulares</Dropdown.Item>
              </a>
              <a href="/shop/Laptop">
                <Dropdown.Item>Laptops</Dropdown.Item>
              </a>
              <a href="/shop/Tablet">
                <Dropdown.Item>Tablets</Dropdown.Item>
              </a>
              <a href="/shop/TV">
                <Dropdown.Item>Televisores</Dropdown.Item>
              </a>
            </Dropdown>
          </nav>
        </div>

        <SearchBar ref={searchBarRef} />
        <div class="flex items-center justify-end">
          <div class="flex items-center">
            <div class="flex items-center divide-x divide-neutral-300 border-x border-neutral-300">
              <Tooltip
                placement="left"
                style="dark"
                content="Haz click para abrir el buscador!"
                className="w-[250px] text-center"
              >
                <div class="relative block border-transparent p-6 hover:border-neutral-900">
                  <MagnifyingGlassIcon
                    className="-mr-1 h-5 w-5 text-neutral-900 cursor-pointer transition-all duration-300 "
                    onClick={() => searchBarRef.current.togglePopup()}
                  />
                </div>
              </Tooltip>

              <CartPopup />

              <UserDropdown />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
