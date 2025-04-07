import { MdContacts } from "react-icons/md";
import Nav from "../components/Nav";
import Hero from "./Hero";
import Offer from "./Offer";
import Plan from "./Plan";


import Services from "./Services";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
    
  return (
    <>
      <Nav/>
      <div id="hero"><Hero/></div>
      <div id="serve"><Services /></div>
      <div id="offer"><Offer /></div>
      <div id="plan"> <Plan/></div>
      <footer id="contact" className="bg-black  h-[70vh] w-screen  md:h-[70vh]">
        <div className="h-[70%] flex"> <div className="h-full w-[50%] bg-gradient-to-t from-transparent via-black to-[#897ff2] text-white flex flex-col justify-center items-start px-3 gap-3 md:justify-center">
          <h1 className="border-b-2 border-white">Quick links</h1>
       <ul className="list-disc ml-4 text-sm flex flex-col gap-2 border-b-2 border-white">


      <a href="">  <li className="border-b-2 border-white inline-block"> Home</li></a>
       <a href=""> <li className="border-b-2 border-white inline-block">About Us</li></a>
       <a href=""> <li className="border-b-2 border-white inline-block">Services</li></a>
        <a href=""><li className="border-b-2 border-white inline-block">Portfolio</li></a>
       <a href=""> <li className="border-b-2 border-white inline-block">Contact</li></a>
      <a href="">  <li className="border-b-2 border-white inline-block">Get a Quote</li></a>
       </ul>








        </div>
        <div className="h-full w-[50%] bg-gradient-to-t from-transparent via-black to-[#897ff2] flex flex-col justify-center text-center"><h1 className="logo text-2xl md:text-[4vw] text-white font-logo ">
              TECH TACTS
            </h1>
            <h2 className="text-[2vw] md:mt-2 text-blue-50 font-extralight">
              Boost Your Brand with Next-Level Digital Marketing!
            </h2></div></div>
        <motion.div className="foot h-[10%]  bg-gradient-to-t from-transparent via-black to-[#897ff2] flex justify-center items-end gap-2 pb-2 text-white text-2xl" ><a href="" className="bg-red-500 py-1 px-1 rounded-full hover:scale-110 border-b-2 border-white "><MdContacts/> </a>
        <a href=""  className="bg-blue-400 py-1 px-1 rounded-full hover:scale-90 border-b-2 border-white "><FaLinkedin /></a> <a href=""  className="insta  from py-1 px-1 rounded-full hover:scale-110 border-b-2 border-white" ><FaInstagram /></a></motion.div>
        <div className="curve h-[20%] bg-gradient-to-t from-transparent via-black to-[#897ff2] flex justify-center items-center text-white/80 "><h1 className="border-b-2 border-white">© 2025 TECHTACTS. All rights reserved</h1> </div>


      </footer>
    </>
  );
};

export default Home;
