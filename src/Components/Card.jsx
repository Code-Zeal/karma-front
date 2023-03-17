export default function Card(props) {
  return (
    <div className="max-w-sm">
      <img src="" alt="imagen" />
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {/* Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport */}
          Nombre producto
        </h5>
      </a>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          $599
        </span>
        <a
          href="#"
          className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Ver detalles del producto
        </a>
      </div>
      <div>categoria</div>
    </div>
  );
}
