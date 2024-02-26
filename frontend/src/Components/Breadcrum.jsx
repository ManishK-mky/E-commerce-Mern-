import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

function Breadcrum(props) {

    const {product} = props;

    return (
    <div className='flex space-x-[6px] mt-[30px] ml-[30px]'>
      HOME <IoIosArrowForward  className='ml-[4px] mt-[5px]'/> SHOP <IoIosArrowForward className='ml-[4px] mt-[5px]' /> {product.category} <IoIosArrowForward className='ml-[4px] mt-[5px]'/> {product.name}
    </div>
  )
}

export default Breadcrum
