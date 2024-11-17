import React from 'react'
import Image from 'next/image';

interface propsType {
  img: string;
  title: string;
  date: string;
}

const BlogCard = ({img, title, date}: propsType) => {
  return (
    <div className='pl-6'>
      <Image
       className='rounded-lg hover:scale-105 transition-transform'
       src={img}
       alt="post"
       width={400}
       height={400}
       />
       <div className='text-orange-500 text-[12px] text-center font-medium'>
       <span>{date}</span>
       </div>
       <h3 className='font-thin font-serif text-center text-[20px] hover:text-orange-600'>{title}</h3>
    </div>
  );
};

export default BlogCard;
