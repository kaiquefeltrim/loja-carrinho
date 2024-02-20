import React from "react";
import { TiShoppingCart } from "react-icons/ti";

function ButtonCart() {
  return(
    <button 
      type="button"
      className=" flex items-center justify-center cursor-pointer relative ml-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-lg rounded-lg px-4 py-2 p-2 text-center border-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> 
      <TiShoppingCart />
      <span className="bg-red-500 w-4 h-4 absolute rounded-[15px] top-0 left-0 text-white text-xs font-semibold  flex items-center justify-center">
        1
      </span>
    </button>
  );
}

export default ButtonCart;
