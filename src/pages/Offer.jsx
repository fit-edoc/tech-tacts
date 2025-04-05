import React from 'react'
import { motion } from 'framer-motion'

motion
const Offer = () => {

const servicedata = [
    [
        {
          id:1,
          "name": "SEO",
          "description": "Boost your online presence with expert search engine optimization strategies.",
          "img": "/images/seo.png",
          bg:"orange"
        },
        { id:2,
          "name": "Web Development",
          "description": "Create stunning, responsive, and high-performance websites tailored to your business.",
          "img": "/images/webdev.png"
        },
        {
          id:3,
          "name": "Graphic Design",
          "description": "Stand out with creative and engaging visual designs for your brand and marketing.",
          "img": "/images/graphic.png"
        },
        { id:4,
          "name": "Android Development",
          "description": "Build scalable and user-friendly Android apps for your business and customers.",
          "img": "/images/new.png"
        },
        { id:5,
          "name": "Digital Marketing",
          "description": "Grow your brand with data-driven digital marketing strategies and campaigns.",
          "img": "/images/digit.png"
        }
      ]
      
]


  return (
    <>
    
    <div className='offer relative w-full py-16'>
      <div className='relative left-[5.5%] w-[90%] bg-white/5 backdrop-blur-xl'>
       <div className='text-center h-[80px] font-head flex items-center justify-center w-full'>
         <h1 className='text-emerald-50 text-3xl md:text-[3vw]'>Services</h1>
       </div>
       <div className="px-4 py-8">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[100px] md:p-8">
      {servicedata[0].map((service) => (
        <motion.div key={service.id} className="bg-white/10 p-8 md:h-[50vh] md:w-[25vw] rounded-lg shadow-lg"  initial={{opacity:0,y:200}} whileTap={{scale:1.1}} whileInView={{opacity:1,y:0}} transition={{duration:0.4,ease:"backInOut"}}>
          <h3 className={`text-xl font-bold mb-2  px-2 text-emerald-50 bg-gradient-to-r from-[#a697a6] rounded-lg`} >{service.name}</h3>
          <p className="text-gray-200 mb-4">{service.description}</p>
          <img src={service.img} alt={service.name} className="w-full h-48 object-cover bg-gradient-to-r from-transparent to-white/50   rounded-md hover:from-white/50  hover:to-orange-100"/>
        </motion.div>
      ))}
    </div>
      </div>
      </div>
      
    </div>
    
    </>
  )
}

export default Offer
