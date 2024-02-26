import React from 'react'

function Offers() {
  return (
    <div className='w-full h-screen mb-[15px]'>
        <div className="relative w-full h-screen flex justify-center items-center">
            <div className="w-[48%] h-[96%] bg-sky-300 mt-[21px] ml-[12px] relative">
            <img src="https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="w-[48%] h-[96%] bg-green-300 mr-[12px] mt-[21px] relative">
            <img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="absolute top-[20%] left-[33%] transform translate[-50%,-50%] w-[36%] h-[70%] bg-zinc-900 rounded opacity-90 flex flex-col items-center justify-center ">
                <div className="ml-[21px]">
                    <p className='text-7xl font-bold text-white'>Exclusive Offers For You</p>
                </div>
                <div className="">
                    <p className='text-[13px] font-light text-white mt-[30px]'>GET BEST QUALITY PRODUCTS FROM SHOPIFY.</p>
                </div>
                <button className='mt-[30px] w-[120px]  rounded-xl bg-red-400 py-[9px] font-bold text-white'>Check Now</button>
            </div>
        </div>
    </div>


  )
}

export default Offers
