import "./Home.css";
import { motion } from "motion/react";
import Typewriter from "./Typewriter";

import { IoIosArrowRoundDown } from "react-icons/io";

const Home = () => {
  

  
  return (
    <div className="home" id="home">
    
 
       
          <motion.span className="font-regular text-[56px] hello">Hello, I’m <span className="myName">Johnbert.</span></motion.span> <br />
          <div className="font-regular text-[38px] typewrite">
          <Typewriter 
          text="I am a Jr. Front-End Web Developer."  /> <span className="type-line">|</span><br />
          </div>
          <a href="#about"  className=" view-work-button">
            <button className="work text-[20px] font-semibold   bg-white text-[#246E64] 
            " style={{
              marginTop: "4rem"
             }}>View my work <IoIosArrowRoundDown className="inline-block arrow " /></button>
          </a>


      </div>

  );
};

export default Home;
