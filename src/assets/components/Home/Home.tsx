import "./Home.css";
import { Link, Outlet } from "react-router-dom";
import DownloadResume from "./DownloadResume";
import { motion } from "motion/react";
import Typewriter from "./Typewriter";
import { useEffect, useState } from "react";
const Home = () => {
  

  
  return (
    <div className="home" id="home">
      <div className="title">
        <h1>
          <motion.span>I AM</motion.span> <br />
          <Typewriter text="JR. FRONT-END" /> <br />
          <motion.span>DEVELOPER</motion.span>
        </h1>
      </div>
      <div className="info">
        <motion.p
          viewport={{
            amount: 0.5,
          }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut"}}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
          perferendis porro eaque possimus nihil, ab temporibus nam error?
          Maiores, enim. Lorem ipsum dolor sit amet, consectetur Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Sequi perferendis porro
          eaque possimus nihil, ab temporibus nam error? Maiores, enim. Lorem
          ipsum dolor sit amet, consectetur
        </motion.p>
      </div>

      <DownloadResume />
    </div>
  );
};

export default Home;
