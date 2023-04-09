import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getProductsByInput } from "../Redux/Actions";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Cards from "./Cards";
import axios from "axios";
import Paginated from "./Paginated";
import { ToastContainer, toast } from "react-toastify";

export default function Search() {
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
  const handlerChange = (event) => {
    if (event.target.value === "") {
      setInput(null);
    } else {
      setInput(event.target.value);
    }
  };
  const location = useLocation();
  const [products, setProducts] = useState(null);
  const [allCards, setAllCards] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(6);
  const indexOfLastRecipes = currentPage * recipesPerPage;
  const indexOfFirstRecipes = indexOfLastRecipes - recipesPerPage;
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const searchQuery = new URLSearchParams(location.search).get("query");
  const [input, setInput] = useState(searchQuery);
  useEffect(() => {
    const searchAll = async () => {
      try {
        let res = await axios.get("http://localhost:4000/product/getProducts");
        setProducts(res.data.slice(indexOfFirstRecipes, indexOfLastRecipes));
        setAllCards(res.data);
      } catch (error) {
        setProducts(false);
        setAllCards(false);
        errorNotify(error.response.data);
      }
    };
    const searchByInput = async (input) => {
      try {
        let res = await axios.get(
          `http://localhost:4000/product/getProductsByInput?input=${input}`
        );
        setProducts(res.data.slice(indexOfFirstRecipes, indexOfLastRecipes));
        setAllCards(res.data);
      } catch (error) {
        setProducts(false);
        setAllCards(false);
        errorNotify(error.response.data);
      }
    };
    if (input === null) {
      searchAll();
    } else {
      searchByInput(input);
    }
  }, [input, currentPage]);
  return (
    <div>
      <NavBar />
      <div className="w-full flex justify-center items-center">
        <input
          className="w-4/12 mt-4"
          onChange={handlerChange}
          type="text"
          placeholder="Buscar por Marca o Modelo"
          value={input}
        />
      </div>
      {products ? (
        <Cards product={products} />
      ) : (
        <div className="w-full h-[600px] flex justify-center items-center ">
          <h3 className="font-thin text-3xl">
            NO HEMOS ENCONTRADO RESULTADOS :(
          </h3>
        </div>
      )}
      <div className="w-full flex items-center justify-center">
        <Paginated
          recipesPerPage={recipesPerPage}
          allRecipes={allCards && allCards.length}
          pagination={pagination}
          currentRecipes={products}
          currentPage={currentPage}
        ></Paginated>
      </div>
      <Footer />
    </div>
  );
}
