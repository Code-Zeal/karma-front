import React from "react";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";

const OffersAndNews = (props) => {
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
          <Carousel>
            <Link className="w-full flex items-start ">
              <h5 className="text-[10px] lg:text-lg font-semibold tracking-tight px-[10%] p-2 text-center rounded-tr-xl rounded-br-xl bg-[#171717] text-white absolute z-10 ">
                Samsung Galaxy S22
              </h5>
              <img
                className="w-[200px] h-[200px] m-auto relative z-0"
                src="https://m.media-amazon.com/images/I/71c5rhsUkxL._AC_SL1500_.jpg"
                alt="Apple Watch Series 7 in colors pink, silver, and black"
              />
            </Link>
            <Link className="w-full flex items-start ">
              <h5 className="text-[10px] lg:text-lg font-semibold tracking-tight px-[10%] p-2 text-center rounded-tr-xl rounded-br-xl bg-[#171717] text-white absolute z-10 ">
                iPhone 13 Pro Max
              </h5>
              <img
                className="w-[200px] h-[200px] m-auto relative z-0"
                src="https://m.media-amazon.com/images/I/61D84NtVgVL._AC_SL1500_.jpg"
                alt="Apple Watch Series 7 in colors pink, silver, and black"
              />
            </Link>
            <Link className="w-full flex items-start ">
              <h5 className="text-[10px] lg:text-lg font-semibold tracking-tight px-[10%] p-2 text-center rounded-tr-xl rounded-br-xl bg-[#171717] text-white absolute z-10 ">
                Acer Aspire Vero
              </h5>
              <img
                className="w-[200px] h-[200px] m-auto relative z-0"
                src="https://m.media-amazon.com/images/I/81XIwlF8sxL._AC_SL1500_.jpg"
                alt="Apple Watch Series 7 in colors pink, silver, and black"
              />
            </Link>
          </Carousel>
          <Carousel indicators={true}>
            <Link className="w-full flex items-start ">
              <h5 className="text-[10px] lg:text-lg font-semibold tracking-tight px-[10%] p-2 text-center rounded-tr-xl rounded-br-xl bg-[#171717] text-white absolute z-10 ">
                Lenovo - Tab P11 Plus
              </h5>
              <img
                className="w-[200px] h-[200px] m-auto relative z-0"
                src="https://m.media-amazon.com/images/I/617Q3DbKyPL._AC_SL1500_.jpg"
                alt="Apple Watch Series 7 in colors pink, silver, and black"
              />
            </Link>
            <Link className="w-full flex items-start ">
              <h5 className="text-[10px] lg:text-lg font-semibold tracking-tight px-[10%] p-2 text-center rounded-tr-xl rounded-br-xl bg-[#171717] text-white absolute z-10 ">
                MSI Katana GF66
              </h5>
              <img
                className="w-[300px] h-[200px] m-auto relative z-0"
                src="https://m.media-amazon.com/images/I/71nk3uDrqkL._AC_SL1500_.jpg"
                alt="Apple Watch Series 7 in colors pink, silver, and black"
              />
            </Link>
            <Link className="w-full flex items-start ">
              <h5 className="text-[10px] lg:text-lg font-semibold tracking-tight px-[10%] p-2 text-center rounded-tr-xl rounded-br-xl bg-[#171717] text-white absolute z-10 ">
                SAMSUNG Galaxy Tab S6 Lite
              </h5>
              <img
                className="w-[200px] h-[200px] m-auto relative z-0"
                src="https://m.media-amazon.com/images/I/718B6zl+b6L._AC_SL1500_.jpg"
                alt="Apple Watch Series 7 in colors pink, silver, and black"
              />
            </Link>
          </Carousel>
        </div>
      </section>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 m-6">
        <Carousel slideInterval={5000} className="w-10/12 m-auto">
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
