import React, { useContext } from "react";
import CartItens from "./CartItens";
import AppContext from "../../context/AppContext";
import formatCurrency from "../../utility/formatCurrency";

function Cart() {
  
  const {cartItens ,isCartVisible} = useContext(AppContext);

  const totalPrice = cartItens.reduce((acc, iten)=> iten.price + acc, 0);


  return(
    <section 
      id="drawer-right-example" 
      className= {isCartVisible ? "pt-28 px-5  fixed w-full justify-between flex flex-col top-0 right-0  h-screen p-4 overflow-y-auto transition-transform  bg-white max-w-80 dark:bg-gray-800" : "" }
      tabIndex="-1" 
      aria-labelledby="drawer-right-label                                                    " >
      <div>
        {cartItens.map((Iten) => <CartItens key={Iten.id} data={Iten} />) }
      </div>
      <div>{formatCurrency(totalPrice)}</div>
    </section>

  );
}

export default Cart;
