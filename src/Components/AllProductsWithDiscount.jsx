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
  const [products, setProducts] = useState(null);
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
        let data = res.data.filter((product) => {
          const hoy = new Date();
          const fechaObjetivoEnTiempo = new Date(
            product.ProductDiscount.endingDate
          );
          const diferenciaEnTiempo = fechaObjetivoEnTiempo - hoy;
          const diasRestantes = Math.ceil(
            diferenciaEnTiempo / (1000 * 3600 * 24)
          ); // convertir a días y redondear hacia arriba
          return diasRestantes > -1;
        });
        setData(data);
        setProducts(data.slice(indexOfFirstRecipes, indexOfLastRecipes));
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
              {typeof products !== "string" &&
              products &&
              products !== false ? (
                products.map((product) => {
                  return (
                    <DiscountProductCard card={product}></DiscountProductCard>
                  );
                })
              ) : (
                <>
                  {products === false ? (
                    <div className="flex w-full h-[700px] items-center justify-center">
                      <h3 className="text-2xl font-bold">
                        En estos momentos no hay productos con ofertas
                      </h3>
                    </div>
                  ) : (
                    <div className="flex w-full h-[700px] items-center justify-center">
                      <div className="animate-spin">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100px"
                          height="100px"
                          viewBox="0 0 24 24"
                          fill="#000"
                        >
                          <path
                            d="M12 2.99988V5.99988M12 20.9999V17.9999M4.20577 16.4999L6.80385 14.9999M21 11.9999H18M16.5 19.7941L15 17.196M3 11.9999H6M7.5 4.20565L9 6.80373M7.5 19.7941L9 17.196M19.7942 16.4999L17.1962 14.9999M4.20577 7.49988L6.80385 8.99988"
                            stroke="#000000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </>
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
