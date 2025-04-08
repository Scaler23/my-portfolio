import "./Portfolio.css"
import pc from "../../images/image services/pcsetup.jpg"
import laptop from "../../images/image services/latop2.jpg"
const Portfolio = () => {
  return (
    <div className="Portfolio" id="portfolio">
          <div className="portfolio-title">
            <p>MY PORTFOLIO</p>
          </div>
          <div className="project">
            <img src={pc} alt=""       style={{height: "270px"}} />
            <img src={laptop} alt=""       style={{height: "270px"}}/>
          </div> 
    </div>
  )
}

export default Portfolio
