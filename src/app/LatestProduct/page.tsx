import React from 'react';
import Image from "next/image";

const ShopNowPage = () => {
  return (
    <div>
     <div> <h1 className='text-[30px] text-center text-red-900 font-serif font-bold pt-4'>Latest Product</h1></div>
      <div flex-col flex sm:flex-row m-3 sm:mr-8 pl-10 gap-1 w-full h-auto'>
      <Image src="/Image/camerabottlecolors.jpg" alt="camera bottle" width={300} height={300} 
      className="mt-16 ml-10 mr-10 border border-black hover:translate-x-2" />
      <Image src="/Image/camerabottleyg.jpg" alt="camera bottle" width={300} height={300} 
      className="mt-16 ml-10 mr-10 border border-black hover:translate-x-2"/>
      <Image src="/Image/camerabottlepg.jpg" alt="camera bottle" width={350} height={350} 
      className="mt-16 ml-10 mr-10 border border-black hover:translate-x-2"/>
      </div>
      </div>
    )
}

export default ShopNowPage;
