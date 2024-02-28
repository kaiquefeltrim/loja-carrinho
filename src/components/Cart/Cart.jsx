import React, { useContext, useState } from "react";
import CartItens from "./CartItens";
import AppContext from "../../context/AppContext";
import formatCurrency from "../../utility/formatCurrency";


function Cart() {
  
  const {cartItens ,isCartVisible} = useContext(AppContext);
  
  const [precos, setPrecos] = useState([]);

  const handlePriceUpdate = (novoPreco, itemId) => {
    const index = precos.findIndex((item) => item.id === itemId);
    if (index !== -1) {
      const novosPrecos = [...precos];
      novosPrecos[index].price = novoPreco;
      setPrecos(novosPrecos);
    } else {
      setPrecos([...precos, { id: itemId, price: novoPreco }]);
    }
  };

  const totalPrice = precos.reduce((acc, item)=> item.price + acc, 0);
  console.log(precos);
  return(
    <div
      id="drawer-right-example" 
      className= {`cart pt-28 px-5  fixed w-full justify-between border-t-2 border-solid border-gray-500 flex flex-col top-0 right-0  h-screen  overflow-y-auto   bg-white max-w-80 dark:bg-slate-800 ${isCartVisible ? "cart--ative": ""}`}
      aria-labelledby="drawer-right-label " >
      <div className="items-center grow overflow-auto">
        {isNaN(cartItens)  ? cartItens.map((iten) => <CartItens key={iten.id} data={iten} onPriceUpdate={handlePriceUpdate}/>): <p className="text-gray-500 text-center">SEM ITENS </p> }
      </div>
      <div className="text-2xl text-white  border-t font-medium mb-5">
        Total: {formatCurrency(totalPrice)}
      </div>
    </div>

  );
}

export default Cart;
