import "./About.css"
import { Link, Outlet } from "react-router-dom"
import JavaScript from "../../images/JavaScriptlogo.png"
import React  from "../../images/reactLogo.png"
import HTML  from "../../images/HTMLlogo.png"
import CSS from "../../images/CSSlogo.png"

const About = () => {
  return (
    <div className="about" id="about">
      <div className="creative-professional">
        <div className="about-title">
          <p>CREATIVE AND</p>
          <p>PROFESSIONAL</p>
        </div>
        <div className="about-info">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error beatae provident, explicabo perferendis debitis est quas quaerat consectetur delectus fuga libero qui fugit nesciunt harum placeat dolorum amet quidem ullam impedit esse deleniti quia rerum? Praesentium inventore quo perferendis iure officiis nam! Corrupti ducimus perferendis dolores hic, adipisci unde aperiam asperiores reiciendis nulla quae inventore aspernatur? Dolorem ab ipsa excepturi!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam harum voluptatem, consequatur quibusdam voluptatum aliquam nobis laborum unde, ipsam illum aspernatur labore eligendi adipisci perferendis veritatis. Voluptatibus iste temporibus blanditiis cum accusamus molestias magnam maxime dignissimos ut? Nisi, doloremque eligendi.
          </p>
        </div>
        <button className="bg-[#DA324A] read-more">
            <Link to="/creative-professional">READ MORE</Link>
          </button>
      </div>
      <div className="mySkills">
          <div className="about-title">
            <p>MY SKILLS</p>
          </div>

           {/* ICON 1 */}
        <div className="skills">
         
            <div className="skill-item">
            <div className="skill-icon">
               <div className="image-javaScript"></div>
            </div>
            <div className="skillBar-container">
                <div className="skillBar-content javascript-percent">
                          <div className="skill-bar">
                                    <div className="skillBar-color javaScript"></div>
                          </div>
                              <p className="skill-name">JavaScript</p>
                </div>
                </div>
            </div>
              {/* ICON 2 */}
            <div className="skill-item">
            <div className="skill-icon">
               <div className="image-react"></div>
            </div>
            <div className="skillBar-container">
                  <div className="skillBar-content react-percent">
                    <div className="skill-bar">
                          <div className="skillBar-color react"></div>
                    </div>
                    <p className="skill-name">React</p>
                    </div>
            </div>
            </div>
              {/*ICON 3*/}
              <div className="skill-item">
              <div className="skill-icon">
               <div className="image-html"></div>
            </div>
            <div className="skillBar-container">
            <div className="skillBar-content html-percent">
                    <div className="skill-bar">
                          <div className="skillBar-color html"></div>
                    </div>
                    <p className="skill-name">HTML</p>
                 </div>
              </div>
            </div>
            {/* ICON 4 */}
           <div className="skill-item">
                  <div className="skill-icon">
                       <div className="image-css"></div>
                  </div>
            <div className="skillBar-container">
            <div className="skillBar-content css-percent">
                    <div className="skill-bar">
                          <div className="skillBar-color css"></div>
                    </div>
                    <p className="skill-name">CSS</p>
            </div>
            </div>
            </div>
        </div>
        <button className="bg-[#DA324A] read-more">
            <Link to="/mySkill">READ MORE</Link>
          </button>
      </div>
     <Outlet/>
    </div>
  )
}

export default About
