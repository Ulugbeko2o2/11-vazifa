
import React, { useContext, useEffect } from 'react'
import { CardContext } from '../Context/ShopList'

const Carts = () => {
    const context = useContext(CardContext)
    // console.log(context.cart);

    const AllSum = ()=>{
      let som = 0
      context.cart.forEach(element =>{
        som +=(element?.count * element?.price)
      })
      return Number(som).toFixed(2)
    }
    // useEffect(()=>{},)
    
if(context?.cart.length == 0){
    return <p className='text-2xl text-center text-white bg-gray-900 font-bold'>{"Savatcha bosh"} </p>
}
  return (
    <div>
       <div className="mx-auto bg-gray-900 text-center  px-4 2xl:px-0">
               <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Savatcha</h2>
               </div>
               <div className=' flex mx-auto bg-gray-900 max-w-[1550px]'>
                <div className='w-[60%]'>
                {
            context.cart?.map((product,index)=>{
            return <div key={product?.id}>
               <section  className="container w-full mx-auto   dark:bg-gray-900">
              <div className=" sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                  <div>
                    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                      <div className=" md:flex  md:justify-between md:gap-6 ">
                          <img className=" h-[150px] " src={product?.thumbnail} alt="imac image" />
                        <div className="w-full flex flex-col gap-5 min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                          <a href="#" className="text-base font-medium text-gray-900 hover:underline dark:text-white">{product?.title}</a>
                          <a href="#" className="text-base font-medium text-gray-900 hover:underline dark:text-white">{product?.category}</a>
                          <div className="flex items-center">
                            <button onClick={()=>{context?.decr(index)}} type="button" id="decrement-button-5" data-input-counter-decrement="counter-input-5" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                              <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                              </svg>
                            </button>
                            <span className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white">{product?.count}</span>
                            <button onClick={()=>{context?.incr(index)}} type="button" id="increment-button-5" data-input-counter-increment="counter-input-5" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                              <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                              </svg>
                            </button>
                          </div>
                          <div className='flex justify-between'>
                          <div className="  md:w-32">
                            <p className=" font-bold text-white dark:text-white">{product?.price}$</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <button onClick={() =>{context?.Delete(index)}} type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                              <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                              </svg>
                              Delete
                            </button>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
               </section>
            </div>
            })
        }
                </div>
                <div className='bg-gray-900 p-6 w-[40%]'>
                  
<form>
    <div className="grid gap-3 mb-3 md:grid-cols-2">
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ismingiz</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ism" required />
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Familyangiz</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Familya" required />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Viloyat</label>
            <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Manzil" required />
        </div>  
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefon raqam</label>
            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Raqam" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Shahar</label>
            <input type="url" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Shaxar" required />
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Uy</label>
            <input type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Uy" required />
        </div>
        <button  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tasdiqlash</button>
    </div>
</form>
                </div>

               </div>
       
        <div className='mx-auto bg-gray-900 flex justify-around text-white'>
          <p className='text-base font-medium text-gray-900 hover:underline dark:text-white'>Total: {AllSum()} $</p>
         
        </div>
    </div>
  )
}

export default Carts
