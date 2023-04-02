import axios from "axios";
import { Carousel } from "flowbite-react";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateProduct = forwardRef((props, ref) => {
  const notify = () =>
    toast.success(`Producto creado correctamente`, {
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
        const res = await axios.post(
          "http://localhost:4000/cellPhone/createCellPhone",
          newData
        );
        if (res.status === 200) {
          console.log(1);
          reset();

          togglePopUp();
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
        const res = await axios.post(
          "http://localhost:4000/tv/createTelevision",
          newData
        );
        console.log(res);
        if (res.status === 200) {
          reset();
          togglePopUp();
          notify();
        }
      } catch (error) {
        errorNotify();
      }
    } else if (category === "Tablet") {
      let newData = {
        ...data,
        colors: data.colors.split(" "),
        price: parseInt(data.price),
        stock: parseInt(data.stock),
        images: someData.images,
      };

      try {
        console.log(newData);
        const res = await axios.post(
          "http://localhost:4000/tablet/createTablet",
          newData
        );
        console.log(res);
        if (res.status === 200) {
          reset();
          togglePopUp();
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
        const res = await axios.post(
          "http://localhost:4000/laptop/createLaptop",
          newData
        );
        console.log(res);
        if (res.status === 200) {
          reset();
          togglePopUp();
          notify();
        }
      } catch (error) {
        errorNotify();
      }
    }
  };

  const [visible, setVisible] = useState(false);
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
        cropping: true,
        multiple: false,
        resourcetype: "image",
        transformations: [{ effect: "remove_background" }],
      },
      function (error, result) {
        console.log(result.info);
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

  const togglePopUp = () => {
    setVisible(!visible);
    setCategory("");
    setSomeData({
      images: [],
      colors: [],
    });
    reset();
  };
  useImperativeHandle(ref, () => {
    return {
      togglePopUp,
    };
  });

  const handlerCategory = (event) => {
    setCategory(event.target.value);
    reset();
    setSomeData({
      images: [],
      colors: [],
    });
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {visible ? (
        <div className="fixed z-10 inset-0 flex justify-center items-center bg-[#000000ab] ">
          <div className="w-7/12 bg-white h-[620px] rounded-lg flex flex-col items-center justify-evenly ">
            <div
              className="w-full mt-4 flex items-start justify-around 
            "
            >
              <div className="w-[50px]">
                <select onChange={handlerCategory} name="Categoria" id="">
                  <option selected disabled="true" value="">
                    Categoria
                  </option>
                  <option value="Celular">Celular</option>
                  <option value="Tablet">Tablet</option>
                  <option value="TV">TV</option>
                  <option value="Laptop">Laptop</option>
                </select>
              </div>
              <div className=" mt-4 rounded-md w-[400px] h-[200px]  items-center flex flex-col">
                {category !== "" && (
                  <>
                    {someData.images.length !== 0 && (
                      <Carousel
                        leftControl={
                          <div className="bg-black rounded-full flex p-1 border-white border-2 items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xlink="http://www.w3.org/1999/xlink"
                              width="30px"
                              height="30px"
                              viewBox="-4.5 0 20 20"
                              version="1.1"
                            >
                              <title>arrow_left [#335]</title>
                              <desc>Created with Sketch.</desc>
                              <defs></defs>
                              <g
                                id="Page-1"
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <g
                                  id="Dribbble-Light-Preview"
                                  transform="translate(-345.000000, -6679.000000)"
                                  fill="#000000"
                                >
                                  <g
                                    id="icons"
                                    transform="translate(56.000000, 160.000000)"
                                  >
                                    <path
                                      d="M299.633777,6519.29231 L299.633777,6519.29231 C299.228878,6518.90256 298.573377,6518.90256 298.169513,6519.29231 L289.606572,6527.55587 C288.797809,6528.33636 288.797809,6529.60253 289.606572,6530.38301 L298.231646,6538.70754 C298.632403,6539.09329 299.27962,6539.09828 299.685554,6538.71753 L299.685554,6538.71753 C300.100809,6538.32879 300.104951,6537.68821 299.696945,6537.29347 L291.802968,6529.67648 C291.398069,6529.28574 291.398069,6528.65315 291.802968,6528.26241 L299.633777,6520.70538 C300.038676,6520.31563 300.038676,6519.68305 299.633777,6519.29231"
                                      id="arrow_left-[#335]"
                                      fill="#FFFFFF"
                                    ></path>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                        }
                        rightControl={
                          <div className="bg-black rounded-full flex p-1 border-white border-2 items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xlink="http://www.w3.org/1999/xlink"
                              width="30px"
                              height="30px"
                              viewBox="-4.5 0 20 20"
                              version="1.1"
                            >
                              <title>arrow_right [#336]</title>
                              <desc>Created with Sketch.</desc>
                              <defs></defs>
                              <g
                                id="Page-1"
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <g
                                  id="Dribbble-Light-Preview"
                                  transform="translate(-305.000000, -6679.000000)"
                                  fill="#000000"
                                >
                                  <g
                                    id="icons"
                                    transform="translate(56.000000, 160.000000)"
                                  >
                                    <path
                                      d="M249.365851,6538.70769 L249.365851,6538.70769 C249.770764,6539.09744 250.426289,6539.09744 250.830166,6538.70769 L259.393407,6530.44413 C260.202198,6529.66364 260.202198,6528.39747 259.393407,6527.61699 L250.768031,6519.29246 C250.367261,6518.90671 249.720021,6518.90172 249.314072,6519.28247 L249.314072,6519.28247 C248.899839,6519.67121 248.894661,6520.31179 249.302681,6520.70653 L257.196934,6528.32352 C257.601847,6528.71426 257.601847,6529.34685 257.196934,6529.73759 L249.365851,6537.29462 C248.960938,6537.68437 248.960938,6538.31795 249.365851,6538.70769"
                                      id="arrow_right-[#336]"
                                      fill="#FFFFFF"
                                    ></path>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                        }
                        indicators={false}
                      >
                        {someData &&
                          someData.images.map((image) => {
                            return (
                              <img
                                className="w-full h-auto"
                                src={image}
                                alt=""
                              />
                            );
                          })}
                      </Carousel>
                    )}
                    <button
                      className="border-2 border-[black] mt-2 hover:bg-[#961d1d] bg-[#e54848] text-[white] py-1 px-3 text-lg rounded-lg font-bold"
                      onClick={() => widgetRef.current.open()}
                    >
                      Subir Imagenes
                    </button>
                  </>
                )}
              </div>

              <div className="w-[50px]">
                <button
                  onClick={togglePopUp}
                  className="bg-red-600 rounded-full text-white px-4 py-2 hover:bg-red-400
              "
                >
                  X
                </button>
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
                  <input
                    name="model"
                    {...register("model", { required: true })}
                    className={
                      errors.model
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Modelo"
                    type="text"
                  />
                  <input
                    name="brand"
                    {...register("brand", { required: true })}
                    className={
                      errors.brand
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Marca"
                    type="text"
                  />
                </div>
                <div className="w-full flex m-2 justify-evenly">
                  <input
                    {...register("description", { required: true })}
                    name="description"
                    className={
                      errors.description
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Descripción"
                    type="text"
                  />
                  <input
                    {...register("price", { required: true })}
                    name="price"
                    className={
                      errors.price
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Precio"
                    type="number"
                  />
                </div>
                <div className="w-full flex m-2 justify-evenly">
                  <input
                    {...register("stock", { required: true })}
                    name="stock"
                    className={
                      errors.stock
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Stock"
                    type="number"
                  />
                  <input
                    {...register("ramMemory", { required: true })}
                    name="ramMemory"
                    className={
                      errors.ramMemory
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Memoria Ram"
                    type="text"
                  />
                </div>
                <div className="w-full flex m-2 justify-evenly">
                  <input
                    {...register("internalMemory", { required: true })}
                    name="internalMemory"
                    className={
                      errors.internalMemory
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Memoria Interna"
                    type="text"
                  />
                  <input
                    {...register("mainCamera", { required: true })}
                    name="mainCamera"
                    className={
                      errors.mainCamera
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Camara Principal"
                    type="text"
                  />
                </div>
                <div className="w-full flex m-2 justify-evenly">
                  <input
                    {...register("colors", { required: true })}
                    name="colors"
                    className={
                      errors.colors
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Colores Ej: 'Azul Rojo Verde'"
                    type="text"
                  />
                </div>
                <div className="w-full flex m-2 justify-evenly">
                  <input
                    {...register("name", { required: true })}
                    name="name"
                    className={
                      errors.name
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Nombre del Producto"
                    type="text"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-black text-white px-3 py-1 rounded-md"
                >
                  Crear Producto
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
                  <input
                    name="model"
                    {...register("model", { required: true })}
                    className={
                      errors.model
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Modelo"
                    type="text"
                  />
                  <input
                    name="brand"
                    {...register("brand", { required: true })}
                    className={
                      errors.brand
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Marca"
                    type="text"
                  />
                </div>
                <div className="w-full flex m-2 justify-evenly">
                  <input
                    {...register("description", { required: true })}
                    name="description"
                    className={
                      errors.description
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Descripción"
                    type="text"
                  />
                  <input
                    {...register("price", { required: true })}
                    name="price"
                    className={
                      errors.price
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Precio"
                    type="number"
                  />
                </div>
                <div className="w-full flex m-2 justify-evenly">
                  <input
                    {...register("screenSize", { required: true })}
                    name="screenSize"
                    className={
                      errors.screenSize
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Tamaño de la pantalla"
                    type="text"
                  />
                  <input
                    {...register("ramMemory", { required: true })}
                    name="ramMemory"
                    className={
                      errors.ramMemory
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Memoria Ram"
                    type="text"
                  />
                </div>
                <div className="w-full flex m-2 justify-evenly">
                  <input
                    {...register("internalMemory", { required: true })}
                    name="internalMemory"
                    className={
                      errors.internalMemory
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Memoria Interna"
                    type="text"
                  />
                  <input
                    {...register("mainCamera", { required: true })}
                    name="mainCamera"
                    className={
                      errors.mainCamera
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Camara Principal"
                    type="text"
                  />
                </div>
                <div className="w-full flex m-2 justify-evenly">
                  <input
                    {...register("stock", { required: true })}
                    name="stock"
                    className={
                      errors.stock
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Stock"
                    type="number"
                  />
                  <input
                    {...register("colors", { required: true })}
                    name="colors"
                    className={
                      errors.colors
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Colores Ej: 'Azul Rojo Verde'"
                    type="text"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-black text-white px-3 py-1 rounded-md"
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
                  <input
                    name="model"
                    {...register("model", { required: true })}
                    className={
                      errors.model
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Modelo"
                    type="text"
                  />
                  <input
                    name="brand"
                    {...register("brand", { required: true })}
                    className={
                      errors.brand
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Marca"
                    type="text"
                  />
                </div>
                <div className="w-full flex m-2 justify-evenly">
                  <input
                    {...register("description", { required: true })}
                    name="description"
                    className={
                      errors.description
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Descripción"
                    type="text"
                  />
                  <input
                    {...register("price", { required: true })}
                    name="price"
                    className={
                      errors.price
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Precio"
                    type="number"
                  />
                </div>
                <div className="w-full flex m-2 justify-evenly">
                  <input
                    {...register("screenSize", { min: 1, max: 999 })}
                    name="screenSize"
                    className={
                      errors.screenSize
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Tamaño de la pantalla en Pulgadas"
                    type="number"
                  />
                  <input
                    {...register("typeResolution", { required: true })}
                    name="typeResolution"
                    className={
                      errors.typeResolution
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Tipo de resolución"
                    type="text"
                  />
                </div>

                <div className="w-full flex m-2 justify-evenly">
                  <input
                    {...register("stock", { required: true })}
                    name="stock"
                    className={
                      errors.stock
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Stock"
                    type="number"
                  />
                  <input
                    {...register("systemOperating", { required: true })}
                    name="systemOperating"
                    className={
                      errors.systemOperating
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Sistema Operativo"
                    type="text"
                  />
                </div>
                <div className="w-full flex m-2 justify-evenly">
                  <input
                    {...register("nameTV", { required: true })}
                    name="nameTV"
                    className={
                      errors.nameTV
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Nombre del producto"
                    type="text"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-black text-white px-3 py-1 rounded-md"
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
                  <input
                    name="model"
                    {...register("model", { required: true })}
                    className={
                      errors.model
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Modelo"
                    type="text"
                  />
                  <input
                    name="brand"
                    {...register("brand", { required: true })}
                    className={
                      errors.brand
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Marca"
                    type="text"
                  />
                </div>
                <div className="w-full flex m-2 justify-evenly">
                  <input
                    {...register("description", { required: true })}
                    name="description"
                    className={
                      errors.description
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Descripción"
                    type="text"
                  />
                  <input
                    {...register("price", { required: true })}
                    name="price"
                    className={
                      errors.price
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Precio"
                    type="number"
                  />
                </div>
                <div className="w-full flex m-2 justify-evenly">
                  <input
                    {...register("processor", { required: true })}
                    name="processor"
                    className={
                      errors.processor
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Procesador"
                    type="text"
                  />
                  <input
                    {...register("ramMemory", { required: true })}
                    name="ramMemory"
                    className={
                      errors.ramMemory
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Memoria Ram"
                    type="text"
                  />
                </div>
                <div className="w-full flex m-2 justify-evenly">
                  <input
                    {...register("internalMemory", { required: true })}
                    name="internalMemory"
                    className={
                      errors.internalMemory
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Memoria Interna"
                    type="text"
                  />
                  <input
                    {...register("stock", { required: true })}
                    name="stock"
                    className={
                      errors.stock
                        ? "rounded-md w-[300px] border-l-[20px] border-red-600 focus:border-red-600"
                        : "rounded-md w-[300px] border-l-[20px] border-blue-600 focus:border-blue-600"
                    }
                    placeholder="Stock"
                    type="number"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-black text-white px-3 py-1 rounded-md"
                >
                  Crear Producto
                </button>
              </form>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
});
export default CreateProduct;
