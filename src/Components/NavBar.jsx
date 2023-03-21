import { Dropdown } from "flowbite-react";
import CartPopup from "./CartPopup";
import UserDropdown from "./UserDropdown";
import {
  ShoppingBagIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate, redirect, NavLink } from "react-router-dom";
import { Router } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const navegador = () => {
    navigate("/shop/CellPhone");
    window.location.reload();
  };
  return (
    <header aria-label="Site Header" class="border-b border-neutral-300">
      <div class="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
        <div class="flex items-center gap-4">
          <button type="button" class="p-2 lg:hidden">
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <a href="/" class="flex">
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
              href="/explore"
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
            <a
              href="/contact"
              class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-neutral-900"
            >
              Contacto
            </a>
          </nav>
        </div>

        <div class="flex items-center justify-end">
          <div class="flex items-center">
            <div class="flex items-center divide-x divide-neutral-300 border-x border-neutral-300">
              <span>
                <a
                  href="/search"
                  class="block border-transparent p-6 hover:border-neutral-900"
                >
                  <MagnifyingGlassIcon className="-mr-1 h-5 w-5 text-neutral-900" />
                  <span class="sr-only"> Search </span>
                </a>
              </span>

              <CartPopup />

              <span>
                <div class="block border-transparent p-3.5 hover:border-neutral-900">
                  <UserDropdown />
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
