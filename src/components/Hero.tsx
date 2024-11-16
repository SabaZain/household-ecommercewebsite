import React from 'react'
import Image from 'next/image';
import Link from "next/link";

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row bg-amber-400 p-4 pt-0 pb-3 border rounded-md'>
      <Image src="/Image/heropic.jpg" alt="hero pic" width={500} height={500} />
      <div className='text-gray-900 text-xl sm:text-2xl text-center md:text-center font-serif font-bold p-20 sm:p-24 mt-15 mx-5 my-5 mb-5'>
      From Kitchenware to decor <br/> discover items that inspire comfort.
      <br/><br/>
      <div className='flex justify-center align items-center'>
      <Image src="/Image/purplebottle.jpg" alt="kids water bottle" width={200} height={200} />
      <Image src="/Image/newkidsbottle.jpg" alt="kids water bottle" width={200} height={200} /></div>
      
      <p className='text-violet-800 text-xl sm:text-2xl font-bold font-serif'>New Water Bottle For Your Kids</p>
      <br/>
      <Link href="/LatestProduct">
      <button className='bg-orange-600 hover:bg-red-600 text-xl text-black hover:text-accent p-2 border rounded-md'>Latest Product</button>
      </Link>
      </div>
      
    </div>
      
  )
}

export default Hero
