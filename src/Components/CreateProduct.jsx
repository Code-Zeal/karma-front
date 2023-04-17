import axios from "axios";
import { Carousel } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import SideBar from "./SideBar";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";

const CreateProduct = (props) => {
  const notify = () =>
    toast.success(`Producto creado correctamente`, {
      icon: false,
      toastId: "success",
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const errorNotify = () =>
    toast.error(
      "Ha ocurrido un error, verifica que los datos son correctos e intente de nuevo",
      {
        icon: false,
        toastId: "error",
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });
  const onSubmit = async (data) => {
    console.log(data);
    if (category === "Celular") {
      let newData = {
        ...data,
        colors: data.colors.split(" "),
        price: parseInt(data.price),
        stock: parseInt(data.stock),
        images: someData.images,
      };

      try {
        const res = await axios.post("/cellPhone/createCellPhone", newData);
        if (res.status === 200) {
          console.log(1);
          reset();
          setSomeData({
            colors: [],
            images: [],
          });
          notify();
        }
      } catch (error) {
        errorNotify();
      }
    } else if (category === "TV") {
      let newData = {
        ...data,
        price: parseInt(data.price),
        stock: parseInt(data.stock),
        images: someData.images,
      };

      try {
        console.log(newData);
        const res = await axios.post("/tv/createTelevision", newData);
        console.log(res);
        if (res.status === 200) {
          reset();
          setSomeData({
            colors: [],
            images: [],
          });
          notify();
        }
      } catch (error) {
        errorNotify();
      }
    } else if (category === "Tablet") {
      let newData = {
        ...data,
        screenSize: parseInt(data.screenSize),
        colors: data.colors.split(" "),
        price: parseInt(data.price),
        stock: parseInt(data.stock),
        images: someData.images,
      };

      try {
        const res = await axios.post("/tablet/createTablet", newData);
        console.log(res);
        if (res.status === 200) {
          reset();
          setSomeData({
            colors: [],
            images: [],
          });
          notify();
        }
      } catch (error) {
        errorNotify();
      }
    } else if (category === "Laptop") {
      let newData = {
        ...data,
        price: parseInt(data.price),
        stock: parseInt(data.stock),
        images: someData.images,
      };

      try {
        console.log(newData);
        const res = await axios.post("/laptop/createLaptop", newData);
        console.log(res);
        if (res.status === 200) {
          reset();
          setSomeData({
            colors: [],
            images: [],
          });
          notify();
        }
      } catch (error) {
        errorNotify();
      }
    }
  };

  const [category, setCategory] = useState("");
  const [someData, setSomeData] = useState({
    colors: [],
    images: [],
  });

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dx2me9gqm",
        uploadPreset: "hauiebsf",
      },
      function (error, result) {
        if (result.event === "success") {
          let newArray = someData.images;
          newArray.push(result.info.secure_url);
          setSomeData({
            ...someData,
            images: newArray,
          });
        }
      }
    );
  }, [someData]);
  console.log(someData);

  const handlerCategory = (event) => {
    setCategory(event.target.value);
    reset();
    setSomeData({
      images: [],
      colors: [],
    });
  };
  function deleteArray(index) {
    const newArray = [...someData.images]; // Creamos una copia del array original
    newArray.splice(index, 1); // Borramos el elemento correspondiente al índice indicado
    console.log(newArray);
    setSomeData({
      ...someData,
      images: newArray,
    });
  }
  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className="container mx-auto mt-12">
          <div className="bg-white w-full rounded-lg flex flex-col items-center justify-center">
            <div className="w-full mt-4 flex items-start justify-evenly">
              <div>
                <select
                  className="rounded-sm"
                  onChange={handlerCategory}
                  name="Categoria"
                  id=""
                >
                  <option selected disabled="true" value="">
                    Categoria
                  </option>
                  <option value="Celular">Celular</option>
                  <option value="Tablet">Tablet</option>
                  <option value="TV">TV</option>
                  <option value="Laptop">Laptop</option>
                </select>
              </div>
              {category !== "" && (
                <button
                  className="border bg-white border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white py-1 px-3 text-lg rounded-sm font-mono"
                  onClick={() => widgetRef.current.open()}
                >
                  Subir imagenes
                </button>
              )}

              <div className="rounded-sm w-[400px] h-[400px] items-center flex flex-col">
                {category !== "" && (
                  <>
                    {someData.images.length !== 0 && (
                      <Carousel
                        leftControl={
                          <div className="bg-white rounded-full h-12 w-12">
                            <ArrowLeftCircleIcon />
                          </div>
                        }
                        rightControl={
                          <div className="bg-white rounded-full h-12 w-12">
                            <ArrowRightCircleIcon />
                          </div>
                        }
                        indicators={false}
                      >
                        {someData &&
                          someData.images.map((image, index) => {
                            return (
                              <div className="flex flex-col w-full h-full justify-center items-center">
                                <img
                                  className="object-contain h-[350px] items-center justify-center"
                                  src={image}
                                  alt=""
                                />
                                <button
                                  className="font-thin text-base bg-red-600 w-[130px] rounded-md my-4 text-white"
                                  onClick={() => deleteArray(index)}
                                >
                                  Borrar imagen
                                </button>
                              </div>
                            );
                          })}
                      </Carousel>
                    )}
                  </>
                )}
              </div>
            </div>
            {category === "Celular" && (
              <form
                id="cellPhone"
                onSubmit={handleSubmit(onSubmit)}
                className="flex w-full
            flex-col items-center justify-center"
              >
                <div className="w-full flex m-2 justify-evenly items-center">
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">Modelo</label>
                    <input
                      autocomplete="off"
                      name="model"
                      {...register("model", { required: true })}
                      className={
                        errors.model
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                      }
                      placeholder="Modelo, Ej: 'Y9A 2019'"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">Marca</label>
                    <input
                      autocomplete="off"
                      name="brand"
                      {...register("brand", { required: true })}
                      className={
                        errors.brand
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                      }
                      placeholder="Marca, Ej: 'Huawei'"
                      type="text"
                    />
                  </div>
                </div>
                <div className="w-full flex m-2 justify-evenly">
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">Descripción</label>
                    <input
                      autocomplete="off"
                      {...register("description", { required: true })}
                      name="description"
                      className={
                        errors.description
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                      }
                      placeholder="Descripción del producto"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">Precio</label>
                    <input
                      autocomplete="off"
                      {...register("price", { required: true })}
                      name="price"
                      className={
                        errors.price
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                      }
                      placeholder="Precio por unidad, Ej: '300'"
                      type="number"
                    />
                  </div>
                </div>
                <div className="w-full flex m-2 justify-evenly">
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">Inventario</label>
                    <input
                      autocomplete="off"
                      {...register("stock", { required: true })}
                      name="stock"
                      className={
                        errors.stock
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                      }
                      placeholder="Inventario del producto, Ej: '13'"
                      type="number"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">Memoria RAM</label>
                    <input
                      autocomplete="off"
                      {...register("ramMemory", { required: true })}
                      name="ramMemory"
                      className={
                        errors.ramMemory
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                      }
                      placeholder="Memoria Ram, Ej: '4GB'"
                      type="text"
                    />
                  </div>
                </div>
                <div className="w-full flex m-2 justify-evenly">
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">
                      Memoria interna
                    </label>
                    <input
                      autocomplete="off"
                      {...register("internalMemory", { required: true })}
                      name="internalMemory"
                      className={
                        errors.internalMemory
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                      }
                      placeholder="Memoria Interna, Ej: '128GB'"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">
                      Camara Principal
                    </label>
                    <input
                      autocomplete="off"
                      {...register("mainCamera", { required: true })}
                      name="mainCamera"
                      className={
                        errors.mainCamera
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                      }
                      placeholder="Camara Principal, Ej: '64MP'"
                      type="text"
                    />
                  </div>
                </div>
                <div className="w-full flex m-2 justify-evenly">
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">Colores</label>
                    <input
                      autocomplete="off"
                      {...register("colors", { required: true })}
                      name="colors"
                      className={
                        errors.colors
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                      }
                      placeholder="Colores Ej: 'Blanco Rojo Negro'"
                      type="text"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="border bg-white border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white py-1 px-3 text-lg rounded-sm font-mono m-4"
                >
                  Agregar Producto
                </button>
              </form>
            )}
            {category === "Tablet" && (
              <form
                id="Tablet"
                onSubmit={handleSubmit(onSubmit)}
                className="flex w-full
            flex-col items-center justify-center"
              >
                <div className="w-full flex m-2 justify-evenly items-center">
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">Modelo</label>
                    <input
                      autocomplete="off"
                      name="model"
                      {...register("model", { required: true })}
                      className={
                        errors.model
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                      }
                      placeholder="Modelo, Ej: 'GalaxyTab S8 Ultra'"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">Marca</label>
                    <input
                      autocomplete="off"
                      name="brand"
                      {...register("brand", { required: true })}
                      className={
                        errors.brand
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                      }
                      placeholder="Marca, Ej: 'Samsung'"
                      type="text"
                    />
                  </div>
                </div>
                <div className="w-full flex m-2 justify-evenly">
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">Descripción</label>
                    <input
                      autocomplete="off"
                      {...register("description", { required: true })}
                      name="description"
                      className={
                        errors.description
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                      }
                      placeholder="Descripción del producto"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">Precio</label>
                    <input
                      autocomplete="off"
                      {...register("price", { required: true })}
                      name="price"
                      className={
                        errors.price
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                      }
                      placeholder="Precio por unidad, Ej: '520'"
                      type="number"
                    />
                  </div>
                </div>
                <div className="w-full flex m-2 justify-evenly">
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">
                      Tamaño de pantalla
                    </label>
                    <input
                      autocomplete="off"
                      {...register(
                        "screenSize",

                        { min: 1, max: 999 }
                      )}
                      name="screenSize"
                      className={
                        errors.screenSize
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600 placeholder:text-sm"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600 placeholder:text-sm"
                      }
                      placeholder="Tamaño de pantalla en pulgadas, Ej: '12'"
                      type="number"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">Memoria RAM</label>
                    <input
                      autocomplete="off"
                      {...register("ramMemory", { required: true })}
                      name="ramMemory"
                      className={
                        errors.ramMemory
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                      }
                      placeholder="Memoria Ram, Ej: '12GB'"
                      type="text"
                    />
                  </div>
                </div>
                <div className="w-full flex m-2 justify-evenly">
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">
                      Memoria interna
                    </label>
                    <input
                      autocomplete="off"
                      {...register("internalMemory", { required: true })}
                      name="internalMemory"
                      className={
                        errors.internalMemory
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                      }
                      placeholder="Memoria Interna, Ej: '256GB'"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">
                      Camara principal
                    </label>
                    <input
                      autocomplete="off"
                      {...register("mainCamera", { required: true })}
                      name="mainCamera"
                      className={
                        errors.mainCamera
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                      }
                      placeholder="Camara Principal, Ej: '12MP'"
                      type="text"
                    />
                  </div>
                </div>
                <div className="w-full flex m-2 justify-evenly">
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">Inventario</label>
                    <input
                      autocomplete="off"
                      {...register("stock", { required: true })}
                      name="stock"
                      className={
                        errors.stock
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                      }
                      placeholder="Inventario del producto, Ej: '23'"
                      type="number"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">Colores</label>
                    <input
                      autocomplete="off"
                      {...register("colors", { required: true })}
                      name="colors"
                      className={
                        errors.colors
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                      }
                      placeholder="Colores Ej: 'Blanco Rojo Negro'"
                      type="text"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-black text-white px-3 py-1 m-4 rounded-sm"
                >
                  Crear Producto
                </button>
              </form>
            )}
            {category === "TV" && (
              <form
                id="TV"
                onSubmit={handleSubmit(onSubmit)}
                className="flex w-full
            flex-col items-center justify-center"
              >
                <div className="w-full flex m-2 justify-evenly items-center">
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">Modelo</label>
                    <input
                      autocomplete="off"
                      name="model"
                      {...register("model", { required: true })}
                      className={
                        errors.model
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                      }
                      placeholder="Modelo, Ej: 'AU7000 SMART TV 2021'"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">Marca</label>
                    <input
                      autocomplete="off"
                      name="brand"
                      {...register("brand", { required: true })}
                      className={
                        errors.brand
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                      }
                      placeholder="Marca, Ej: 'Samsung'"
                      type="text"
                    />
                  </div>
                </div>
                <div className="w-full flex m-2 justify-evenly">
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">Descripción</label>
                    <input
                      autocomplete="off"
                      {...register("description", { required: true })}
                      name="description"
                      className={
                        errors.description
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                      }
                      placeholder="Descripción del producto"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">Precio</label>
                    <input
                      autocomplete="off"
                      {...register("price", { required: true })}
                      name="price"
                      className={
                        errors.price
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                      }
                      placeholder="Precio por unidad, Ej:'609'"
                      type="number"
                    />
                  </div>
                </div>
                <div className="w-full flex m-2 justify-evenly">
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">
                      Tamaño de pantalla
                    </label>
                    <input
                      autocomplete="off"
                      {...register(
                        "screenSize",

                        { min: 1, max: 999 }
                      )}
                      name="screenSize"
                      className={
                        errors.screenSize
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600 placeholder:text-sm"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600 placeholder:text-sm"
                      }
                      placeholder="Tamaño de pantalla en pulgadas, Ej: '58'"
                      type="number"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">
                      Tipo de resolución
                    </label>
                    <input
                      autocomplete="off"
                      {...register("typeResolution", { required: true })}
                      name="typeResolution"
                      className={
                        errors.typeResolution
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                      }
                      placeholder="Tipo de resolución, Ej: 'LED UHD 4K'"
                      type="text"
                    />
                  </div>
                </div>

                <div className="w-full flex m-2 justify-evenly">
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">Inventario</label>
                    <input
                      autocomplete="off"
                      {...register("stock", { required: true })}
                      name="stock"
                      className={
                        errors.stock
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                      }
                      placeholder="Inventario del producto, Ej: '6'"
                      type="number"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">
                      Sistema operativo
                    </label>
                    <input
                      autocomplete="off"
                      {...register("systemOperating", { required: true })}
                      name="systemOperating"
                      className={
                        errors.systemOperating
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                      }
                      placeholder="Sistema Operativo, Ej: 'Android'"
                      type="text"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-black text-white px-3 py-1 m-4 rounded-sm"
                >
                  Crear Producto
                </button>
              </form>
            )}
            {category === "Laptop" && (
              <form
                id="Laptop"
                onSubmit={handleSubmit(onSubmit)}
                className="flex w-full
            flex-col items-center justify-center"
              >
                <div className="w-full flex m-2 justify-evenly items-center">
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">Modelo</label>
                    <input
                      autocomplete="off"
                      name="model"
                      {...register("model", { required: true })}
                      className={
                        errors.model
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                      }
                      placeholder="Modelo, Ej: 'EliteBook 840 G3'"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">Marca</label>
                    <input
                      autocomplete="off"
                      name="brand"
                      {...register("brand", { required: true })}
                      className={
                        errors.brand
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                      }
                      placeholder="Marca, Ej:'HP'"
                      type="text"
                    />
                  </div>
                </div>
                <div className="w-full flex m-2 justify-evenly">
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">Descripción</label>
                    <input
                      autocomplete="off"
                      {...register("description", { required: true })}
                      name="description"
                      className={
                        errors.description
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                      }
                      placeholder="Descripción del producto"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">Precio</label>
                    <input
                      autocomplete="off"
                      {...register("price", { required: true })}
                      name="price"
                      className={
                        errors.price
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                      }
                      placeholder="Precio por unidad, Ej: '425'"
                      type="number"
                    />
                  </div>
                </div>
                <div className="w-full flex m-2 justify-evenly">
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">Procesador</label>
                    <input
                      autocomplete="off"
                      {...register("processor", { required: true })}
                      name="processor"
                      className={
                        errors.processor
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                      }
                      placeholder="Procesador, Ej: 'Core i5 6ta'"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">Memoria RAM</label>
                    <input
                      autocomplete="off"
                      {...register("ramMemory", { required: true })}
                      name="ramMemory"
                      className={
                        errors.ramMemory
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                      }
                      placeholder="Memoria Ram, Ej: '16GB'"
                      type="text"
                    />
                  </div>
                </div>
                <div className="w-full flex m-2 justify-evenly">
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">
                      Memoria interna
                    </label>
                    <input
                      autocomplete="off"
                      {...register("internalMemory", { required: true })}
                      name="internalMemory"
                      className={
                        errors.internalMemory
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                      }
                      placeholder="Memoria Interna, Ej:'512GB SSD'"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <label className="text-lg font-medium">Inventario</label>
                    <input
                      autocomplete="off"
                      {...register("stock", { required: true })}
                      name="stock"
                      className={
                        errors.stock
                          ? "rounded-sm w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                          : "rounded-sm w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                      }
                      placeholder="Inventario del producto, Ej: '11'"
                      type="number"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-black text-white px-3 py-1 m-4 rounded-sm"
                >
                  Crear Producto
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default CreateProduct;
