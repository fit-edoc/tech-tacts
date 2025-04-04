import Nav from "../components/Nav";
import Hero from "./Hero";
import Offer from "./Offer";
import Services from "./Services";

const Home = () => {
    
  return (
    <>
      <Nav/>
      <div id="hero"><Hero/></div>
      <div id="serve"><Services /></div>
      <div id="offer"><Offer /></div>
    </>
  );
};

export default Home;
