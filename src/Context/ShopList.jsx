import { createContext, useState } from "react";

export const CardContext = createContext()


const ShopListProvider = ({children})=>{
    const[cart , SetCart] = useState([])

    const pushCart = (res)=>{
        let current = [...cart]
        current.push(res)
        SetCart(current)

    }



    return <CardContext.Provider value={{cart , SetCart , pushCart}}>
        {children}
    </CardContext.Provider>
}
export default ShopListProvider;