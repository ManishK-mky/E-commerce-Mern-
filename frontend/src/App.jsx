import React from 'react'
import Navbar from './Components/Navbar'
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer';
import kids_banner from './Components/Assets/kids_banner.png';
import mens_banner from './Components/Assets/mans_banner.png';
import women_banner from './Components/Assets/womens_banner.png';


function App() {
  return (
    <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop/>}></Route>
            <Route path="/mens" element={<ShopCategory category="men" banner={mens_banner}/>}></Route>
            <Route path="/womens" element={<ShopCategory category="women" banner={women_banner}/>}></Route>
            <Route path="/kids" element={<ShopCategory category="kid" banner={kids_banner}/>}></Route>
            <Route path="/product" element={<Product/>}>
              <Route path=":productId" element={<Product/>}></Route>
            </Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/login" element={<LoginSignup/>}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default App
