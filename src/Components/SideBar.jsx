import {
  UserIcon,
  ShoppingBagIcon,
  IdentificationIcon,
  ClipboardIcon,
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
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <UserIcon className="h-6 w-6" />
                <span>Mi perfil</span>
              </a>
            </li>
            <li className="rounded-sm">
              <a
                href="/profile/orders"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <ShoppingBagIcon className="h-6 w-6" />
                <span>Ordenes</span>
              </a>
            </li>
            <li className="rounded-sm">
              <a
                href="/profile/data"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <IdentificationIcon className="h-6 w-6" />
                <span>Mis datos</span>
              </a>
            </li>
            <li className="rounded-sm">
              <a
                href="/profile/data"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <ClipboardIcon className="h-6 w-6" />
                <span>Panel de administrador</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
