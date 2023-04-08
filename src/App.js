import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
// import DetailsCard from "./Components/DetailCard";
// import Detail from "./Components/Detail";
import DetailCard from "./Components/DetailCard";
import Card from "./Components/Card";
import Details from "./Components/DetailCard";
import Shop from "./Components/Shop";
import Checkout from "./Components/Checkout";
import MyOrders from "./Components/MyOrders";
import MyData from "./Components/MyData";
import Search from "./Components/Search";
import CreateProduct from "./Components/CreateProduct";
import AllProductsAdm from "./Components/AllProductsAdm";
import EditProductDetails from "./Components/EditProductDetails";
import Profile from "./Components/Profile";
import DetailOrder from "./Components/DetailOrder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<DetailCard />} />
        <Route path="/detailOrder/:id" element={<DetailOrder />} />

        <Route exact path="/card" element={<Card />} />
        <Route exact path="/detail" element={<Details />} />
        <Route exact path="/shop/:category" element={<Shop />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/profile/orders" element={<MyOrders />} />
        <Route exact path="/profile/data" element={<MyData />} />
        <Route path="/search" element={<Search />} />
        <Route path="/createProduct" element={<CreateProduct />} />
        <Route path="/allProducts" element={<AllProductsAdm />} />
        <Route path="/editDetail/:id" element={<EditProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
