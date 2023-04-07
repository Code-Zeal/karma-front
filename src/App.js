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
import Profile from "./Components/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<DetailCard />} />
        <Route exact path="/card" element={<Card />} />
        <Route exact path="/detail" element={<Details />} />
        <Route exact path="/shop/:category" element={<Shop />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/profile/orders" element={<MyOrders />} />
        <Route exact path="/profile/data" element={<MyData />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
