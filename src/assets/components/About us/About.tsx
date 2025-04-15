import "./About.css"
import { Link, Outlet } from "react-router-dom"
import MySkills from "./mySkill"
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


           <MySkills/>
    </div>
  )
}

export default About
