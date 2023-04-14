import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [productsLoadedIds, setProductsLoadedIds] = useState([]);

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
    const end = productCount + 8;

    const response = await axios.get(
      `/product/getProducts?start=${start}&end=${end}`
    );
    const newProducts = response.data.filter(
      (product) => !productsLoadedIds.includes(product.id)
    );

    setProducts([...products, ...newProducts]);
    setProductCount(end);
    setProductsLoadedIds([
      ...productsLoadedIds,
      ...newProducts.map((product) => product.id),
    ]);
  };

  const handleScroll = async () => {
    console.log(window.innerHeight);
    console.log(window.pageYOffset);
    console.log(document.body.offsetHeight);

    if (
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight &&
      productCount < products.length
    ) {
      console.log("Scrolled to bottom of page");
      handleButtonClick();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [products, productCount]);

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 h-full">
        {products.slice(0, productCount).map((product, index) => (
          <Card card={product} key={index} />
        ))}
      </div>
      <button onClick={handleButtonClick}>Cargar más productos</button>
    </div>
  );
}

export default ProductList;
