import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CardContext = createContext()


const ShopListProvider = ({children})=>{
    const[cart , SetCart] = useState([])

    const pushCart = (res)=>{
        if(cart.length == 0){
            let current = [...cart]
            current.push({...res , count : 1} )
            SetCart(current)
        }else{
            let current = [...cart]
            let finded = current.find((product)=>{
                return product?.id == res?.id
            })

            if(!finded){
                current.push({...res , count : 1})
                SetCart(current)
                toast.success("Maxsulot qoshildi")
            }else{
                toast.warning("bu maxsulot savatda bor")
            }
        }

    }

    const incr = (i)=>{
        let current = [...cart]
        if(current[i].stock !== current?.[i].count){
            current[i].count += 1
        }else{
            toast.warning("Maxsulot tugadi")
        }
        SetCart(current)
    }
    const decr = (i)=>{
        let current = [...cart]
        if(current[i].count !== 1){
            current[i].count -= 1
        }else{
            current.splice(i , 1)
        }
        SetCart(current)
    }
    const Delete = (i) => {
        let current = [...cart];
        current.splice(i, 1); 
        SetCart(current);
    };
    



    return <CardContext.Provider value={{cart , SetCart , pushCart , incr , decr , Delete}}>
        {children}
    </CardContext.Provider>
}
export default ShopListProvider;