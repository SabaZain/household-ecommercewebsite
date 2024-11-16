import React from 'react'
import FeatureCard from './FeatureCard';

const data = [
    {
        img: "/Image/premiumqualityicon.jpg",
        title: "PREMIUM QUALITY",
        desc: "Good Quality & Beautifully Designed Products"
    },
    {
        img: "/Image/iconfreeshipping.jpg",
        title: "FREE SHIPPING",
        desc: "Free Shipping On All Orders Over Rs.5000/-"
    },
    {
        img: "/Image/securepaymenticon.png",
        title: "SECURE PAYMENT",
        desc: "Fully Protected When Paying Online",
    },
];

const Feature = () => {
  return (
    <div className='flex justify-between align place-items-stretch pt-10'>
     <div className='grid md:grid-cols-2 gap-y-1 lg:gap-y-2 lg:grid-cols-3 gap-12'>
       {data.map(item => <FeatureCard key={item.title} img={item.img} title={item.title} desc={item.desc}/>)} 
    </div> 
    </div>
  )
}

export default Feature
