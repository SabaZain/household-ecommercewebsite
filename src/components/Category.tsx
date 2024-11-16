import React from 'react'
import CategoryCard from './CategoryCard'

const data = [
    
    {
        img:"/Image/kitchenutensils.png",
        type:"KITCHEN UTENSILS",
        quantity:"(8 items)",
    },
    {
        img:"/Image/kidscollection.jpg",
        type:"KIDS COLLECTION",
        quantity:"(8 items)",
    },
    {
        img:"/Image/homedecor.jpg",
        type:"HOME DECOR",
        quantity:"(6 items)",
    },
]

const Category = () => {
  return (
    <div className='bg-[#DFC57B] p-2 mt-20'>
      <div className='text-center text-black'>
        <h3 className='font-serif text-[40px]'>Favorite Category</h3>
        <h2 className='text-[30px] font-medium'>Top Category</h2>
        <div className='flex justify-center gap-6 md:gap-16 pt-8'>
            {data.map((item) => (
                <CategoryCard
                key={item.type}
                img={item.img}
                type={item.type}
                quantity={item.quantity}
                />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Category

