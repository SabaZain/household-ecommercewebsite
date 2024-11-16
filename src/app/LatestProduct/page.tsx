import React from 'react';
import Image from "next/image";

const ShopNowPage = () => {
  return (
    <div>
     <div> <h1 className='text-[30px] text-center text-red-900 font-serif font-bold pt-4'>Latest Product</h1></div>
      <div className='flex-col flex sm:flex-row m-3 sm:mr-8 gap-1'>
      <Image src="/Image/camerabottlecolors.jpg" alt="camera bottle" width={350} height={3500} 
      className="mt-16 ml-11" />
      <Image src="/Image/camerabottleyg.jpg" alt="camera bottle" width={350} height={350} 
      className="mt-16 ml-11"/>
      <Image src="/Image/camerabottlepg.jpg" alt="camera bottle" width={350} height={350} 
      className="mt-16 ml-11"/>
      </div>
      </div>
    )
}

export default ShopNowPage;