"use client"
import React, { useEffect, useState } from 'react'
import Data from "@/utils/productData"
import ProductCard from './ProductCard';
import { IProduct } from "./ProductCard";



const tabsData = ["ALL", "KITCHEN UTENSILS", "KIDS COLLECTION", "HOME DECOR"]

const NewArrival = () => {

const [selectedTab, setSelectedTab] = useState(0);
const [data, setData] = useState([]);

const shuffleArray = (array: any) => {
  console.log("shuffleArray");

  return array
    .map((value:any) => ({value, sort: Math.random()}))
    .sort((a: any, b: any) => a.sort - b.sort )
    .map(({value} : any) => value);
};

useEffect(() => {
  setData(shuffleArray(Data).slice(0, 8));
}, [])


const handleTab = (index: number) => {
    const category = tabsData[index].toUpperCase()
    setSelectedTab(index);

    if(category === "ALL"){
      setData(shuffleArray(Data).slice(0, 22)); 
      return
    }

    const filterData = Data.filter((item) => item.category.includes(category));
    setData(shuffleArray(filterData))
};



  return (
    <div className='bg-[#C39989] pt-20'>
      <div className='text-center'>
      <h1 className='font-bold text-3xl'>New Arrival</h1>
      <h2 className="text-blue-800 text-[30px] font-semibold font-serif">For you For your comfort</h2>

      <ul className='flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center pt-8 uppercase
      font-medium text-[20px]'>
        {tabsData.map((text, index) => (<li key={text} 
        className={' ${selectedTab === index && "text-accent} cursor-pointer hover:text-accent'}
        
        onClick={() => handleTab(index)}
        
        >
            {text}
        </li>
    ))}
      </ul>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-8'>
        {data.map((item: IProduct) => (
        <ProductCard 
        key={item.id} 
        id={item.id} 
        img={item.img} 
        name={item.name}
        price={item.price}
        
        />
        ))}
      </div>
    </div>
  </div>
  )
}

export default NewArrival
