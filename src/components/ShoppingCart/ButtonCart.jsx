import React from "react";
import { TiShoppingCart } from "react-icons/ti";

function ButtonCart() {
  return(
    <button className="text-lg flex items-center justify-center px-5 border-none bg-transparent cursor-pointer relative ml-5 text-gray-700 dark:text-gray-300"> 
      <TiShoppingCart />
      <span className="bg-red-500 w-15 h-15 absolute top-0 left-0 text-white text-xs font-semibold flex items-center justify-center rounded-full">
        1
      </span>
    </button>
  );
}

export default ButtonCart;
