import React from "react";
import SearchBar from "./SearchBar";
import ButtonCart from "../ShoppingCart/ButtonCart";


function Header() {
  return (
    <header className="z-10 fixed bg-gray-800 w-full ">
      <div className="bg-white  dark:bg-gray-800 flex justify-between items-center p-5  border-gray-200 dark:border-gray-600 container">   
        <SearchBar />
        <ButtonCart />
      </div>
    </header>
  );
}

export default Header;
