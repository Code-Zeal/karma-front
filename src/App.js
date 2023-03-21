import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Cards from "./Components/Cards";
// import DetailsCard from "./Components/DetailCard";
// import Detail from "./Components/Detail";
import DetailCard from "./Components/DetailCard";
import Card from "./Components/Card";
import Details from "./Components/DetailsCard";
import Checkout from "./Components/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/cards" element={<Cards />} />
        <Route path="/detail/:id" element={<DetailCard />} />
        <Route exact path="/card" element={<Card />} />
        <Route exact path="/detail" element={<Details />} />
        <Route exact path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
