import React from "react";

export default function FiltersAndCards(props) {
  return (
    <section className="w-full h-96 flex">
      <div className="w-3/12  flex flex-col items-center bg-black">
        <h3 className="text-white">Filtros</h3>
      </div>
      <div className="w-9/12 flex flex-col items-center bg-slate-600">
        <h3 className="text-white">Cards</h3>
      </div>
    </section>
  );
}
