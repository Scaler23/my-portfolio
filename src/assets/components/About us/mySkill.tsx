import "./mySkill.css";
import { motion } from "motion/react";
const MySkills = () => {
  return (
    <div id="mySkills">
      <div className="about-skill-title">
        <motion.p
        viewport={{
                amount: 0.5,
              }}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
        >MY SKILLS</motion.p>
      </div>

      <div className="skills">
        {/* ICON 1 */}
        <div className="skill-columnOne">
          <div className="skill-item">
            <motion.div
              className="skill-icon"
              viewport={{
                amount: 0.5,
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ type: "spring", duration: 0.5, ease: "easeInOut" }}
            >
              <div className="image-javaScript"></div>
            </motion.div>
            <div className="skillBar-container">
              <div className="skillBar-content javascript-percent">
                <div className="skill-bar">
                  <motion.div className="skillBar-color javaScript"
                      initial={{ opacity: 1, width: "0%" }}
                      whileInView={{ opacity: 1, width: "70%"}}
                      exit={{ width: "0%" }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                  ></motion.div>
                </div>
                <p className="skill-name">JavaScript</p>
              </div>
            </div>
          </div>
          {/* ICON 2 */}
          <div className="skill-item">
            <motion.div
              className="skill-icon"
              viewport={{
                amount: 0.5,
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ type: "spring", duration: 0.5, ease: "easeInOut" }}
            >
              <div className="image-react"></div>
            </motion.div>
            <div className="skillBar-container">
              <div className="skillBar-content react-percent">
                <div className="skill-bar">
                  <motion.div className="skillBar-color react"
                      initial={{ opacity: 1, width: "0%" }}
                      whileInView={{ opacity: 1, width: "70%"}}
                      exit={{ width: "0%" }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                  ></motion.div>
                </div>
                <p className="skill-name">React</p>
              </div>
            </div>
          </div>
          {/*ICON 3*/}
          <div className="skill-item">
            <motion.div
              className="skill-icon"
              viewport={{
                amount: 0.5,
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{type: "spring",  duration: 0.5, ease: "easeInOut" }}
            >
              <div className="image-html"></div>
            </motion.div>
            <div className="skillBar-container">
              <div className="skillBar-content html-percent">
                <div className="skill-bar">
                  <motion.div className="skillBar-color html"
                      initial={{ opacity: 1, width: "0%" }}
                      whileInView={{ opacity: 1, width: "90%"}}
                      exit={{ width: "0%" }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                  ></motion.div>
                </div>
                <p className="skill-name">HTML</p>
              </div>
            </div>
          </div>
          {/* ICON 4 */}
          <div className="skill-item">
            <motion.div
              className="skill-icon"
              viewport={{
                amount: 0.5,
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ type: "spring", duration: 0.5, ease: "easeInOut" }}
            >
              <div className="image-css"></div>
            </motion.div>
            <div className="skillBar-container">
              <div className="skillBar-content css-percent">
                <div className="skill-bar">
                  <motion.div className="skillBar-color css"
                  initial={{ opacity: 1, width: "0%" }}
                  whileInView={{ opacity: 1, width: "80%"}}
                  exit={{ width: "0%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  ></motion.div>
                </div>
                <p className="skill-name">CSS</p>
              </div>
            </div>
          </div>
          {/* ICON 5 */}
          <div className="skill-item">
            <motion.div
              className="skill-typescript"
              viewport={{
                amount: 0.5,
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ type: "spring", duration: 0.5, ease: "easeInOut" }}
            >
              <div className="image-typescript"></div>
            </motion.div>
            <div className="skillBar-container">
              <div className="skillBar-content typescript-percent">
                <div className="skill-bar">
                  <motion.div className="skillBar-color typescript"
                  initial={{ opacity: 1, width: "0%" }}
                  whileInView={{ opacity: 1, width: "60%"}}
                  exit={{ width: "0%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  ></motion.div>
                </div>
                <p className="skill-name">TypeScript</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===========COLUMN TWO ==================== */}
        <div className="skill-columnTwo">
          {/* ICON 6 */}
          <div className="skill-item">
            <motion.div
              className="skill-icon"
              viewport={{
                amount: 0.5,
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{type: "spring",  duration: 0.5, ease: "easeInOut" }}
            >
              <div className="image-bootstrap"></div>
            </motion.div>
            <div className="skillBar-container">
              <div className="skillBar-content bootstrap-percent">
                <div className="skill-bar">
                  <motion.div className="skillBar-color bootstrap"
                  initial={{ opacity: 1, width: "0%" }}
                  whileInView={{ opacity: 1, width: "70%"}}
                  exit={{ width: "0%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  ></motion.div>
                </div>
                <p className="skill-name">Bootstrap</p>
              </div>
            </div>
          </div>

          {/* ICON 7 */}
          <div className="skill-item">
            <motion.div
              className="skill-icon"
              viewport={{
                amount: 0.5,
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ type: "spring", duration: 0.5, ease: "easeInOut" }}
            >
              <div className="image-tailwinds"></div>
            </motion.div>
            <div className="skillBar-container">
              <div className="skillBar-content tailwinds-percent">
                <div className="skill-bar">
                  <motion.div className="skillBar-color tailwinds"
                  initial={{ opacity: 1, width: "0%" }}
                  whileInView={{ opacity: 1, width: "70%"}}
                  exit={{ width: "0%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  ></motion.div>
                </div>
                <p className="skill-name">Tailwinds</p>
              </div>
            </div>
          </div>

          {/* ICON 8*/}
          <div className="skill-item">
            <motion.div
              className="skill-icon"
              viewport={{
                amount: 0.5,
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ type: "spring", duration: 0.5, ease: "easeInOut" }}
            >
              <div className="image-figma"></div>
            </motion.div>
            <div className="skillBar-container">
              <div className="skillBar-content figma-percent">
                <div className="skill-bar">
                  <motion.div className="skillBar-color figma"
                  initial={{ opacity: 1, width: "0%" }}
                  whileInView={{ opacity: 1, width: "70%"}}
                  exit={{ width: "0%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  ></motion.div>
                </div>
                <p className="skill-name">Figma</p>
              </div>
            </div>
          </div>

          {/* ICON 9 */}
          <div className="skill-item">
            <motion.div
              className="skill-adobe"
              viewport={{
                amount: 0.5,
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{type: "spring", duration: 0.5, ease: "easeInOut" }}
            >
              <div className="image-adobe"></div>
            </motion.div>
            <div className="skillBar-container">
              <div className="skillBar-content adobe-percent">
                <div className="skill-bar">
                  <motion.div className="skillBar-color adobe"
                  initial={{ opacity: 1, width: "0%" }}
                  whileInView={{ opacity: 1, width: "70%"}}
                  exit={{ width: "0%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  ></motion.div>
                </div>
                <p className="skill-name">Adobe Creative Cloud</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MySkills;
