import React from 'react'
import Image from 'next/image';

interface propsType {
    img: string;
    type: string;
    quantity: string;
}

const CategoryCard = ({img, type, quantity}: propsType) => {
  return (
    <div className='space-y-3 space-x-3 gap-6 hover:scale-105 transition-transform hover:text-slate-400'>
      <Image
      className="rounded-full border-4 md:border-8 border-white"
      src={img}
      width={200}
      height={200}
      alt={type}
      />
      <div> 
        <h2 className='text-[14px] md:text-xl font-medium'>{type}</h2>
        <p className='text-black text-[12px] md:text-[14px]'>{quantity}</p>
    </div>
    </div>
  );
};

export default CategoryCard
