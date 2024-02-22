import React, { useContext } from "react";  
import formatCurrency from "../../utility/formatCurrency";
import propTypes from "prop-types";
import AppContext from "../../context/AppContext";

function CartItens({data}) {

  const { cartItens, setCartItens } = useContext(AppContext);
  const { id, thumbnail, price, title} = data;

  const handleRemoveItem = () => {
    const updatedItems = cartItens.filter((item) => item.id != id);
    setCartItens(updatedItems);
  };
   
  return(
    <section>
      <img src={thumbnail} alt="" />
      <div>
        <h3>{title}</h3>
        <h3>{formatCurrency(price)}</h3>

        <button  onClick={ handleRemoveItem }>
          delte itens
        </button>
      </div>
    </section>
  );
}

export default CartItens;

CartItens.propTypes = {
  data: propTypes.object
}.isRequired;
