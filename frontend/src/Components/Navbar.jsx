import React, { useContext } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { FaShopify } from "react-icons/fa";
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

function Navbar() {

    const {getTotalCartItems} = useContext(ShopContext);
    const [menu , setMenu] = useState("Shop");


  return (
    <div className='flex w-[full] h-[72px]  justify-between border-black-100 border-b-[1px]'>
        <Link to='/' className='mt-[21px]'>
            <div className="flex items-center justify-center ml-[45px]">
                <FaShopify className='text-3xl text-blue-400'/>
                <p className='font-bold'>SHOPIFY</p>
            </div>
        </Link>
        <ul className='flex items-center justify-center space-x-[24px]'>
            <li className="cursor-pointer" onClick={() => {setMenu("Shop")}}> <Link to='/'>Shop</Link>  {menu === "Shop" ? <hr className='bg-sky-400 h-1 rounded-full'/> :<></> }</li>
            <li className="cursor-pointer" onClick={() => {setMenu("Mens")}}> <Link to='/mens'>Mens</Link>  {menu === "Mens" ? <hr className='bg-sky-400 h-1 rounded-full' /> :<></> }</li>
            <li className="cursor-pointer" onClick={() => {setMenu("Women")}}> <Link to='/womens'>Womens</Link>  {menu === "Women" ? <hr className='bg-sky-400 h-1 rounded-full'/> :<></> }</li>
            <li className="cursor-pointer" onClick={() => {setMenu("Kids")}}> <Link to='/kids'>Kids</Link>  {menu === "Kids" ? <hr className='bg-sky-400 h-1 rounded-full'/> :<></> }</li>
        </ul>
        <div className="flex items-center justify-center">
            <Link to="/login"><button className='border px-[27px] py-[6px] rounded-full border-zinc-300'>Login</button></Link>
            <Link to="/cart">
                <div className='flex'>
                    <FaCartShopping className='ml-[21px] mr-[9px] text-3xl text-sky-400'/>
                    <div className="w-[21px] h-[21px] flex mr-[81px] justify-center items-center mt-[-12px] ml-[-12px] rounded-full  bg-red-400 text-white">{getTotalCartItems()}</div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Navbar
