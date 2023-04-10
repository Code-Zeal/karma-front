import React from "react";

export default function Paginated({
  recipesPerPage,
  allRecipes,
  pagination,
  currentPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        <li className="bg-azulOscuro p-2 rounded-lg">
          {pageNumbers?.map((number, index) => (
            <button
              className={
                currentPage === index + 1
                  ? "hover:bg-white bg-neutral-900 text-white border border-neutral-900 hover:text-neutral-900 py-2 px-4 rounded-sm mr-2"
                  : " bg-white hover:bg-neutral-900 hover:text-white border border-neutral-900 text-neutral-900 py-2 px-4 rounded-sm mr-2"
              }
              key={`pagina${index}`}
              onClick={() => pagination(number)}
            >
              {number}
            </button>
          ))}
        </li>
      </ul>
    </nav>
  );
}
