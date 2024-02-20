import React from "react";
import { BsCartPlus } from "react-icons/bs";
import propTypes from "prop-types";

function ProductsCards({data}) {

  const {title, thumbnail, price} = data;

  return(
    <section className="w-full max-w-xs flex flex-col cursor-pointer mx-auto  relative">
      <div className="w-full max-w-sm border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <img className="p-4 w-full rounded-t-lg" src={thumbnail} alt="Imagem do produto" />
        <div className="p-4">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          <div className="flex items-center justify-between mt-3">
            <span className="block text-3xl  font-bold text-gray-900 dark:text-white">{price}</span>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><BsCartPlus /></button>
          </div>
        </div>
      </div>
    </section>
  );

}

export default ProductsCards;

ProductsCards.propTypes = {
  data: propTypes.shape({})
}.isRequired;

