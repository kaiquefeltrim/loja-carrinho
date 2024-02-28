import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import propTypes from "prop-types";
import formatCurrency from "../../utility/formatCurrency";
import AppContext from "../../context/AppContext";

function ProductsCards({data}) {

  const {id,title, thumbnail, price} = data;
  
  const {cartItens, setCartItens} = useContext(AppContext);

  const handleAddCart = () => {
    const index = cartItens.findIndex((item) => item.id === id);
    if (index === -1) {
      setCartItens([ ...cartItens, data ]);
    }
  };


  return(
    <section className="w-full  max-w-xs hover:shadow-xl text-opacity-10 m-0 flex flex-col cursor-pointer mx-auto  relative  border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <img className="p-4 w-full rounded-xl"
        src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
        alt="Imagem do produto" 
      />
      <div className="p-4  w-full  flex flex-col-reverse  ">
        <h4 className="text-xl font-medium tracking-tight text-gray-900 dark:text-white">{title}</h4>
        <h5 className="block text-3xl mb-3 font-semibold text-gray-900 dark:text-white">{formatCurrency(price )}</h5>
      </div>
      <button 
        onClick={handleAddCart}
        className=" pl-4 my-3 mx-4 absolute  bg-none items-center justify-center border-none rounded-[50px] top-0 right-0 w-11 h-11  text-blue-600  hover:flex hover:text-green-600 cursor-pointer text-2xl  ">
        <FaCartPlus />
      </button>
      
    </section>
  );

}

export default ProductsCards;

ProductsCards.propTypes = {
  data: propTypes.shape({})
}.isRequired;

