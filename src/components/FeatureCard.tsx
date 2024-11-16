import React from 'react';
import Image from 'next/image';

interface propsType {
    img: string;
    title: string;
    desc: string;
}

const FeatureCard = ({img, title, desc}:propsType) => {
  return (
    <div className='flex gap-1 m-6 mb-14 bg-[#DFC57B]'>
      <Image 
      className="h-[100px] w-auto"
      src={img} 
      width={40} 
      height={50} 
      alt={title}
      />
      <div className='space-y-3 p-3 pl-2 pr-5'>
        <h2 className='flex font-serif text-center text-[15px] uppercase'>{title}</h2>
        <p className='text-gray-700  text-[14px]'>{desc}</p>
      </div>
    </div>
  )
}

export default FeatureCard
