import { useState } from "react";
import {
  UserIcon,
  ShoppingBagIcon,
  IdentificationIcon,
  PlusCircleIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

export default function SideBar() {
  return (
    <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
      <div className="space-y-3">
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="rounded-sm">
              <a
                href="/profile"
                className="flex items-center p-2 space-x-3 rounded-sm hover:bg-neutral-900 hover:text-white"
              >
                <UserIcon className="h-6 w-6" />
                <span>Mi perfil</span>
              </a>
            </li>
            <li className="rounded-sm">
              <a
                href="/profile/orders"
                className="flex items-center p-2 space-x-3 rounded-sm hover:bg-neutral-900 hover:text-white"
              >
                <ShoppingBagIcon className="h-6 w-6" />
                <span>Ordenes</span>
              </a>
            </li>
            <li className="rounded-sm">
              <a
                href="/profile/data"
                className="flex items-center p-2 space-x-3 rounded-sm hover:bg-neutral-900 hover:text-white"
              >
                <IdentificationIcon className="h-6 w-6" />
                <span>Mis datos</span>
              </a>
            </li>
          </ul>

          {/* SOLO MOSTRAR SI EL USUARIO ES ADMIN */}
          <hr />

          <div className="m-2 text-center">
            Panel de administrador
            <hr className="m-2" />
            <div>
              Productos
              <ul className={`pt-2 pb-4 space-y-1 text-sm`}>
                <li>
                  <a
                    href="/admin/createproduct"
                    className="flex items-center p-2 space-x-3 rounded-sm hover:bg-neutral-900 hover:text-white"
                  >
                    <PlusCircleIcon className="h-6 w-6" />
                    <span>Agregar productos</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/admin/editproduct"
                    className="flex items-center p-2 space-x-3 rounded-sm hover:bg-neutral-900 hover:text-white"
                  >
                    <PencilSquareIcon className="h-6 w-6" />
                    <span>Editar productos</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}