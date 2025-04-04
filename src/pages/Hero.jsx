import { motion } from "framer-motion";
import React from "react";
import leftt from '/images/pngwing.com.png'
import rigtt from '/images/pngwing.com (2).png'

const Hero = () => {
  return (
    <div className="hero relative h-[100vh] w-full bg-yellow-700">
      <div className="h-full w-[90%] bg-white/5 backdrop-blur-xl absolute  left-[5.5%]">
        <div className="h-[50%]  w-full  overflow-hidden relative">
          
          <motion.div
            className="h-[20vh] w-[70vw] text-center   left-[50%] translate-x-[-50%] translate-y-[-50%] absolute"
            initial={{ top: "120%",opacity:0 }}
            animate={{ top: "60%" ,opacity:1}}
            transition={{duration:1,ease:"easeInOut"}}
          >
            <h1 className="text-2xl md:text-[5vw] text-white font-head">
              TECH TACTS
            </h1>
            <h2 className="text-[3vw] md:mt-2 text-blue-50 font-extralight">
              Boost Your Brand with Next-Level Digital Marketing!
            </h2>
          </motion.div>
          <div className="absolute h-[50%] top-[60%]  w-[100%]  text-white bg-white/5 opacity-100 md:opacity-0 px-2 text-center"> <p className="text-[4vw] py-2">At Tech Tacts, we specialize in cutting-edge digital solutions to take your business to the next level. Whether you're looking for stunning websites, powerful SEO strategies, digital business growth, Android app development</p></div>
        </div>
        <div className="low h-[50%] w-full flex py-10">
          
          <motion.div className="w-[50%] md:my-auto mt-10" initial={{opacity:0}} animate={{opacity:1}}transition={{duration:3,ease:"easeInOut"}}><img src={rigtt} className="h-full w-full  object-contain" alt="" /></motion.div>
          <motion.div className="w-[50%]" initial={{opacity:0}} animate={{opacity:1}}transition={{duration:3,ease:"easeInOut"}}><img src={leftt} className="h-full w-full  object-contain" alt="" /></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
