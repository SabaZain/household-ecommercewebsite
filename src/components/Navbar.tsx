import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useAppSelector } from '@/redux/hooks';
import {Dispatch, SetStateAction} from "react";

interface NavbarProps {
  setShowCart: Dispatch<SetStateAction<boolean>>
}

const Navbar = ({setShowCart}:NavbarProps) => {
  const cartCount = useAppSelector((state) => state.cartReducer.length);

return (
    <div>
      <nav className='bg-teal-500 text-xl flex flex-col sm:flex-row justify-between align items-center 
      h-auto sm:h-16 md:h-20 lg:h-24 border-md'>
        <div className='flex justify-center align items-center gap-3 p-8'>
          <Image src="/Image/householdlogo.jpg" alt="logo" width={60} height={60}/>
          <h1 className='text-2xl text-orange-700 text-center font-bold font-serif cursor-pointer'>Household Haven</h1>
        </div>
        <div className='w-full sm:w-auto'>
          <ul className='font-semibold flex sm:flex-row justify-center align items-center gap-6 pr-3 cursor-pointer'>
            <li> <Link href="/" className=' text-black hover:text-accent'>Home</Link></li>
            <li> <Link href="/About" className=' text-black hover:text-accent'>About</Link></li>
            <li> <Link href="/Blogs" className=' text-black hover:text-accent'>Blogs</Link></li>
            <li> <Link href="/Contact" className=' text-black hover:text-accent'>Contact</Link></li>
            </ul>

        <div className='flex gap-5 mt-3 mb-3 text-[26px]'>
        
        <div className='relative cursor-pointer' onClick={() => setShowCart(true)}
        >
        <FaShoppingCart/>
        <div className='absolute top-[-10px] right-[-10px] bg-red-600 w-[22px] h-[22px]
        rounded-full text-white text-[12px] grid place-items-center'>
        {cartCount}
        </div>
        </div>
        <FaSearch />
        </div>
      </div>
    </nav>
  </div>
  );
};

export default Navbar;
