import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import {AnimatePresence, motion} from 'framer-motion'
import { HashLink } from "react-router-hash-link";



const Nav = () => {

    const [clicked ,setClicked] =useState(false)

  return (

    <>
      <motion.div className="nav  md:h-[70px] w-[85%] fixed z-30 mx-auto mt-3 left-[7.9%] rounded-full bg-black md:bg-red-400 flex items-center" initial={{width:"0%",opacity:0}} animate={{width:"85%",opacity:1}}transition={{duration:0.9,ease:"easeInOut"}} >
      <div className="h-full w-[50%] flex justify-start">
        <h1 className="my-auto mx-2 text-lg md:text-[2.5vw]  font-head text-white">TechTacts</h1>
      </div>
      <div className="h-full w-[50%] flex list-none items-center justify-end gap-5 text-white opacity-0 md:opacity-100">
        <HashLink smooth to='#hero'>
          <li>Home</li>
        </HashLink >
        <HashLink  to='#offer'>
          <li>our Services</li>
        </HashLink >
        <HashLink ><li>our work</li></HashLink >
        <HashLink ><li>contact</li></HashLink >

     
      </div>
      <div className="menu mr-4  opacity-100 md:opacity-0">   <motion.button onClick={()=>setClicked(!clicked)} transition={{duration:1,ease:"easeInOut"}}> {clicked ? <RxCross2 className="text-white  text-3xl rounded-full border-2 border-white"/> : <svg xmlns="http://www.w3.org/2000/svg" x="0px" className="fill-white rounded-full border-2 border-white py-1" y="0px" width="30" height="30" viewBox="0 0 30 30">
<path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
</svg>}</motion.button></div>

  
    </motion.div>
    <AnimatePresence>
        {clicked && (
          <motion.div
            key="menu"
            initial={{ y: "-100%", opacity: 0 }}  // Starts hidden
            animate={{ y: 0, opacity: 1 }}       // Slides down when opening
            exit={{ y: "-100%", opacity: 0 }}     // Slides up when closing (REVERSE)
            transition={{ duration: 0.6, ease: "easeInOut" }} // Smooth transition
            className="fixed top-0 opacity-100 md:opacity-0 z-20 left-0 w-full h-[70vh]"
          >
            <div className="mobile h-[90%] w-[90%] opacity-100 md:opacity-0  uppercase  px-2 flex flex-col items-center justify-evenly  list-none left-[5%] bg-white/5 backdrop-blur-xl absolute top-[10%]"> 
             <div className="w-full h-[40px] border-2 mt-2 border-white ">  <HashLink to="#hero">
          <li className="bg-white/50 text-black px-2">Home</li>
        </HashLink></div>
        <div className="w-full h-[40px] border-2 border-white">  <HashLink to="#offer">
          <li className="bg-white/50 text-black px-2">our Services</li>
        </HashLink></div>
        <div className="w-full h-[40px] border-2 border-white">  <HashLink>
          <li className="bg-white/50 text-black px-2">our work</li>
        </HashLink></div>
        <div className="w-full h-[40px] border-2 border-white">  <HashLink>
          <li className="bg-white/50 text-black px-2">contact</li>
        </HashLink></div></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
  
};

export default Nav;
