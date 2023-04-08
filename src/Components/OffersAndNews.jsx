import React, { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";
import axios from "axios";
const OffersAndNews = (props) => {
  const [offers1, setOffers1] = useState(null);
  const [offers2, setOffers2] = useState(null);
  useEffect(() => {
    const getOffers1 = async () => {
      const res = await axios.get(
        "http://localhost:4000/product/getproductPromo/3"
      );
      setOffers1(res.data);
    };
    const getOffers2 = async () => {
      const res = await axios.get(
        "http://localhost:4000/product/getproductPromo/3"
      );
      setOffers2(res.data);
    };
    getOffers1();
    getOffers2();
  }, []);
  console.log(offers1);
  return (
    <section className="flex flex-col mt-[2%]" id="down">
      <section className="mx-2 flex  flex-col lg:flex-row lg:justify-evenly">
        <div className="lg:w-[40%]">
          <h3 className="p-4 text-3xl font-bold ">OFERTAS Y NOVEDADES</h3>
          <h3 className="p-4 mb-3 font-normal text-gray-700 ">
            En Karma, nos esforzamos por ofrecer productos de la mejor calidad a
            precios competitivos. Trabajamos con las mejores marcas del mercado
            para asegurarnos de que nuestros clientes reciban dispositivos
            electrónicos duraderos, confiables y de última tecnología. Además,
            contamos con un equipo de expertos en tecnología que están
            disponibles para ayudarte a elegir el producto que mejor se adapte a
            tus necesidades.
          </h3>
        </div>
        <div className="lg:w-7/12 grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
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
            {offers1 &&
              offers1.map((product) => {
                return (
                  <Link
                    to={`http://localhost:3000/detail/${product.id}`}
                    className="w-full flex items-start "
                  >
                    <h5 className="text-[10px] lg:text-lg font-semibold tracking-tight px-[10%] p-2 text-center rounded-tr-xl rounded-br-xl bg-[#171717] text-white absolute z-10 ">
                      {`${product.brand} ${product.model}`}
                    </h5>
                    <img
                      className="w-[260px] h-[200px] m-auto relative z-0"
                      src={product.images[0]}
                      alt={`${product.brand} ${product.model}`}
                    />
                  </Link>
                );
              })}
          </Carousel>
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
            {offers2 &&
              offers2.map((product) => {
                return (
                  <Link
                    to={`http://localhost:3000/detail/${product.id}`}
                    className="w-full flex items-start "
                  >
                    <h5 className="text-[10px] lg:text-lg font-semibold tracking-tight px-[10%] p-2 text-center rounded-tr-xl rounded-br-xl bg-[#171717] text-white absolute z-10 ">
                      {`${product.brand} ${product.model}`}
                    </h5>
                    <img
                      className="w-[260px] h-[200px] m-auto relative z-0"
                      src={product.images[0]}
                      alt={`${product.brand} ${product.model}`}
                    />
                  </Link>
                );
              })}
          </Carousel>
        </div>
      </section>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 m-6">
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
                    <g id="icons" transform="translate(56.000000, 160.000000)">
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
                    <g id="icons" transform="translate(56.000000, 160.000000)">
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
          className="w-10/12 m-auto"
        >
          <Link>
            <img
              className="cursor-pointer w-full"
              src="https://blog.clickio.com/wp-content/uploads/2022/06/sticky-ads.png"
              alt="..."
            />
          </Link>
          <Link>
            <img
              className="cursor-pointer w-full"
              src="https://www.the-future-of-commerce.com/wp-content/uploads/2019/11/thumbnail-499857e59b7ac790619ff8db95a1e400-1200x370.jpeg"
              alt="..."
            />
          </Link>
          <Link>
            <img
              className="cursor-pointer w-full"
              src="https://www.tweakuk.com/wp-content/uploads/2020/01/Tech-banner.jpg"
              alt="..."
            />
          </Link>
        </Carousel>
      </div>
    </section>
  );
};

export default OffersAndNews;
