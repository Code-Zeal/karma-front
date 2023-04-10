import React, { useEffect, useState } from "react";
import Card from "./Card";
import Footer from "./Footer";
import Paginated from "./Paginated";

export default function FiltersAndCards(props) {
  const [type, setType] = useState("");
  if (props.info[0]?.Tablet && type === "") {
    setType("Tablet");
  } else if (props.info[0]?.Laptop && type === "") {
    setType("Laptop");
  } else if (props.info[0]?.Television && type === "") {
    setType("Television");
  } else if (props.info[0]?.CellPhone && type === "") {
    setType("CellPhone");
  }

  const [cardsScreen, setcardsScreen] = useState("");
  console.log(cardsScreen);
  const [allCards, setAllCards] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(6);
  const indexOfLastRecipes = currentPage * recipesPerPage;
  const indexOfFirstRecipes = indexOfLastRecipes - recipesPerPage;
  const pagination = (pageNumber) => {
    resetFilters();
    setCurrentPage(pageNumber);
  };
  console.log(currentPage);

  useEffect(() => {
    setcardsScreen(props.info.slice(indexOfFirstRecipes, indexOfLastRecipes));
    setAllCards(props.info);
  }, [props.info, currentPage]);
  const [filter, setFilter] = useState({
    brand: "",
    internalMemory: "",
    ramMemory: "",
    screenSize: "",
    typeResolution: "",
    systemOperating: "",
    processor: "",
    mainCamera: "",
    color: "",
  });
  useEffect(() => {
    let copy2 = cardsScreen;
    if (filter.brand !== "") {
      copy2 = copy2.filter((el) => el.brand === filter.brand);
      setcardsScreen(copy2);
      setAllCards(copy2);
    }
    if (filter.internalMemory !== "") {
      copy2 = copy2.filter(
        (el) => el[type].internalMemory === filter.internalMemory
      );
      setcardsScreen(copy2);
      setAllCards(copy2);
    }
    if (filter.ramMemory !== "") {
      copy2 = copy2.filter((el) => el[type].ramMemory === filter.ramMemory);
      setcardsScreen(copy2);
      setAllCards(copy2);
    }
    if (filter.screenSize !== "") {
      copy2 = copy2.filter((el) => el[type].screenSize === filter.screenSize);
      setcardsScreen(copy2);
      setAllCards(copy2);
    }
    if (filter.typeResolution !== "") {
      copy2 = copy2.filter(
        (el) => el[type].typeResolution === filter.typeResolution
      );
      setcardsScreen(copy2);
      setAllCards(copy2);
    }
    if (filter.systemOperating !== "") {
      copy2 = copy2.filter(
        (el) => el[type].systemOperating === filter.systemOperating
      );
      setcardsScreen(copy2);
      setAllCards(copy2);
    }
    if (filter.processor !== "") {
      copy2 = copy2.filter((el) => el[type].processor === filter.processor);
      setcardsScreen(copy2);
      setAllCards(copy2);
    }
    if (filter.mainCamera !== "") {
      copy2 = copy2.filter((el) => el[type].mainCamera === filter.mainCamera);
      setcardsScreen(copy2);
      setAllCards(copy2);
    }
    if (filter.color !== "") {
      copy2 = copy2.filter((el) => el[type].colors.includes(filter.color));
      setcardsScreen(copy2);
      setAllCards(copy2);
    }
    if (
      filter.color === "" &&
      filter.mainCamera === "" &&
      filter.processor === "" &&
      filter.systemOperating === "" &&
      filter.typeResolution === "" &&
      filter.screenSize === "" &&
      filter.ramMemory === "" &&
      filter.internalMemory === "" &&
      filter.brand === ""
    ) {
      setcardsScreen(props.info.slice(indexOfFirstRecipes, indexOfLastRecipes));
      setAllCards(props.info);
    }
  }, [filter]);

  const handlerOrder = (event) => {
    let copyOrder = [...allCards];
    let value = event.target.value;
    copyOrder =
      value === "default"
        ? (copyOrder = props.info)
        : (copyOrder =
            value === "cheap"
              ? copyOrder.sort((a, b) => {
                  if (a.price < b.price) return -1;
                  if (a.price > b.price) return 1;
                  return 0;
                })
              : copyOrder.sort((a, b) => {
                  if (a.price < b.price) return 1;
                  if (a.price > b.price) return -1;
                  return 0;
                }));
    setcardsScreen(copyOrder.slice(indexOfFirstRecipes, indexOfLastRecipes));
    setAllCards(copyOrder);
  };

  const handlerFilter = (event) => {
    setcardsScreen(props.info);
    setAllCards(props.info);

    const property = event.target.name;
    let value = event.target.value;

    setFilter({
      ...filter,
      [property]: value,
    });
  };

  const resetFilters = () => {
    let section = document.getElementById(type);
    let ej = section.childNodes;
    [...ej].map((el) => (el.value = "default"));
    let order = document.getElementById("order");
    let selectsOrders = order.childNodes;
    [...selectsOrders].map((el) => (el.value = "default"));
    setFilter({
      brand: "",
      internalMemory: "",
      ramMemory: "",
      screenSize: "",
      typeResolution: "",
      systemOperating: "",
      processor: "",
      mainCamera: "",
      color: "",
    });
  };

  let cache = [];
  let cacheStorage = [];
  let cacheRAM = [];

  return (
    <section className="w-full flex flex-col">
      <section className="w-full flex pt-4">
        <div className="w-3/12  flex flex-col items-center">
          <section className="flex items-center justify-center pt-4">
            <div className="flex justify-evenly ">
              <div id="order" className="flex items-center mb-4">
                <label htmlFor="" className="pr-2">
                  Orden
                </label>
                <select
                  onChange={handlerOrder}
                  name="order"
                  id=""
                  className="border border-neutral-900"
                >
                  <option value="default" selected>
                    Más relevantes
                  </option>
                  <option value="cheap">Menor precio</option>
                  <option value="expensive">Mayor precio</option>
                </select>
              </div>
            </div>
          </section>
          {props.info[0]?.Tablet && (
            <section id="Tablet" className="flex flex-col m-4">
              <select
                onChange={handlerFilter}
                name="brand"
                id=""
                className="mb-4 border border-neutral-900"
              >
                <option value="default" selected disabled="true">
                  Marca
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {!cache.includes(el.brand) && (
                        <option value={el.brand}>{el.brand}</option>
                      )}
                      {!cache.includes(el.brand) && cache.push(el.brand)}
                    </>
                  );
                })}
              </select>
              <select
                onChange={handlerFilter}
                name="color"
                id=""
                className="mb-4 border border-neutral-900"
              >
                <option value="default" selected disabled="true">
                  Color
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {el.Tablet.colors.map((color) => {
                        return (
                          <>
                            {!cache.includes(color) && (
                              <option value={color}>{color}</option>
                            )}
                            {!cache.includes(color) && cache.push(color)}
                          </>
                        );
                      })}
                    </>
                  );
                })}
              </select>
              <select
                onChange={handlerFilter}
                name="internalMemory"
                id=""
                className="mb-4 border border-neutral-900"
              >
                <option value="default" selected disabled="true">
                  Almacenamiento
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {!cacheStorage.includes(el.Tablet.internalMemory) && (
                        <option value={el.Tablet.internalMemory}>
                          {el.Tablet.internalMemory}
                        </option>
                      )}
                      {!cacheStorage.includes(el.Tablet.internalMemory) &&
                        cacheStorage.push(el.Tablet.internalMemory)}
                    </>
                  );
                })}
              </select>
              <select
                onChange={handlerFilter}
                name="ramMemory"
                id=""
                className="mb-4 border border-neutral-900"
              >
                <option value="default" selected disabled="true">
                  Memoria RAM
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {!cacheStorage.includes(el.Tablet.ramMemory) && (
                        <option value={el.Tablet.ramMemory}>
                          {el.Tablet.ramMemory}
                        </option>
                      )}
                      {!cacheStorage.includes(el.Tablet.ramMemory) &&
                        cacheStorage.push(el.Tablet.ramMemory)}
                    </>
                  );
                })}
              </select>
              <select
                onChange={handlerFilter}
                name="screenSize"
                id=""
                className="border border-neutral-900"
              >
                <option value="default" selected disabled="true">
                  Tamaño de pantalla
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {!cache.includes(el.Tablet.screenSize) && (
                        <option value={el.Tablet.screenSize}>
                          {el.Tablet.screenSize}"
                        </option>
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
            <section id="Laptop" className="flex flex-col">
              <select
                onChange={handlerFilter}
                name="brand"
                id=""
                className="mb-4 border border-neutral-900"
              >
                <option value="default" selected disabled="true">
                  Marca
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {!cache.includes(el.brand) && (
                        <option value={el.brand}>{el.brand}</option>
                      )}
                      {!cache.includes(el.brand) && cache.push(el.brand)}
                    </>
                  );
                })}
              </select>
              <select
                onChange={handlerFilter}
                name="internalMemory"
                id=""
                className="mb-4 border border-neutral-900"
              >
                <option value="default" selected disabled="true">
                  Almacenamiento
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {!cacheStorage.includes(el.Laptop.internalMemory) && (
                        <option value={el.Laptop.internalMemory}>
                          {el.Laptop.internalMemory}
                        </option>
                      )}
                      {!cacheStorage.includes(el.Laptop.internalMemory) &&
                        cacheStorage.push(el.Laptop.internalMemory)}
                    </>
                  );
                })}
              </select>
              <select
                onChange={handlerFilter}
                name="ramMemory"
                id=""
                className="mb-4 border border-neutral-900"
              >
                <option value="default" selected disabled="true">
                  Memoria RAM
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {!cacheRAM.includes(el.Laptop.ramMemory) && (
                        <option value={el.Laptop.ramMemory}>
                          {el.Laptop.ramMemory}
                        </option>
                      )}
                      {!cacheRAM.includes(el.Laptop.ramMemory) &&
                        cacheRAM.push(el.Laptop.ramMemory)}
                    </>
                  );
                })}
              </select>
              <select
                onChange={handlerFilter}
                name="processor"
                id=""
                className="border border-neutral-900"
              >
                <option value="default" selected disabled="true">
                  Procesador
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {!cache.includes(el.Laptop.processor) && (
                        <option value={el.Laptop.processor}>
                          {el.Laptop.processor}
                        </option>
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
            <section id="CellPhone" className="sectionFilter flex flex-col">
              <select
                onChange={handlerFilter}
                name="brand"
                id=""
                className="mb-4 border border-neutral-900"
              >
                <option value="default" selected disabled="true">
                  Marca
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {!cache.includes(el.brand) && (
                        <option value={el.brand}>{el.brand}</option>
                      )}
                      {!cache.includes(el.brand) && cache.push(el.brand)}
                    </>
                  );
                })}
              </select>
              <select
                onChange={handlerFilter}
                name="color"
                id=""
                className="mb-4 border border-neutral-900"
              >
                <option value="default" selected disabled="true">
                  Color
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {el.CellPhone.colors.map((color) => {
                        return (
                          <>
                            {!cache.includes(color) && (
                              <option value={color}>{color}</option>
                            )}
                            {!cache.includes(color) && cache.push(color)}
                          </>
                        );
                      })}
                    </>
                  );
                })}
              </select>
              <select
                onChange={handlerFilter}
                name="internalMemory"
                id=""
                className="mb-4 border border-neutral-900"
              >
                <option value="default" selected disabled="true">
                  Almacenamiento
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {!cacheStorage.includes(el.CellPhone.internalMemory) && (
                        <option value={el.CellPhone.internalMemory}>
                          {el.CellPhone.internalMemory}
                        </option>
                      )}
                      {!cacheStorage.includes(el.CellPhone.internalMemory) &&
                        cacheStorage.push(el.CellPhone.internalMemory)}
                    </>
                  );
                })}
              </select>
              <select
                onChange={handlerFilter}
                name="ramMemory"
                id=""
                className="mb-4 border border-neutral-900"
              >
                <option value="default" selected disabled="true">
                  Memoria RAM
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {!cacheRAM.includes(el.CellPhone.ramMemory) && (
                        <option value={el.CellPhone.ramMemory}>
                          {el.CellPhone.ramMemory}
                        </option>
                      )}
                      {!cacheRAM.includes(el.CellPhone.ramMemory) &&
                        cacheRAM.push(el.CellPhone.ramMemory)}
                    </>
                  );
                })}
              </select>
              <select
                onChange={handlerFilter}
                name="mainCamera"
                id=""
                className="border border-neutral-900"
              >
                <option value="default" selected disabled="true">
                  Camara Trasera
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {!cache.includes(el.CellPhone.mainCamera) && (
                        <option value={el.CellPhone.mainCamera}>
                          {el.CellPhone.mainCamera}
                        </option>
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
            <section id="Television" className="flex flex-col">
              <select
                onChange={handlerFilter}
                name="brand"
                id=""
                className="mb-4 border border-neutral-900"
              >
                <option value="default" selected disabled="true">
                  Marca
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {!cache.includes(el.brand) && (
                        <option value={el.brand}>{el.brand}</option>
                      )}
                      {!cache.includes(el.brand) && cache.push(el.brand)}
                    </>
                  );
                })}
              </select>
              <select
                onChange={handlerFilter}
                name="screenSize"
                id=""
                className="mb-4 border border-neutral-900"
              >
                <option value="default" selected disabled="true">
                  Tamaño de la pantalla
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {!cache.includes(el.Television.screenSize) && (
                        <option value={el.Television.screenSize}>
                          {el.Television.screenSize}
                        </option>
                      )}
                      {!cache.includes(el.Television.screenSize) &&
                        cache.push(el.Television.screenSize)}
                    </>
                  );
                })}
              </select>
              <select
                onChange={handlerFilter}
                name="typeResolution"
                id=""
                className="mb-4 border border-neutral-900"
              >
                <option value="default" selected disabled="true">
                  Resolución
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {!cache.includes(el.Television.typeResolution) && (
                        <option value={el.Television.typeResolution}>
                          {el.Television.typeResolution}
                        </option>
                      )}
                      {!cache.includes(el.Television.typeResolution) &&
                        cache.push(el.Television.typeResolution)}
                    </>
                  );
                })}
              </select>
              <select
                onChange={handlerFilter}
                name="systemOperating"
                id=""
                className="mb-4 border border-neutral-900"
              >
                <option value="default" selected disabled="true">
                  Sistema operativo
                </option>
                {props.info.map((el) => {
                  return (
                    <>
                      {!cache.includes(el.Television.systemOperating) && (
                        <option value={el.Television.systemOperating}>
                          {el.Television.systemOperating}
                        </option>
                      )}
                      {!cache.includes(el.Television.systemOperating) &&
                        cache.push(el.Television.systemOperating)}
                    </>
                  );
                })}
              </select>
            </section>
          )}
          <button
            onClick={resetFilters}
            className="bg-white py-1 px-3 m-4 border border-neutral-900"
          >
            Limpiar filtros
          </button>
        </div>
        <div className="w-9/12 flex flex-col">
          <div className="flex row-auto flex-wrap">
            {cardsScreen &&
              cardsScreen.map((el) => {
                return <Card card={el}></Card>;
              })}
          </div>
        </div>
      </section>
      <div className="w-9/12 ml-auto flex justify-center items-center">
        <Paginated
          recipesPerPage={recipesPerPage}
          allRecipes={allCards && allCards.length}
          pagination={pagination}
          currentRecipes={cardsScreen}
          currentPage={currentPage}
        ></Paginated>
      </div>
    </section>
  );
}
