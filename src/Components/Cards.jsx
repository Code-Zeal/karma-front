import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";

export default function Cards() {
  const productPorCategoria = useSelector((state) => state.productXSuCategory);

  return (
    <div>
      {productPorCategoria.map((p) => (
        <Card
          idDetailProduct={p.id}
          model={p.model}
          brand={p.brand}
          price={p.price}
          image={p.image}
          laptop={p.Laptop}
          tablet={p.Tablet}
          celulares={p.CellPhone}
          television={p.Television}
        />
      ))}
      {/* <Card /> */}
    </div>
  );
}

// {
//   "id": 1,
//   "model": "model",
//   "brand": "brand",
//   "description": "description",
//   "price": 40,
//   "image": "imagen",
//   "Laptop": {
//       "id": 1,
//       "name": "Laptop",
//       "ramMemory": "ramMemory",
//       "internalMemory": "internalMemory",
//       "processor": "processor",
//       "ProductId": 1
//   }
