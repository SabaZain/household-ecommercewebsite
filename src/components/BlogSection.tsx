import React from 'react'
import BlogCard from './BlogCard'

const data = [
    {
        img:"/Image/blog2.jpg",
        title:"Antique showpiece that adds a touch of elegance & history to a living room.",
        date:"Aug 23, 2024",
        
    },
    {
      img:"/Image/blog4.jpg",
      title:"Temperature water bottle keeps drink hot or cold for hours.",
      date:"Oct 8, 2024",
      
    },
    {
        img:"/Image/blog3.jpg",
        title:"4 Compartment lunch box is perfect for keeping different foods organized.",
        date:"Sep 5, 2024",
        
    },
  ]

const BlogSection = () => {
  return (
    <div className='bg-slate-400 p-4 mt-20'>
      <h2 className='font-bold text-center text-3xl'>Latest News</h2>
      <p className='text-gray-600 text-center text-2xl'>(Blogs)
      </p>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-36 mx-3 pt-8 w-auto h-auto'>
        {data.map(item => <BlogCard key={item.date} img={item.img} title={item.title} 
        date={item.date}/>)}
      </div>
    </div>
  )
}

export default BlogSection
