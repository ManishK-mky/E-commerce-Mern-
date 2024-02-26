import React from 'react'

function LoginSignup() {
  return (
    <div className="w-[100%] h-[90vh]  flex justify-center my-[30px]">
       <div className="w-[54%] md:w-[30%] h-[84vh] bg-zinc-200 flex flex-col items-center justify-center rounded-xl">
          <h1 className='text-3xl font-bold'>Sign Up</h1>
          <div className="w-[100%] my-[24px] space-y-[24px] flex flex-col items-center ">
            <input className="w-[90%] p-[10px] rounded-full pl-[24px]" type="text" placeholder='Name' />
            <input className="w-[90%] p-[10px] rounded-full pl-[24px]" type="text" placeholder="Email Address" />
            <input className="w-[90%] p-[10px] rounded-full pl-[24px]" type="text" placeholder='Password'/>
          </div>
          <button className='w-[150px] pt-[6] border rounded-full bg-red-500 text-white py-[5px]'>Continue</button>
          <p className='py-[24px]'>Already have an account? <span className='font-bold text-red-500'>Login here</span></p>
          <div className="flex gap-3 items-center justify-center px-[36px]">
            <input className="h-8 w-6" type="checkbox" name="" id="" />
            <p>By continuing, I agree to the terms of use and Privacy policy </p>
          </div>
       </div>
    </div>
  )
}

export default LoginSignup
