import React, { useContext, useEffect,  } from "react";
import getProducts from "../../api/getProducts";
import ProductsCards from "./ProductsCards";
import Loading from "../Loading/Loading";
import AppContext from "../../context/AppContext";

function Products() {

  const {products,setProducts, loading, setLoading} = useContext(AppContext);
  
  useEffect(()=> {
    getProducts("iphone")
      .then((response)=>{
        setProducts(response);
        setLoading(false);
      });
  },[]);

  

  return(
    (loading ? <Loading /> :<section className="px-5 pt-28 pb-12 grid gridProductor gap-5 container ">
      {products.map((product) => <ProductsCards key={product.id} data = {product}/>)}
    </section>)
    
  );

}

export default Products;
