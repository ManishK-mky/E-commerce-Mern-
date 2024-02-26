import React from 'react'
import { PiHandWavingFill } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";

function Hero() {
  return (
    <div className='w-full h-[90vh] flex'>
        <div className="w-[40%] h-[90vh] flex flex-col justify-center items-center">
            <h2 className='text-[15px] text-zinc-400 font-medium mb-[18px]'>NEW ARRIVALS ONLY</h2>
            <div className="">
                <div className="flex ">
                    <p className='md:text-6xl text-4xl pl-[12px] font-bold'>new</p>
                    <PiHandWavingFill className='mt-[12px] ml-[24px] text-5xl text-yellow-400'/>
                </div>
                <p className='md:text-6xl text-4xl pl-[12px] mb-[12px] font-bold'>collections</p>
                <p className='md:text-6xl text-4xl pl-[12px] mb-[6px] font-bold'>for everyone</p>
            </div>
            <div className="w-[270px] mt-[24px]">
                <div className="flex jusitfy-evenly w-[210px]  bg-red-400 rounded-full py-[15px] ml-[12px] px-[23px] font-bold text-white">Latest Collection <FaArrowRight className='text-xl ml-[18px] mt-[3px]'/></div>
            </div>
        </div>
        <div className="w-[60%] h-[90vh] bg-red-300">
            <img className='w-[100%] h-[90vh] object-cover ' src="https://images.unsplash.com/photo-1523199455310-87b16c0eed11?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
    </div>
  )
}

export default Hero
