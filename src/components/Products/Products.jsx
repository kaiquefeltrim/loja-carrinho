import React, { useEffect, useState } from "react";
import getProducts from "../../api/getProducts";
import ProductsCards from "./ProductsCards";

function Products() {

  const [products,setProducts] = useState([]);

  useEffect(()=> {
    getProducts("iphone")
      .then((response)=>{
        setProducts(response);
      });
  },[]);

  console.log(products);

  return(
    <section className="px-5 pt-28 pb-12 grid grid-cols-4 gap-5 ">
      {
        products.map((product) => <ProductsCards key={product.id} data = {product}/>)
      }
    </section>
  );

}

export default Products;
