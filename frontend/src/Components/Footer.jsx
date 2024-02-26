import React from 'react';
import { FaPinterest } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaShopify } from "react-icons/fa";

function Footer() {
  return (
    <div className='w-[100%] p-[12px] bg-zinc-100 flex flex-col items-center'>
        <div className="">
            <FaShopify className='text-[72px] ml-[20px] text-blue-500'/> <br/>
            <p className='text-3xl font-bold'>SHOPIFY</p>
            <hr className='bg-sky-400 h-1 rounded-full'/>
        </div>
        <div className="flex px-[50px] space-x-[24px] my-[24px]">
            <p>Company</p>
            <p>Products</p>
            <p>Offices</p>
            <p>About</p>
            <p>Contact</p>
        </div>
        <div className="text-3xl flex space-x-[30px] px-[50px] mb-[15px]">
            <FaPinterest className='text-red-600'/>
            <AiFillInstagram className='text-orange-600'/>
            <IoLogoWhatsapp className='text-green-400'/>
        </div>
        <div className="w-[600px] border-black-600 border-b-[3px] mb-[20px]"></div>
    </div>
  )
}

export default Footer
