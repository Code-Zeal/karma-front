import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Card from "./Components/Card";
import Details from "./Components/DetailsCard";
import Shop from "./Components/Shop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/card" element={<Card />} />
        <Route exact path="/detail" element={<Details />} />
        <Route exact path="/shop/:category" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
