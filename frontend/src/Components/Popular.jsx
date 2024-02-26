import React from 'react'
import Item from './Item'

function Popular() {

    const data_product = [
        {
          id: 1,
          name: "Floral Print Maxi Dress",
          image: "https://m.media-amazon.com/images/I/81+KTJg1UlL._SY741_.jpg",
          new_price: 89,
          old_price: 75
        },
        {
          id: 2,
          name: "Sanisa Women's Cotton Blend Straight Kurti",
          image: "https://m.media-amazon.com/images/I/61+69uQf7FL._SY741_.jpg",
          new_price: 45,
          old_price: 38
        },
        {
          id: 3,
          name: "GoSriKi Women's Cotton Blend  Straight Kurti",
          image: "https://m.media-amazon.com/images/I/51LfzsMZAWL._SY741_.jpg",
          new_price: 120,
          old_price: 95
        },
        {
          id: 4,
          name: "SIRIL Women's Chiffon Hot Fixing Saree ",
          image: "https://m.media-amazon.com/images/I/7135pbPVohL._SX569_.jpg",
          new_price: 99,
          old_price: 85
        },
    
      ];
      
  return (
    <div className="container mx-auto px-4">
      <div className='mt-20'>
        <h1 className='flex justify-center font-bold text-3xl'>POPULAR IN WOMEN</h1>
        <hr className="w-48 h-1 bg-red-500 mx-auto my-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center items-center">
          {data_product.map((item, i) => (
            <div key={i} className="w-full sm:w-auto p-6">
              <Item
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Popular
