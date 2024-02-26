import React, { useContext } from 'react'
import { FaStar } from "react-icons/fa";
import { ShopContext } from '../Context/ShopContext';

const StarRating = ({ rating }) => {
    // Function to render stars based on rating
    const renderStars = () => {
      const stars = [];
      for (let i = 0; i < rating; i++) {
        stars.push(<FaStar className='text-yellow-400'/>);
      }
      return stars;
    };
  
    return (
      <div>
        <div className="flex my-[30px] space-x-[12px]">
        {renderStars()}
        </div>
      </div>
    );
  };

function ProductDisplay(props) {

    const {product} = props;
    const rating = product.rating;

    const {addToCart} = useContext(ShopContext); //isme product ID pass karenge

  return (
    <div className='w-full h-[93%] my-[30px] flex'>
        <div className="w-[48%] h-[100%] ml-[30px]  flex items-center justify-evenly">
           <div className="w-[36%] md:w-[18%] h-[100%]  flex flex-col items-center justify-between space-y-[12px]">
                <img className="w-[90%] h-[21%] object-cover" src={product.image} alt="" />
                <img className="w-[90%] h-[21%] object-cover" src={product.image} alt="" />
                <img className="w-[90%] h-[21%] object-cover" src={product.image} alt="" />
                <img className="w-[90%] h-[21%] object-cover" src={product.image} alt="" />
           </div>
           <div className="w-[82%] h-[100%]">
                <img className="w-[100%] h-[100%] object-cover" src={product.image} alt="" />
           </div>
        </div>
        <div className="w-[48%] mr-[30px] ml-[54px]">
            <h1 className='text-3xl font-bold my-[18px]'>{product.name}</h1>
            <StarRating  rating={product.rating}/>
            <div className="flex my-[27px]">
                <p className='text-2xl line-through font-semibold text-gray-400'>${product.old_price}</p>
                <p className='text-2xl font-semibold ml-[21px]'>${product.new_price}</p>
            </div>
            <p className='font-light my-[30px]'>{product.description}</p>
            <div className="">
                <p className='font-bold'>Select Size</p>
                <div className="flex space-x-[30px] my-[21px] cursor-pointer">
                    <div className="border rounded-[9px] p-[12px]">S</div>
                    <div className="border rounded-[9px] p-[12px]">M</div>
                    <div className="border rounded-[9px] p-[12px]">L</div>
                    <div className="border rounded-[9px] p-[12px]">XL</div>
                    <div className="border rounded-[9px] p-[12px]">XXL</div>
                </div>
            </div>
            <button onClick={() => {addToCart(product.id)}} className='my-[30px] px-[36px] py-[12px] rounded-full bg-red-500 text-white'>ADD TO CART</button>
            <p className='text-xl'><span className='text-xl font-bold'>Category : </span>{product.category}</p>
        </div>
    </div>
  )
}

export default ProductDisplay
