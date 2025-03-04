import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './pajes/Products.jsx'
import ProductInfo from './pajes/ProductInfo.jsx'
import ShopListProvider from './Context/ShopList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopListProvider>
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<App/>}>
      <Route path='/' element={<Products/>} />
      <Route path='/product-info/:id' element={<ProductInfo/>} />
     </Route>
    </Routes>
    </BrowserRouter>
    </ShopListProvider>
  </StrictMode>,
)
