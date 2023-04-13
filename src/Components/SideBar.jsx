import {
  UserIcon,
  ShoppingBagIcon,
  IdentificationIcon,
  InboxIcon,
  PlusCircleIcon,
  PencilSquareIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import { userIsAdmin } from "../Redux/Actions";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function SideBar() {
  const dispatch = useDispatch();
  const { user } = useAuth0();
  const idUser = user?.sub;
  const isAdmin = useSelector((state) => state.userIsAdmin);

  useEffect(() => {
    dispatch(userIsAdmin(idUser));
  });

  console.log(isAdmin);

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

          {isAdmin === "admin" && (
            <div className="m-2 text-center">
              Panel de administrador
              <hr className="m-2" />
              <div>
                Comentarios
                <ul className={`pt-2 pb-4 space-y-1 text-sm`}>
                  <li>
                    <a
                      href="/admin/feedbacks"
                      className="flex items-center p-2 space-x-3 rounded-sm hover:bg-neutral-900 hover:text-white"
                    >
                      <InboxIcon className="h-6 w-6" />
                      <span>Bandeja de entrada</span>
                    </a>
                  </li>
                </ul>
              </div>
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
              <div>
                Pedidos
                <ul className={`pt-2 pb-4 space-y-1 text-sm`}>
                  <li>
                    <a
                      href="/admin/orderhistory"
                      className="flex items-center p-2 space-x-3 rounded-sm hover:bg-neutral-900 hover:text-white"
                    >
                      <ClipboardDocumentListIcon className="h-6 w-6" />
                      <span>Historial de pedidos</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                Ofertas
                <ul className={`pt-2 pb-4 space-y-1 text-sm`}>
                  <li>
                    <a
                      href="/admin/addDiscount"
                      className="flex items-center p-2 space-x-3 rounded-sm hover:bg-neutral-900 hover:text-white"
                    >
                      <ClipboardDocumentListIcon className="h-6 w-6" />
                      <span>Agregar oferta a productos</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/admin/allDiscount"
                      className="flex items-center p-2 space-x-3 rounded-sm hover:bg-neutral-900 hover:text-white"
                    >
                      <ClipboardDocumentListIcon className="h-6 w-6" />
                      <span>Productos en oferta</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
