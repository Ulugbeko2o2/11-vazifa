import axios from "axios";


export const apiClient = axios.create({
    baseURL:"https://dummyjson.com",
    
})

apiClient.interceptors.response.use(
    (res)=>{
        return res
        // return{
        //     data:res?.data,
        //     is_info: res?.status == 200 ? true : false,
        // }  
    },
    (err)=>{
        console.log(err);
    }
)
let token = localStorage.getItem("access")
apiClient.interceptors.request.use(
    (config)=>{
        config.headers.set('Authorization' , `Bearer ${token}`)
        console.log(config);
        return config
    },
    (err)=>{
        console.log(err);
    }
)


