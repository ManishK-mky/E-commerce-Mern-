import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { CiCircleRemove } from "react-icons/ci";

function CartItems() {

    const {getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div>
            <div className="w-[100%] h-[100%]">
                <div className="w-[100%] px-[30px] flex my-[21px]">
                    <div className="w-[60%] flex justify-evenly">
                        <p className='font-bold w-[25%] '>Products</p>
                        <p className='font-bold md:mr-[60px]'>Title</p>
                    </div>
                    <div className="font-bold w-[40%] flex justify-evenly">
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                    </div>
                </div>
                <hr />
                <div className='w-[100%] h-[100%] px-[30px] mt-[90px]'>
                    {all_product.map((e) => {
                        if (cartItems[e.id] > 0) {
                            return (
                                <div key={e.id}> {/* Add key prop here */}
                                    <div className="w-[100%] h-[20px] flex mb-[180px] font-light">
                                        <div className="w-[60%] flex items-center justify-evenly">
                                            <img className="w-[45%] h-[30vh] md:w-[20%] md:h-[27vh] object-cover font-medium" src={e.image} alt="" />
                                            <p className="w-[50%] pl-[40px]">{e.name}</p>
                                        </div>
                                        <div className="flex w-[40%] justify-evenly pl-[12px] font-light">
                                            <p className="w-[30px]">${e.new_price}</p>
                                            <button className="w-[40px] border h-[30px] border-2 rounded ml-[21px]">
                                                {cartItems[e.id]}
                                            </button>
                                            <p className="w-[40px] ml-[15px] mr-[6px] pl-[9px]">
                                                {e.new_price * cartItems[e.id]}
                                            </p>
                                            <CiCircleRemove
                                                className="mr-[9px] w-[40px] text-xl"
                                                onClick={() => {
                                                    removeFromCart(e.id);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {/* <hr className="w-full border-t-2 border-gray-200 " /> */}
                                </div>
                            );
                        } else {
                            return null; // Return null for items with cartItems[e.id] <= 0
                        }
                    })}


                </div>
                <div className="w-[100%] h-[50vh] flex md:ml-[60px] justify-center items-center mb-[60px]">
                    <div className="w-[50%] mt-[120px] ml-[60px] ">
                        <h1 className='text-2xl font-bold my-[20px]'>Cart Totals</h1>
                        <div className="flex justify-between items-center">
                            <p className='text-[18px] my-[12px] font-light'>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center">
                            <p className='text-[18px] my-[12px] font-light'>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center mb-[30px] ">
                            <p className='text-[18px] font-semibold my-[12px] font-light'>Total</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <button className='bg-red-500 p-[12px] mb-[120px] text-white font-bold rounded-xl'>PROCEES TO CHECKOUT</button>
                    </div>
                    <div className="h-[100px] flex items-center pl-[30px]">
                        <div className="w-[1px] h-[24vh] bg-gray-400"></div>
                    </div>
                    <div className="w-[40%] h-[20vh]  ml-[21px]">
                        <p className='my-[18px] text-[18px] font-light'>If you have promo code. Enter it here...</p>
                        <div className="flex items-center md:flex ">
                            <input className="w-[210px] h-[45px] pl-[21px] rounded bg-gray-200 " type="text" name="" placeholder='Promo Code'/>
                            <button className='bg-black text-white h-[45px] px-[21px] rounded'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;
