import "./About.css";
import MySkills from "./mySkill";
import { motion } from "motion/react";
import Person from "../../images/me.png";
import DownloadResume from "../Home/DownloadResume";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-container">
       <div className="image-part">
                 <div className="second-picture">
                    <div className="circle-one">
            </div>
                    <div className="circle-two">
            </div>
                    <div className="circle-three">
            </div>
                    <div className="circle-four">
            </div>
            <div className="image-me">
                       <motion.img src={Person} alt="" 
                         viewport={{
              amount: 0.5,
            }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
                       />

            </div>
          </div>
          
              
          </div>
      
      <div className="creative-professional">
        <div className="myImage">
         
        </div>

        <div className="aboutDescription">
          <div className="about-title">
            <motion.p
              className="aboutText "
              viewport={{
                amount: 0.5,
              }}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            
            >
              ABOUT
            </motion.p>
          </div>
          <div className="about-info">
            <motion.div
              viewport={{
                amount: 0.5,
              }}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                 <p className="indent-8 text-justify">A determined programmer who is always seeking knowledge, I believe that you will find knowledge when you seek it.  I found ReactJS for the front-end and I enjoyed using it to create websites that are responsive, scalable, and 
                  user-friendly. Aside from coding, I also enjoy designing and creating website prototypes using these tools, Figma, Canva, and Adobe.
                  </p>
                <br />
                <p className="indent-8 text-justify"> It's enjoyable to design websites, especially since I can build them through coding. Right now, I am looking for a company that will accept and help me improve and expand my knowledge in this field. </p>
                <br />
                <p className="indent-8 text-justify">  In addition to web development, my tools in creating web applications are JavaScript, ReactJS, TypeScript, HTML, and CSS. I am always eager to take on new challenges and keep learning as I grow in this field.</p>
            </motion.div>
          </div>
          <DownloadResume/>
        </div>
      </div>
</div>
      <MySkills />
  
    </div>
  );
};

export default About;
