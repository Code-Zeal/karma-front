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
        <div className="lg:w-1/2 grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            <Link className="w-full flex items-start ">
              <h5 className="text-[10px] lg:text-lg font-semibold tracking-tight px-[10%] pt-4 text-center text-white absolute z-10 ">
                Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
              </h5>
              <img
                className="w-full h-full m-auto relative z-0"
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                alt="Apple Watch Series 7 in colors pink, silver, and black"
              />
            </Link>
            <Link className="w-full flex items-start ">
              <h5 className="text-[10px] lg:text-lg font-semibold tracking-tight px-[10%] pt-4 text-center text-white absolute z-10 ">
                Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
              </h5>
              <img
                className="w-full h-full m-auto relative z-0"
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                alt="Apple Watch Series 7 in colors pink, silver, and black"
              />
            </Link>
            <Link className="w-full flex items-start ">
              <h5 className="text-[10px] lg:text-lg font-semibold tracking-tight px-[10%] pt-4 text-center text-white absolute z-10 ">
                Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
              </h5>
              <img
                className="w-full h-full m-auto relative z-0"
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                alt="Apple Watch Series 7 in colors pink, silver, and black"
              />
            </Link>
            <Link className="w-full flex items-start ">
              <h5 className="text-[10px] lg:text-lg font-semibold tracking-tight px-[10%] pt-4 text-center text-white absolute z-10 ">
                Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
              </h5>
              <img
                className="w-full h-full m-auto relative z-0"
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                alt="Apple Watch Series 7 in colors pink, silver, and black"
              />
            </Link>
            <Link className="w-full flex items-start ">
              <h5 className="text-[10px] lg:text-lg font-semibold tracking-tight px-[10%] pt-4 text-center text-white absolute z-10 ">
                Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
              </h5>
              <img
                className="w-full h-full m-auto relative z-0"
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                alt="Apple Watch Series 7 in colors pink, silver, and black"
              />
            </Link>
          </Carousel>
          <Carousel indicators={true}>
            <Link className="w-full flex items-start ">
              <h5 className="text-[10px] lg:text-lg font-semibold tracking-tight px-[10%] pt-4 text-center text-white absolute z-10 ">
                Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
              </h5>
              <img
                className="w-full h-full m-auto relative z-0"
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                alt="Apple Watch Series 7 in colors pink, silver, and black"
              />
            </Link>
            <Link className="w-full flex items-start ">
              <h5 className="text-[10px] lg:text-lg font-semibold tracking-tight px-[10%] pt-4 text-center text-white absolute z-10 ">
                Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
              </h5>
              <img
                className="w-full h-full m-auto relative z-0"
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                alt="Apple Watch Series 7 in colors pink, silver, and black"
              />
            </Link>
            <Link className="w-full flex items-start ">
              <h5 className="text-[10px] lg:text-lg font-semibold tracking-tight px-[10%] pt-4 text-center text-white absolute z-10 ">
                Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
              </h5>
              <img
                className="w-full h-full m-auto relative z-0"
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                alt="Apple Watch Series 7 in colors pink, silver, and black"
              />
            </Link>
            <Link className="w-full flex items-start ">
              <h5 className="text-[10px] lg:text-lg font-semibold tracking-tight px-[10%] pt-4 text-center text-white absolute z-10 ">
                Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
              </h5>
              <img
                className="w-full h-full m-auto relative z-0"
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                alt="Apple Watch Series 7 in colors pink, silver, and black"
              />
            </Link>
            <Link className="w-full flex items-start ">
              <h5 className="text-[10px] lg:text-lg font-semibold tracking-tight px-[10%] pt-4 text-center text-white absolute z-10 ">
                Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
              </h5>
              <img
                className="w-full h-full m-auto relative z-0"
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                alt="Apple Watch Series 7 in colors pink, silver, and black"
              />
            </Link>
          </Carousel>
        </div>
      </section>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 m-6">
        <Carousel slideInterval={5000}>
          <Link>
            <img
              className="cursor-pointer w-full"
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt="..."
            />
          </Link>
          <Link>
            <img
              className="cursor-pointer w-full"
              src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
              alt="..."
            />
          </Link>
          <Link>
            <img
              className="cursor-pointer w-full"
              src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
              alt="..."
            />
          </Link>
          <Link>
            <img
              className="cursor-pointer w-full"
              src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
              alt="..."
            />
          </Link>
          <Link>
            <img
              className="cursor-pointer w-full"
              src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
              alt="..."
            />
          </Link>
        </Carousel>
      </div>
    </section>
  );
};

export default OffersAndNews;
