import "./About.css"
import { Link, Outlet } from "react-router-dom"
import JavaScript from "../../images/JavaScriptlogo.png"
import React  from "../../images/reactLogo.png"
import HTML  from "../../images/HTMLlogo.png"
import CSS from "../../images/CSSlogo.png"
import Person from "../../images/person.png"
const About = () => {
  return (
    <div className="about" id="about">
      <div className="creative-professional">
        <div className="myImage">
              <img src={Person} alt="" />
        </div>
           
          <div className="aboutDescription">
        <div className="about-title">
          <p>ABOUT ME</p>
        </div>
        <div className="about-info">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error beatae provident, explicabo perferendis debitis est quas quaerat consectetur delectus fuga libero qui fugit nesciunt harum placeat dolorum amet quidem ullam impedit esse deleniti quia rerum? Praesentium inventore quo perferendis iure officiis nam! Corrupti ducimus perferendis dolores hic, adipisci unde aperiam asperiores reiciendis nulla quae inventore aspernatur? Dolorem ab ipsa excepturi!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam harum voluptatem, consequatur quibusdam voluptatum aliquam nobis laborum unde, ipsam illum aspernatur labore eligendi adipisci perferendis veritatis. Voluptatibus iste temporibus blanditiis cum accusamus molestias magnam maxime dignissimos ut? Nisi, doloremque eligendi.
          </p>
        </div>
        <button className=" read-more">
            <Link to="/creative-professional">READ MORE</Link>
          </button>
          </div>
      </div>


      <div className="mySkills">
          <div className="about-skill-title">
            <p>MY SKILLS</p>
          </div>
 
           {/* ICON 1 */}
        <div className="skills">
        <div className="skill-columnOne">
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
                        {/* ICON 5 */}
           <div className="skill-item">
                  <div className="skill-typescript">
                       <div className="image-typescript"></div>
                  </div>
            <div className="skillBar-container">
            <div className="skillBar-content typescript-percent">
                    <div className="skill-bar">
                          <div className="skillBar-color typescript"></div>
                    </div>
                    <p className="skill-name">TypeScript</p>
            </div>
            </div>
            </div>
            </div>
            <div className="skill-columnTwo">
                                      {/* ICON 6 */}
           <div className="skill-item">
                  <div className="skill-icon">
                       <div className="image-bootstrap"></div>
                  </div>
            <div className="skillBar-container">
            <div className="skillBar-content bootstrap-percent">
                    <div className="skill-bar">
                          <div className="skillBar-color bootstrap"></div>
                    </div>
                    <p className="skill-name">Bootstrap</p>
            </div>
            </div>
            </div>

                               {/* ICON 6 */}
           <div className="skill-item">
                  <div className="skill-icon">
                       <div className="image-tailwinds"></div>
                  </div>
            <div className="skillBar-container">
            <div className="skillBar-content tailwinds-percent">
                    <div className="skill-bar">
                          <div className="skillBar-color tailwinds"></div>
                    </div>
                    <p className="skill-name">Tailwinds</p>
            </div>
            </div>
            </div>

                               {/* ICON 7*/}
           <div className="skill-item">
                  <div className="skill-icon">
                       <div className="image-figma"></div>
                  </div>
            <div className="skillBar-container">
            <div className="skillBar-content figma-percent">
                    <div className="skill-bar">
                          <div className="skillBar-color figma"></div>
                    </div>
                    <p className="skill-name">Figma</p>
            </div>
            </div>
            </div>

                               {/* ICON 8 */}
           <div className="skill-item">
                  <div className="skill-adobe">
                       <div className="image-adobe"></div>
                  </div>
            <div className="skillBar-container">
            <div className="skillBar-content adobe-percent">
                    <div className="skill-bar">
                          <div className="skillBar-color adobe"></div>
                    </div>
                    <p className="skill-name">Adobe Creative Cloud</p>
            </div>
            </div>
            </div>

            </div>
        </div>
      </div>

    </div>
  )
}

export default About
