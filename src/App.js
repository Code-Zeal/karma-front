import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Cards from "./Components/Cards";
// import DetailsCard from "./Components/DetailCard";
// import Detail from "./Components/Detail";
import DetailCard from "./Components/DetailCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/cards" element={<Cards />} />

        <Route path="/detail/:id" element={<DetailCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
