import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getProductsByInput } from "../Redux/Actions";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Cards from "./Cards";

export default function Search() {
  const location = useLocation();
  const dispatch = useDispatch();
  const searchQuery = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    dispatch(getProductsByInput(searchQuery));
  }, [dispatch, searchQuery]);

  return (
    <div>
      <NavBar />
      <Cards />
      <Footer />
    </div>
  );
}
