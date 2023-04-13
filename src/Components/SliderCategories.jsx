import React, { useState, useEffect } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const categories = [
    {
      name: "Tablet",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mx-auto "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      ),
      link: "/shop/Tablet",
    },
    {
      name: "Celulares",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mx-auto "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
      ),
      link: "/shop/CellPhone",
    },
    {
      name: "Televisores",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 mx-auto "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>
      ),
      link: "/shop/TV",
    },
    {
      name: "Laptops",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mx-auto "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
          />
        </svg>
      ),
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
    <div className="slider-container w-2/3 mx-auto border rounded-lg p-4 flex flex-col justify-center items-center">
      <h2>Categorias</h2>
      <a href={currentCategory.link}>
        <h2 className="text-xl font-bold mb-2">{currentCategory.name}</h2>
        {currentCategory.logo}
      </a>
      <div className="flex justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-lg"
          onClick={previousSlide}
        >
          Anterior
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-lg"
          onClick={nextSlide}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Slider;
