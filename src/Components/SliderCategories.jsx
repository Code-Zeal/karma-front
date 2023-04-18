import React, { useState, useEffect } from "react";
import {
  ComputerDesktopIcon,
  TvIcon,
  DeviceTabletIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const categories = [
    {
      name: "Tablet",
      logo: <DeviceTabletIcon className="h-16 w-16" />,
      link: "/shop/Tablet",
    },
    {
      name: "Celulares",
      logo: <DevicePhoneMobileIcon className="h-16 w-16" />,
      link: "/shop/CellPhone",
    },
    {
      name: "Televisores",
      logo: <TvIcon className="h-16 w-16" />,
      link: "/shop/TV",
    },
    {
      name: "Laptops",
      logo: <ComputerDesktopIcon className="h-16 w-16" />,
      link: "/shop/Laptop",
    },
  ];

  const nextSlide = () => {
    const nextIndex =
      currentIndex + 1 >= categories.length ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  const previousSlide = () => {
    const previousIndex =
      currentIndex - 1 < 0 ? categories.length - 1 : currentIndex - 1;
    setCurrentIndex(previousIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentCategory = categories[currentIndex];

  return (
    <div className="slider-container w-2/4 mx-auto border border-neutral-400 rounded-sm p-4 flex flex-col justify-center items-center mt-8">
      <h2>Haz click aquí para revisar las categoría correspondiente</h2>
      <a
        href={currentCategory.link}
        className="mt-2 flex flex-col items-center"
      >
        <h2 className="text-xl font-bold mb-2">{currentCategory.name}</h2>
        {currentCategory.logo}
      </a>

      <div className="flex justify-center mt-4">
        <button
          className="bg-neutral-900 hover:bg-neutral-600 text-white px-2 py-1 rounded-lg mx-8"
          onClick={previousSlide}
        >
          Anterior
        </button>
        <button
          className="bg-neutral-900 hover:bg-neutral-600 text-white px-2 py-1 rounded-lg mx-8"
          onClick={nextSlide}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Slider;
