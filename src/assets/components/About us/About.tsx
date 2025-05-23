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
            <motion.div
              className="circle-one"
              viewport={{
                amount: 0.5,
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ type: "spring", duration: 0.5, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className="circle-two"
              viewport={{
                amount: 0.5,
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ type: "spring", duration: 0.5, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className="circle-three"
              viewport={{
                amount: 0.5,
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ type: "spring", duration: 0.5, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className="circle-four"
              viewport={{
                amount: 0.5,
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ type: "spring", duration: 0.5, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className="image-me"
              viewport={{
                amount: 0.5,
              }}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.img src={Person} alt="" />
            </motion.div>
          </div>
        </div>

        <div className="creative-professional">
          <div className="myImage"></div>

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
                <p className="indent-8 text-justify">
                  I am a determined programmer who is always seeking knowledge.
                  I believe that you will find knowledge when you actively seek
                  it. I discovered ReactJS for front-end development and enjoyed
                  using it to create websites that are responsive, scalable, and
                  user-friendly.
                </p>
                <br />
                <p className="indent-8 text-justify">
                  Aside from coding, I also enjoy designing and creating website
                  prototypes using tools such as Figma, Canva, and Adobe.
                  Designing websites is especially enjoyable for me because I
                  can bring them to life through code. 
                  Currently, I am looking for a company that will accept me and
                  help me grow by expanding my knowledge and skills in this
                  field.
                </p>
                <br />
                <p className="indent-8 text-justify">
              
                  In addition to web development, the tools I use to create web
                  applications include JavaScript, ReactJS, TypeScript, HTML,
                  and CSS. I am always eager to take on new challenges and
                  continue learning as I grow in this profession.
                </p>
              </motion.div>
            </div>
            <DownloadResume />
          </div>
        </div>
      </div>
      <MySkills />
    </div>
  );
};

export default About;
