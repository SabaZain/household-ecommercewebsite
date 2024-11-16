import React from 'react'
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='justify-center align items-center bg-black p-4 mt-32'>
     <div className='m-1'>
      <h1 className='text-[25px] text-red-900 font-serif font-bold pl-2'>About</h1>
      <p className='text-white text-[16px] font-serif p-3'>Household Haven, one stop destination for high quality household items,
        home decor, and everyday essentials. Whether you are looking to brighten up your kitchen with stylish 
        utensils, add a personal touch to your home with unique decor pieces, or find the perfect school bags 
        and water bottles for your little ones, we have got you covered.<br/>
        Our carefully curated collection offers something for every home and lifestyle, combining functionality
        with aesthetic appeal.<br/>
        </p>
    </div> 
    <div className='text-white pl-4'>
          <div><MdEmail size={30} color='green'/>saba_punjwani@yahoo.com</div>
            <div><FaFacebookSquare size={30} color='blue'/>Saba Zain</div>
            <div><FaSquarePhone size={30} color='red'/>0332-3319007</div>
          </div>
    <div >
      <div className='text-[18px] sm:text-xl text-center text-white mt-8'>
      <p>&copy; Copyright Household Haven | All Right Reserved.</p>
      </div>
    </div>
    </div>
  )
}

export default Footer;
