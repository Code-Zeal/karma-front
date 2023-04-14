import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "./SideBar";
import DiscountProductCard from "./DiscountProductCard";
import Paginated from "./Paginated";

const AllProductsWithDiscount = () => {
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
  const [products, setProducts] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(6);
  const indexOfLastRecipes = currentPage * recipesPerPage;
  const indexOfFirstRecipes = indexOfLastRecipes - recipesPerPage;
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    const searchAll = async () => {
      try {
        let res = await axios.get("/discount/getDiscountedProducts");
        setData(res.data);
        setProducts(res.data.slice(indexOfFirstRecipes, indexOfLastRecipes));
      } catch (error) {
        setData(false);
        errorNotify(error.response.data);
      }
    };
    const searchByInput = async (input) => {
      try {
        let res = await axios.get(`/product/getProductsByInput?input=${input}`);
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
  }, [input, currentPage]);

  const handlerChange = (event) => {
    if (event.target.value === "") {
      setInput("noInput");
    } else {
      setInput(event.target.value);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className="container mx-auto mt-12">
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

          <div className="flex row-auto flex-wrap">
            <div className="w-full flex justify-around">
              <input
                className="w-4/12"
                onChange={handlerChange}
                type="text"
                placeholder="Buscar por Marca o Modelo"
              />
            </div>
            <div className="w-full flex flex-wrap justify-center">
              {typeof products !== "string" && products ? (
                products.map((product) => {
                  return (
                    <DiscountProductCard card={product}></DiscountProductCard>
                  );
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
        </div>
      </div>
      <div className="w-10/12 ml-auto flex items-center justify-center">
        <Paginated
          recipesPerPage={recipesPerPage}
          allRecipes={data && data.length}
          pagination={pagination}
          currentRecipes={products}
          currentPage={currentPage}
        ></Paginated>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default AllProductsWithDiscount;
