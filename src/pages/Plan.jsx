import { div } from 'framer-motion/client'
import React from 'react'

const Plan = () => {

    const data = 
       
         [
          { id:1,
            "name": "Web Development 📢",
            "discount": "30% OFF",
            "description": "Custom websites & responsive designs tailored for your brand.",
            "details": "From landing pages to full-stack solutions – fast, modern, and SEO-friendly."
          },
          {id:2,
            "name": "SEO Services 📢",
            "discount": "25% OFF",
            "description": "Rank higher on Google & drive organic traffic to your business.",
            "details": "Includes keyword research, on-page & technical SEO."
          },
          {  id:3,
            "name": "Digital Marketing 📢",
            "discount": "20% OFF",
            "description": "Social media, email campaigns, and paid ads that convert.",
            "details": "Get results, not just reach."
          },
          { id:4,
            "name": "App Development 📢",
            "discount": "30% OFF",
            "description": "Scalable and fast Android apps for any business need.",
            "details": "Modern UI/UX, Play Store deployment, and testing included."
          },
          {  id:5,
            "name": "Graphic Design 📢",
            "discount": "40% OFF",
            "description": "Creatives, logos, banners, and brand assets",
            "details": "Visual storytelling that connects."
          }
        ]
    
        
  return (
    <div className='plan h-[100vh] w-screen relative'>
        <div className='h-full w-[90%] bg-white/5 backdrop-blur-xl absolute  left-[5.5%]'>
            <h1 className='text-center text-white text-3xl  font-head my-auto mt-2 text-nowrap md:text-[2.5vw]'>Big Savings offers</h1>
            <h4 className='text-center text-yellow-50'>Exclusive limited-time discounts on all our digital services."</h4>
          <div className='flex flex-col items-center gap-4 mt-4 my-auto'>

          {data.map((offer) => (
            <div key={offer.id} className=' text-center'>
              <div className='cop h-[10vh] md:w-[50vw] rounded-lg  text-start flex justify-center items-center gap-[-1px] bg-white/5  border-2 border-blue-200 '> <h1 className='text-2xl inline-block font-extrabold  text-white rounded-xl'>{offer.name}</h1><h3 className=' bg-slate-50 px-1 h-[50px] w-[50px] rounded-full text-center text-emerald-500'>{offer.discount}</h3></div>
              <h3 className='text-white bg-black  rounded-b-full mb-3'>{offer.description}</h3>
                
            </div>

))}
</div>
            
        </div>
      
    </div>
  )
}

export default Plan
