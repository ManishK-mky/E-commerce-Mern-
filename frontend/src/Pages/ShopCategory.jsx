import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { RiArrowDropDownLine } from "react-icons/ri";
import Item from '../Components/Item';

function ShopCategory(props) {
  
  const {all_product} = useContext(ShopContext);

  return (
    <div>
        <div className="">
          <img className="w-full object-cover" src={props.banner} alt="banner" />
        </div>
        <div className="flex justify-between items-center my-[30px]">
          <p>
            <span className='font-bold pl-[120px]'>Showing 1-12</span> out of 36 products
          </p>
          <div className="border-2 rounded-full border-black-800 w-[120px] bg-sky-200 flex justify-center items-center mr-[120px] py-[6px] font-bold">
            <p>Sort by</p>
            <RiArrowDropDownLine className='text-3xl'/>
          </div>
        </div>
        <div className="px-[60px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center object-fit">
          {all_product.map((item,i) => {
            if(props.category === item.category){
              return <Item
                key = {i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            }else{
              return null;
            }
          })}
        </div>
    </div>
  )
}

export default ShopCategory
