import React from 'react'
import Item from './Item';
import all_product from './Assets/all_product';

function RelatedProducts(props) {

    let count = 0;
    const {product} = props;
  return (
    <div>
        <div className="flex flex-col items-center mt-[60px] mb-[36px]">
            <h1 className='text-3xl font-bold'>RELATED PRODUCTS</h1>
            <hr className="border-t-4 border-red-500 w-[240px]" />
        </div>       
        <div className="px-[21px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center">
            {all_product.map((item, i) => {
                if (count < 4 && item.category === product.category) {
                    count++;
                    return (
                        <div key={i} className="w-full sm:w-auto p-6">
                            <Item
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                new_price={item.new_price}
                                old_price={item.old_price}
                            />
                        </div>
                    );
                } else {
                    return null;
                }
            })}




        </div>
    </div>
  )
}

export default RelatedProducts
