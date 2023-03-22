import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Search from "./Search";

export default function SearchBar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  function togglePopup() {
    setIsOpen(!isOpen);
  }

  function handleInputChange(e) {
    setSearchValue(e.target.value);
  }

  function handleSearch() {
    navigate(`/search?query=${searchValue}`);
    <Search searchValue={searchValue} />;
  }

  return (
    <div class="relative block border-transparent p-6 hover:border-neutral-900">
      <MagnifyingGlassIcon
        className="-mr-1 h-5 w-5 text-neutral-900 cursor-pointer transition-all duration-300"
        onClick={togglePopup}
      />
      {isOpen && (
        <div className="absolute top-20 -right-14 z-10 border bg-white p-2 rounded-sm flex items-center justify-between font-mono">
          <input
            type="text"
            placeholder="Busca el producto aquí"
            class="mr-2 w-56"
            onChange={handleInputChange}
          />
          <button type="submit" onClick={handleSearch}>
            Buscar
          </button>
        </div>
      )}
    </div>
  );
}
