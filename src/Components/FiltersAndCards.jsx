import React from "react";

export default function FiltersAndCards(props) {
  console.log(props.info);

  let cache = [];
  let cacheStorage = [];
  let cacheRAM = [];

  return (
    <section className="w-full flex flex-col">
      <section className="flex items-center justify-end">
        <div className="w-9/12 flex justify-evenly ">
          <div className="flex flex-col">
            <select name="" id="">
              <option value="" selected disabled="true">
                Precio
              </option>
              <option value="">Mas Barato</option>
              <option value="">Mas Caro</option>
            </select>
          </div>
          <div className="flex flex-col">
            <select name="" id="">
              <option value="" selected disabled="true">
                Alfabetico
              </option>
              <option value="">A-z</option>
              <option value="">z-A</option>
            </select>
          </div>
        </div>
      </section>
      <section className="w-full h-96 flex">
        <div className="w-3/12  flex flex-col items-center bg-black">
          <h3 className="text-white">Filtros</h3>
          {props.info[0]?.Tablet && (
            <section className="flex flex-col">
              <select name="Marca" id="">
                <option value="default" selected disabled="true">
                  Marca
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {!cache.includes(el.brand) && <option>{el.brand}</option>}
                      {!cache.includes(el.brand) && cache.push(el.brand)}
                    </>
                  );
                })}
              </select>
              <select name="color" id="">
                <option value="default" selected disabled="true">
                  Color
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {el.Tablet.colors.map((color) => {
                        return (
                          <>
                            {!cache.includes(color) && <option>{color}</option>}
                            {!cache.includes(color) && cache.push(color)}
                          </>
                        );
                      })}
                    </>
                  );
                })}
              </select>
              <select name="almacenamiento" id="">
                <option value="default" selected disabled="true">
                  Almacenamiento
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {!cacheStorage.includes(el.Tablet.internalMemory) && (
                        <option>{el.Tablet.internalMemory}</option>
                      )}
                      {!cacheStorage.includes(el.Tablet.internalMemory) &&
                        cacheStorage.push(el.Tablet.internalMemory)}
                    </>
                  );
                })}
              </select>
              <select name="Memoria Ram" id="">
                <option value="default" selected disabled="true">
                  Memoria RAM
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {!cacheStorage.includes(el.Tablet.ramMemory) && (
                        <option>{el.Tablet.ramMemory}</option>
                      )}
                      {!cacheStorage.includes(el.Tablet.ramMemory) &&
                        cacheStorage.push(el.Tablet.ramMemory)}
                    </>
                  );
                })}
              </select>
              <select name="Tamaño de pantalla" id="">
                <option value="default" selected disabled="true">
                  Tamaño de pantalla
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {!cache.includes(el.Tablet.screenSize) && (
                        <option>{el.Tablet.screenSize}"</option>
                      )}
                      {!cache.includes(el.Tablet.screenSize) &&
                        cache.push(el.Tablet.screenSize)}
                    </>
                  );
                })}
              </select>
            </section>
          )}
          {props.info[0]?.Laptop && (
            <section className="flex flex-col">
              <select name="Marca" id="">
                <option value="default" selected disabled="true">
                  Marca
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {!cache.includes(el.brand) && <option>{el.brand}</option>}
                      {!cache.includes(el.brand) && cache.push(el.brand)}
                    </>
                  );
                })}
              </select>
              <select name="almacenamiento" id="">
                <option value="default" selected disabled="true">
                  Almacenamiento
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {!cacheStorage.includes(el.Laptop.internalMemory) && (
                        <option>{el.Laptop.internalMemory}</option>
                      )}
                      {!cacheStorage.includes(el.Laptop.internalMemory) &&
                        cacheStorage.push(el.Laptop.internalMemory)}
                    </>
                  );
                })}
              </select>
              <select name="Memoria Ram" id="">
                <option value="default" selected disabled="true">
                  Memoria RAM
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {!cacheRAM.includes(el.Laptop.ramMemory) && (
                        <option>{el.Laptop.ramMemory}</option>
                      )}
                      {!cacheRAM.includes(el.Laptop.ramMemory) &&
                        cacheRAM.push(el.Laptop.ramMemory)}
                    </>
                  );
                })}
              </select>
              <select name="Memoria Ram" id="">
                <option value="default" selected disabled="true">
                  Procesador
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {!cache.includes(el.Laptop.processor) && (
                        <option>{el.Laptop.processor}</option>
                      )}
                      {!cache.includes(el.Laptop.processor) &&
                        cache.push(el.Laptop.processor)}
                    </>
                  );
                })}
              </select>
            </section>
          )}
          {props.info[0]?.CellPhone && (
            <section className="flex flex-col">
              <select name="Marca" id="">
                <option value="default" selected disabled="true">
                  Marca
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {!cache.includes(el.brand) && <option>{el.brand}</option>}
                      {!cache.includes(el.brand) && cache.push(el.brand)}
                    </>
                  );
                })}
              </select>
              <select name="color" id="">
                <option value="default" selected disabled="true">
                  Color
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {el.CellPhone.colors.map((color) => {
                        return (
                          <>
                            {!cache.includes(color) && <option>{color}</option>}
                            {!cache.includes(color) && cache.push(color)}
                          </>
                        );
                      })}
                    </>
                  );
                })}
              </select>
              <select name="almacenamiento" id="">
                <option value="default" selected disabled="true">
                  Almacenamiento
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {!cacheStorage.includes(el.CellPhone.internalMemory) && (
                        <option>{el.CellPhone.internalMemory}</option>
                      )}
                      {!cacheStorage.includes(el.CellPhone.internalMemory) &&
                        cacheStorage.push(el.CellPhone.internalMemory)}
                    </>
                  );
                })}
              </select>
              <select name="Memoria Ram" id="">
                <option value="default" selected disabled="true">
                  Memoria RAM
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {!cacheRAM.includes(el.CellPhone.ram) && (
                        <option>{el.CellPhone.ram}</option>
                      )}
                      {!cacheRAM.includes(el.CellPhone.ram) &&
                        cacheRAM.push(el.CellPhone.ram)}
                    </>
                  );
                })}
              </select>
              <select name="Tamaño de pantalla" id="">
                <option value="default" selected disabled="true">
                  Camara Trasera
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {!cache.includes(el.CellPhone.mainCamera) && (
                        <option>{el.CellPhone.mainCamera}</option>
                      )}
                      {!cache.includes(el.CellPhone.mainCamera) &&
                        cache.push(el.CellPhone.mainCamera)}
                    </>
                  );
                })}
              </select>
            </section>
          )}
          {props.info[0]?.Television && (
            <section className="flex flex-col">
              <select name="Marca" id="">
                <option value="default" selected disabled="true">
                  Marca
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {!cache.includes(el.brand) && <option>{el.brand}</option>}
                      {!cache.includes(el.brand) && cache.push(el.brand)}
                    </>
                  );
                })}
              </select>
              <select name="almacenamiento" id="">
                <option value="default" selected disabled="true">
                  Tamaño de la pantalla
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {!cache.includes(el.Television.screenSize) && (
                        <option>{el.Television.screenSize}</option>
                      )}
                      {!cache.includes(el.Television.screenSize) &&
                        cache.push(el.Television.screenSize)}
                    </>
                  );
                })}
              </select>
              <select name="Memoria Ram" id="">
                <option value="default" selected disabled="true">
                  Resolución
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {!cache.includes(el.Television.typeResolution) && (
                        <option>{el.Television.typeResolution}</option>
                      )}
                      {!cache.includes(el.Television.typeResolution) &&
                        cache.push(el.Television.typeResolution)}
                    </>
                  );
                })}
              </select>
              <select name="Memoria Ram" id="">
                <option value="default" selected disabled="true">
                  Sistema operativo
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {!cache.includes(el.Television.systemOperating) && (
                        <option>{el.Television.systemOperating}</option>
                      )}
                      {!cache.includes(el.Television.systemOperating) &&
                        cache.push(el.Television.systemOperating)}
                    </>
                  );
                })}
              </select>
            </section>
          )}
        </div>
        <div className="w-9/12 flex flex-col items-center bg-slate-600">
          <h3 className="text-white">Cards</h3>
        </div>
      </section>
    </section>
  );
}
