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
    <section>
      <ProductsCards />
    </section>
  );

}

export default Products;
