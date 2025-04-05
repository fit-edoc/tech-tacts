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
      <footer id="contact" className="bg-black/60  h-[45vh] w-screen  md:h-[70vh]">
        <motion.div className="h-[50%] bg-gradient-to-t from-[#897ff2] via-black to-transparent  flex justify-center items-end gap-2 pb-2 text-white text-2xl" ><a href="" className="bg-red-500 py-3 px-3 rounded-full hover:scale-110 border-b-2 border-white "><MdContacts/> </a>
        <a href=""  className="bg-blue-400 py-4 px-4 rounded-full hover:scale-90 border-b-2 border-white "><FaLinkedin /></a> <a href=""  className="insta  from py-3 px-3 rounded-full hover:scale-110 border-b-2 border-white" ><FaInstagram /></a></motion.div>
        <div className="curve h-[50%] bg-gradient-to-t from-transparent via-black to-[#897ff2] flex justify-center items-start text-white/80 "><h1 className="border-b-2 border-white">© 2025 TECHTACTS. All rights reserved</h1> </div>


      </footer>
    </>
  );
};

export default Home;
