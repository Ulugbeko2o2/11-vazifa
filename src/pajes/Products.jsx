import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiClient } from '../utils/apiservis';
import { products_url } from '../utils/urls';
import { useContext } from 'react';
import { CardContext } from '../Context/ShopList';

const Products = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(""); 
  const [page , setPage] = useState([])
  const [skip , setSkip] = useState(1)
  const {pushCart} = useContext(CardContext)


  const getProducts = async () => {
    try {
      let res = await apiClient({
        url: category 
          ? `${products_url}/category/${category}?limit=20&skip=${(skip-1) * 20}` 
          : `${products_url}?limit=20&skip=${(skip-1) * 20}`,
      });
  
      console.log("API dan kelgan ma'lumot:", res.data);
  
      if (res?.status === 200) { 
        setData(res?.data?.products || []);
  
        let current_pagec = [];
        for (let i = 1; i <= Math.ceil(res?.data?.total / 20); i++) {
          current_pagec.push(i);
        }
        setPage(current_pagec);
      }
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
    }
  };

  const getCategories = async () => {
    let res = await apiClient({
      url: "/products/categories",
      method: "GET",
    });
    if (res?.status === 200) {
      setCategories(res?.data);
    }
  };
  useEffect(() => {
    getProducts();
  }, [category , skip]); 

  useEffect(() => {
    getCategories();
  }, []);
  const searchInfo = async (search) => {
    if(search.length > 3 ){
        let res = await apiClient({
            method:"GET",
            url:`/products/search?q=${search}`
        })
        if (res?.status == 200){
            setData(res?.data.products)
        }
    }
  }

  return (
    <div className="mx-auto w-full bg-gray-800 py-5">
      <p className="text-center text-white font-bold text-[20px]">Maxsulotlar</p>
      <div className="max-w-sm mx-auto mb-5  ">
        <div>
       <select
  id="categories_select"
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
>
  <option value="">Kategoriya tanlang</option>
  <option value="">All</option>
  {categories.map((cat, index) => (
    <option key={index} value={cat.slug}>
      {cat.name}
    </option>
  ))}
</select>

        </div>
        <div className='pt-4 max-w-md mx-auto'>
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input onChange={(val)=>{
            searchInfo(val.target.value)
            // setSearch(val.target.value)

        }} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
        <button onClick={()=>{searchInfo()}} type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
        </div>
      </div>
     {data?.length > 0 ? <> <div className="grid mx-auto max-w-[1550px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((item) => (
          <div key={item?.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
            <Link to={`/product-info/${item?.id}`}>
              <img className="p-4 w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-t-lg object-contain" src={item?.thumbnail} alt={item?.title} />
            </Link>
            <div className="px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900">{item?.title}</h5>
              <div className="flex items-center mt-2.5 mb-5">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-4 h-4 ${index < Math.round(item?.rating) ? "text-yellow-300" : "text-gray-200"}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
                  {item?.rating}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900">${item?.price}</span>
                <button onClick={()=>{
                    pushCart(item)

                }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Sotib olish
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5 space-x-2">
  {page?.map((item) => (
    <button
      onClick={() => setSkip(item)}
      className={`px-4 py-2 text-white border border-blue-500 rounded-lg transition-all duration-300 
        ${skip === item ? "bg-blue-700" : "bg-blue-500 hover:bg-blue-600"}`}
      key={item}
    >
      {item}
    </button>
  ))}
</div>

      
       </>: <>
      <div  >
        
        <p className="text-center text-white font-bold text-[20px]">Malumot topilmadi</p>
      </div>
      </>}
    </div>
  );
};

export default Products;
