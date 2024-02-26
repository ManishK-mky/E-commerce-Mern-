import React from 'react';
import {Link }from 'react-router-dom'

// onClick={window.scrollTo(0,0)} --> it is used to scroll the page up whenever the image is clicked

function Item(props) {
  return (
    <>
      <div className="sm:w-[100%] w-[70%] h-[70vh] rounded border mb-[24px] ">
          <div className="w-[100%] h-[78%] ">
            <Link to={`/product/${props.id}`}><img className="w-[100%] h-[100%] object-cover border-b-2 transform transition-transform hover:scale-105 hover:duration-600" onClick={window.scrollTo(0,0)} src={props.image} alt="image" /></Link>
          </div>
          <div className="mt-[6px] flex flex-col justify-between">
            <p className='text-[14px] font-semibold px-[12px]'>{props.name}</p>
            <div className="flex space-x-[12px] font-bold mt-[9px] ml-[12px]">
              <p className='text-[14px] text-gray-600 line-through transform -rotate-3'>{props.old_price}</p>
              <p >{props.new_price} Rs</p>
            </div>
          </div>
      </div>
    </>
  );
}

export default Item;
