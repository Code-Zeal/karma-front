import axios from "axios";
import React, { useEffect, useState } from "react";
import EditProductCard from "./EditProductCard";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllProductsAdm = () => {
  const errorNotify = (msg) =>
    toast.error(msg, {
      toastId: "error",
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const [data, setData] = useState(false);
  const [input, setInput] = useState("noInput");
  useEffect(() => {
    const searchAll = async () => {
      try {
        let res = await axios.get("http://localhost:4000/product/getProducts");
        setData(res.data);
      } catch (error) {
        setData(false);
        errorNotify(error.response.data);
      }
    };
    const searchByInput = async (input) => {
      try {
        let res = await axios.get(
          `http://localhost:4000/product/getProductsByInput?input=${input}`
        );
        setData(res.data);
      } catch (error) {
        setData(false);
        errorNotify(error.response.data);
      }
    };
    if (input === "noInput") {
      searchAll();
    } else {
      searchByInput(input);
    }
  }, [input]);

  const handlerChange = (event) => {
    if (event.target.value === "") {
      setInput("noInput");
    } else {
      setInput(event.target.value);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
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
      <NavBar></NavBar>
      <div className=" w-full bg-white h-1/2 rounded-lg flex flex-col items-center justify-evenly">
        <div className=" w-full flex justify-around">
          <input
            className="w-4/12"
            onChange={handlerChange}
            type="text"
            placeholder="Buscar por Marca o Modelo"
          />
        </div>
        <div className="w-full flex flex-wrap">
          {data ? (
            data.map((product) => {
              return <EditProductCard card={product}></EditProductCard>;
            })
          ) : (
            <div className="flex w-full h-[700px] items-center justify-center">
              <h3 className="text-2xl font-bold">
                No hemos encontrado ningún producto :(
              </h3>
            </div>
          )}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default AllProductsAdm;
