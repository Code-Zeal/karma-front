import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Card from "./Card";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [productsLoadedIds, setProductsLoadedIds] = useState([]);
  const productContainerRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`/product/getProducts`);
      setProducts(response.data);
      setProductCount(8);
      setProductsLoadedIds(
        response.data.slice(0, 8).map((product) => product.id)
      );
    };
    fetchProducts();
  }, []);

  const handleButtonClick = async () => {
    const start = productCount;
    let end = start + 8;

    if (end > products.length) {
      end = products.length;
    }
    console.log(start);

    const response = await axios.get(
      `/product/getProducts?start=${start}&end=${end}`
    );
    const newProducts = response.data.filter(
      (product) => !products.some((p) => p.id === product.id)
    );

    setProducts([...products, ...newProducts]);
    setProductCount(end);
  };

  const handleScroll = async () => {
    if (
      productContainerRef.current.scrollTop +
        productContainerRef.current.offsetHeight >=
        productContainerRef.current.scrollHeight ||
      (window.innerHeight + window.pageYOffset >= document.body.offsetHeight &&
        productCount < products.length)
    ) {
      console.log("Scrolled to bottom of container");
      handleButtonClick();
    }
  };

  useEffect(() => {
    productContainerRef.current.addEventListener("scroll", handleScroll);
    return () =>
      productContainerRef.current.removeEventListener("scroll", handleScroll);
  }, [products, productCount]);

  return (
    <div>
      <div
        ref={productContainerRef}
        className="w-11/12 h-[1000px] flex flex-row flex-wrap items-center m-auto border border-neutral-900 justify-start gap-4 h-800 overflow-auto overflow-y-scroll"
      >
        {products
          .slice(0, Math.min(productCount, products.length))
          .map((product, index) => (
            <Card card={product} key={index} />
          ))}
      </div>
      <button onClick={handleButtonClick}>Cargar más productos</button>
    </div>
  );
}

export default ProductList;
