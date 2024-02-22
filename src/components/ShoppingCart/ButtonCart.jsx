import React, { useContext } from "react";
import { TiShoppingCart } from "react-icons/ti";
import AppContext from "../../context/AppContext";

function ButtonCart() {

  const {cartItens,isCartVisible, setIsCartVisible } = useContext(AppContext);

  return(
    <button 
      onClick={()=> setIsCartVisible(!isCartVisible)}
      type="button"
      className=" flex items-center justify-center cursor-pointer relative ml-5 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-lg rounded-lg px-4 py-2 p-2 text-center border-none"> 
      <TiShoppingCart />
     
      {cartItens.length > 0 &&  
      <span className="bg-red-500 w-4 h-4 absolute rounded-[15px] top-0 left-0 text-white text-xs font-semibold  flex items-center justify-center">
        {cartItens.length}
      </span>
      }     
    </button>
  );
}

export default ButtonCart;
