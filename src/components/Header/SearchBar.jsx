import React, { useState, useContext } from "react";
import getProducts from "../../api/getProducts";
import AppContext from "../../context/AppContext";


function SearchBar() {

  const {setProducts, setLoading} = useContext(AppContext);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (event)=>{
    event.preventDefault();
    setLoading(true);
    
    const products = await getProducts(searchValue);
    
    setProducts(products);
    setLoading(false);
    setSearchValue("");
  };

  return(
    <form className="flex w-full justify-between pr-3 shadow-md max-w-lg gap-3.5 " onSubmit={handleSearch}>   
      <label htmlFor="default-search" className="mb-2 w-full max-w-lg text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div className="max-w-lg w-full relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="search" 
          value={searchValue}
          onChange={({target}) => setSearchValue(target.value)}
          id="default-search" className=" p-4 ps-10 w-full max-w-lg text-gray-900 border flex-grow  outline-none text-sm font-medium  border-solid border-gray-300 rounded-lg 0 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
      </div>
    </form>
  );
}

export default SearchBar;
