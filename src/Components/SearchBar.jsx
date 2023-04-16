import { useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Search from "./Search";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SearchBar = forwardRef((props, ref) => {
  const errorNotify = (msg) =>
    toast.error(msg, {
      toastId: "error",
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  function togglePopup() {
    setIsOpen(!isOpen);
  }

  function handleInputChange(e) {
    setSearchValue(e.target.value);
  }

  function handleSearch(event) {
    console.log(event.target.value);
    if (searchValue !== "") {
      navigate(`/search?query=${searchValue}`);
      <Search searchValue={searchValue} />;
      togglePopup();
    } else {
      errorNotify("Debes ingresar algo antes de buscar");
    }
  }
  useImperativeHandle(ref, () => {
    return {
      togglePopup,
    };
  });

  return (
    <>
      <ToastContainer
        icon={false}
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {isOpen ? (
        <div className="fixed z-10 inset-0 flex justify-center items-center bg-[#000000ab] ">
          <div className="w-5/12 bg-white h-5/12 rounded-lg flex flex-col items-center justify-evenly">
            <div className="flex justify-evenly w-full">
              <input
                type="text"
                placeholder="Busca el producto aquí"
                class="m-2 w-[400px]"
                onChange={handleInputChange}
              />
              <button
                type="submit"
                onClick={handleSearch}
                className="bg-white text-black border border-neutral-900 font-normal w-[90px] h-[40px] my-auto rounded-sm text-lg mx-2"
              >
                Buscar
              </button>
              <button
                onClick={togglePopup}
                className="text-white bg-black border border-neutral-900 font-normal w-[90px] h-[40px] my-auto rounded-sm text-lg mx-2"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
});
export default SearchBar;
