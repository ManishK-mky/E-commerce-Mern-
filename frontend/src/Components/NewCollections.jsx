import React from 'react';
import Item from './Item';
import new_collection from './Assets/new_collections';

function NewCollections() {
  return (
    <div className="container mx-auto px-4 pb-[30px]">
      <div className='mt-20'>
        <h1 className='flex justify-center font-bold text-3xl'>NEW COLLECTIONS</h1>
        <hr className="w-48 h-1 bg-red-500 mx-auto my-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center">
          {new_collection.map((item, i) => (
            <div key={i} className="w-full sm:w-auto p-2">
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
  );
}

export default NewCollections;
