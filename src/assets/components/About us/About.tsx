import "./About.css";
import { Link, Outlet } from "react-router-dom";
import MySkills from "./mySkill";
import { motion } from "motion/react";
import Person from "../../images/person.png";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="creative-professional">
        <div className="myImage">
          <motion.img
            src={Person}
            alt=""
            viewport={{
              amount: 0.5,
            }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>

        <div className="aboutDescription">
          <div className="about-title">
            <motion.p
              viewport={{
                amount: 0.5,
              }}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              ABOUT ME
            </motion.p>
          </div>
          <div className="about-info">
            <motion.p
              viewport={{
                amount: 0.5,
              }}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
              beatae provident, explicabo perferendis debitis est quas quaerat
              consectetur delectus fuga libero qui fugit nesciunt harum placeat
              dolorum amet quidem ullam impedit esse deleniti quia rerum?
              Praesentium inventore quo perferendis iure officiis nam! Corrupti
              ducimus perferendis dolores hic, adipisci unde aperiam asperiores
              reiciendis nulla quae inventore aspernatur? Dolorem ab ipsa
              excepturi! Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Veniam harum voluptatem, consequatur quibusdam voluptatum
              aliquam nobis laborum unde, ipsam illum aspernatur labore eligendi
              adipisci perferendis veritatis. Voluptatibus iste temporibus
              blanditiis cum accusamus molestias magnam maxime dignissimos ut?
              Nisi, doloremque eligendi.
            </motion.p>
          </div>
          <button className=" read-more">
            <Link to="/creative-professional">READ MORE</Link>
          </button>
        </div>
      </div>

      <MySkills />
    </div>
  );
};

export default About;
