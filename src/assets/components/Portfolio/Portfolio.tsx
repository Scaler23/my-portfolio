import "./Portfolio.css"
import pc from "../../images/image services/pcsetup.jpg"
const Portfolio = () => {
  return (
    <div className="Portfolio" id="portfolio">
          <div className="portfolio-title">
            <p>PROJECT</p>
          </div>
          <div className="project">
            <div className="port-wrapper" >
            <img src={pc} alt=""/>
            </div>
           
         
          <div className="port-info">
            <p className="port-title">SCALER|CODE</p>
            <p className="port-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            </div> 
          </div>
    </div>
  )
}

export default Portfolio
