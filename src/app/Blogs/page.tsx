import React from 'react';
import Image from "next/image";

const BlogsPage = () => {
  return (
    
    <div>
      <h1 className='text-[35px] text-center text-red-900 font-serif font-bold p-4'>Blogs</h1>
      <div className="pt-6 gap-4 flex justify-center items-center">
        <div className='p-6'>
        <Image src="/Image/kitchenwafflemaker.jpg" alt="waffle maker" width={350} height={350} />
        <p className='text-gray-800 text-[10px] sm:text-[14px]'>A Waffle Maker that creates crispy, golden waffles in minutes,perfect for delicious breakfast.</p>
        <p className='text-slate-900 text-sm'>Aug 26, 2024</p>
      </div>
      <div className='p-6'>
        <Image src="/Image/kidswaterbottle2.jpg" alt="waffle maker" width={350} height={350} />
        <p className='text-gray-800 text-[10px] sm:text-[14px]'>A stainless steel water bottle that keeps your drink hot or cold,perfect in all weathers.</p>
        <p className='text-slate-900 text-sm'>Sep 7, 2024</p>
      </div>
      
      <div className='p-6'>
        <Image src="/Image/decorantiqueclock.jpg" alt="" width={350} height={350} />
        <p className='text-gray-800 text-[10px] sm:text-[14px]'>An exquisite antique show piece that adds charm and a touch of history to your home decor.</p>
        <p className='text-slate-900 text-sm'>Nov 20, 2024</p>
      </div>
    </div>
    </div>
  )
}

export default BlogsPage;