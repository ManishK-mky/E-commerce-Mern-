import React from 'react';

function NewsLetter() {
  return (
    <>
        <div className="w-[100%] h-[93vh] justify-center items-center flex mb-[40px] ">
            <div className="w-[48%] h-[100%]">
                <img className='w-[100%] h-[100%] object-cover transform scale-x-[-1]' src="https://images.unsplash.com/photo-1507680434567-5739c80be1ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="w-[48%] h-[100%] bg-zinc-100 pt-[3px] pl-[12px] flex flex-col justify-center rounded">
                <p className='md:text-3xl text-2xl font-bold mx-[24px]'>Get special deals: Direct to your inbox!</p>
                <p className='md:text-[18px] text-[15px] font-light my-[24px] mx-[24px]'>"Fashion is the armor to survive the reality of everyday life." -<br/><p className='italic pt-[3px]'> Bill Cunningham</p></p>
                <p className='md:text-[18px] text-[15px] font-semibold my-[6px] mx-[24px]'>Subscribe to Our Newsletter for the Latest Updates and Exclusive Offers...</p>
                <div className="flex flex-col items-center pt-[3px]">
                    <input className="md:my-[1px] mt-[21px] w-[90%] h-[40px] rounded-xl pl-[24px] border-2" type="text" placeholder="Your Email Address"/><br/>
                    <button className="w-[90%] bg-sky-400 text-white font-bold py-[9px] px-[15px] rounded-xl">Subscribe</button>
                </div>
            </div>
        </div>
    </>
  );
}

export default NewsLetter;
