import React, { useContext, useState, useEffect } from "react";
import formatCurrency from "../../utility/formatCurrency";
import propTypes from "prop-types";
import AppContext from "../../context/AppContext";
import { BsCartXFill } from "react-icons/bs";

function CartItens({ data, onPriceUpdate }) {
  const { cartItens, setCartItens } = useContext(AppContext);
  const { id, available_quantity, thumbnail, price, title } = data;
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  
  const handleRemoveItem = () => {
    const updatedItems = cartItens.filter((item) => item.id != id);
    setCartItens(updatedItems);
    onPriceUpdate(0, id);
  };


  const quantity = [];
  for (let i = 1; i <= available_quantity; i++) {
    quantity.push(i);
  }

  useEffect(() => {
    const totalPrice = price * selectedQuantity;
    onPriceUpdate(totalPrice, id);
  }, [selectedQuantity, price]);

  const handleSelect = (event) => {
    const selectedValue = event.target.value;
    const maxQuantity = available_quantity;

    if (selectedValue> maxQuantity) {
      setSelectedQuantity(maxQuantity.toString());
    } else {
      setSelectedQuantity(selectedValue);
    }
  };


  return (
    <div className="flex items-start border-b-2 pb-5 mt-5 relative border-solid  border-gray-700 ">
      <img src={thumbnail} alt="" className="w-16" />
      <div className="py-0 pr-9 pl-3">
        <h3 className=" text-xs font-medium text-white/50 mb-2 ">{title}</h3>
        <h4 className="text-2xl text-white font-medium">{isNaN(selectedQuantity) ? "R$ 0,00" : formatCurrency(price * selectedQuantity)}</h4>
        <div className="flex flex-row text-center w-28  border-0  border-b-2 border-gray-700 appearance-none ">
          <label htmlFor="underline_select" className="sr-only">Unidades</label>
          <input 
            className="block py-2.5 px-0 w-12 text-sm text-center cursor-pointer text-gray-400 bg-transparent appearance-none dark:text-gray-400 focus:outline-none focus:ring-0  peer " 
            onChange={handleSelect} 
            value={selectedQuantity}
            type="number" min="1" max={String(available_quantity)}
          >
          </input>
          <p className="text-gray-400 text-sm py-2.5 px-0 w-32">/ {available_quantity} Uni</p>
        </div>
        <button className="absolute top-0 text-xl pr-3 border-none bg-none cursor-pointer  right-0 text-red-600" onClick={handleRemoveItem}>
          <BsCartXFill />
        </button>
      </div>
    </div>
  );
}

export default CartItens;

CartItens.propTypes = {
  data: propTypes.object.isRequired,
  onPriceUpdate: propTypes.func.isRequired
};
