import "./mySkill.css"
const MySkills = () =>{
    return(
        <div className="mySkills">
        <div className="about-skill-title">
          <p>MY SKILLS</p>
        </div>

  
      <div className="skills">
                   {/* ICON 1 */}
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

          {/* ===========COLUMN TWO ==================== */}
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
    )
}
export default MySkills