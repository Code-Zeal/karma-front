import React, { useRef } from "react";
import PaymentMethods from "./PaymentMethods";
import OffersAndNews from "./OffersAndNews";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { postRegisterAuth0 } from "../Redux/Actions";

import NavBar from "./NavBar";
import Footer from "./Footer";
import { FeedbackHome } from "./FeedbackHome";
import { useEffect } from "react";

import SearchBar from "./SearchBar";
import SliderCategories from "./SliderCategories";

function Home() {
  const searchBarRef = useRef();
  const dispatch = useDispatch();

  const { isAuthenticated, user } = useAuth0();
  const dataRegister = {
    id: user?.sub,
    email: user?.email,
    picture: user?.picture,
  };

  const notifySuccess = () => {
    console.log(dataRegister);
    dispatch(postRegisterAuth0(dataRegister));
  };

  useEffect(() => {
    if (isAuthenticated) {
      notifySuccess();
    }
  }, [isAuthenticated]);
  return (
    <section>
      <NavBar></NavBar>
      <div className="relative bg-neutral-900 ">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none ">
              ¡Bienvenidos al
              <br className="hidden md:block" />
              <p className="pr-2">universo de la tecnología en </p>
              <span className="relative inline-block px-2">
                <div className="absolute inset-0 transform -skew-x-12 py-6 bg-slate-200" />
                <span className="relative text-stone-900">KARMA!</span>
              </span>
            </h2>
            <p className="mb-6 text-base text-indigo-100 md:text-lg">
              ¡Bienvenidos a Karma! Somos una tienda en línea especializada en
              la venta de dispositivos electrónicos de última generación. En
              nuestra tienda encontrarás una amplia variedad de productos
              electrónicos, desde smartphones y tablets hasta laptops y
              accesorios.
            </p>
            <SearchBar ref={searchBarRef}></SearchBar>

            <hr className="text-white w-full my-6" />
            <p className="max-w-md mb-10 text-xs tracking-wide text-indigo-100 sm:text-sm sm:mx-auto md:mb-16">
              Estamos comprometidos con la sostenibilidad y trabajamos con
              proveedores que comparten nuestros valores y nuestro compromiso
              con el medio ambiente. ¡Gracias por elegir Karma!
            </p>
            <a
              href="#down"
              aria-label="Scroll down"
              className="flex items-center justify-center w-14 h-14 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110 -m-8 hover:bg-white hover:text-[#171717]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <SliderCategories></SliderCategories>
      <OffersAndNews />
      <PaymentMethods></PaymentMethods>
      <FeedbackHome></FeedbackHome>
      <Footer></Footer>
    </section>
  );
}

export default Home;
