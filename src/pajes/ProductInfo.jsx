import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiClient } from '../utils/apiservis'

const ProductInfo = () => {
    const {id} = useParams()
    const [product , setProduct] = useState(null)

    const getProductInfo = async ()=>{
        let res = await apiClient({
            method:"GET" , 
            url:`/products/${id}`
        })
        if(res?.status === 200) setProduct(res?.data)
    }

    useEffect(()=>{
        getProductInfo()
    },[])



 
  return (
    <div className='p-8 bg-gray-800'> 
<div className="max-w-lg mx-auto bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-white dark:border-gray-700">
        <img className="rounded-t-lg p-8 w-full" src={product?.thumbnail} alt={product?.title} />
    <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-800">{product?.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-800">{product?.description}</p>
    </div>
</div>

    </div>
  )
}

export default ProductInfo
