import "./Home.css"
import { Link, Outlet } from "react-router-dom"
const Home = () => {
  return (
 
      <div className="home" id="home">
        <div className="title"> 
          <h1>
            <span>I AM</span> <br />
            <span>JR. FRONT-END</span> <br />
            <span>DEVELOPER</span>
        </h1>     

        </div>
          <div className="info">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  
                  Sequi perferendis porro eaque possimus nihil, 
                  ab temporibus nam error? Maiores, enim. Lorem ipsum dolor sit amet, consectetur
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.  
                  Sequi perferendis porro eaque possimus nihil, 
                  ab temporibus nam error? Maiores, enim. Lorem ipsum dolor sit amet, consectetur
                </p>
          </div>
          <button className=" read-more border-[#DA324A] border-2 bg-none">
            <Link to="/jobSummary">DOWNLOAD CV</Link>
          </button>
          <Outlet/>
      </div>

  )
}

export default Home
