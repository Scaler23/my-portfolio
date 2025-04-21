import "./Home.css";
import { motion } from "motion/react";
import Typewriter from "./Typewriter";

import { IoIosArrowRoundDown } from "react-icons/io";

const Home = () => {
  

  
  return (
    <div className="home" id="home">
    
 
       
          <motion.span className="font-light text-[64px]">Hello, I’m <span className="myName text-[#FFF600]">Johnbert.</span></motion.span> <br />
          <div className="font-light text-[48px]">
          <Typewriter 
          text="I am a Jr. front-end web developer ."  /> <span className="type-line">|</span><br />
          </div>
          <a href="#about"  className=" view-work-button ">
            <button className="text-[25px] font-semibold border-[#609C90] border-3 bg-white text-[#455B60] 
             " style={{
              marginTop: "2rem"
             }}>View my work <IoIosArrowRoundDown className="inline-block " /></button>
          </a>


      </div>

  );
};

export default Home;
