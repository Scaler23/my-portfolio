import "./Home.css";
import { motion } from "motion/react";
import Typewriter from "./Typewriter";

import { IoIosArrowRoundDown } from "react-icons/io";

const Home = () => {
  

  
  return (
    <div className="home" id="home">
    
 
       
          <motion.span className="font-light text-[48px] hello">Hello, I’m <span className="myName">Johnbert.</span></motion.span> <br />
          <div className="font-light text-[30px] typewrite">
          <Typewriter 
          text="I am a Junior Front-End Web Developer."  /> <span className="type-line">|</span><br />
          </div>
          <a href="#about"  className=" view-work-button">
            <button className="work text-[20px] font-semibold   bg-white text-[#455B60] 
            " style={{
              marginTop: "2rem"
             }}>View my work <IoIosArrowRoundDown className="inline-block arrow " /></button>
          </a>


      </div>

  );
};

export default Home;
