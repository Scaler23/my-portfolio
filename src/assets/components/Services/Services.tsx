import { useState } from "react"
import "./Services.css"
import Gon from "../../images/image services/gon.webp"
import pcSetup from "../../images/image services/pcsetup.jpg"
import Laptop from "..//../images/image services/laptop.jpg"
import LaptopTwo from "../../images/image services/latop2.jpg"
import Tailwinds from "../../images/tailwinds.png"


const Services = () => {
  const [isImageVisible, setIsImageIsVisible] = useState<boolean>(true)
        const [isWebDesign, setIsWebDesign] = useState<boolean>(false)
        const [isLogoDesign, setIsLogoDesign] = useState<boolean>(false)

  const showImage = () =>{
    setIsImageIsVisible(true)
    setIsWebDesign(false)
    setIsLogoDesign(false)
 
  }
  const webDesign = () =>{
    setIsImageIsVisible(false)
    setIsWebDesign(true)
    setIsLogoDesign(false)
  }

  const logoDesign = () =>{
          setIsImageIsVisible(false)
          setIsWebDesign(false)
          setIsLogoDesign(true)
  }
  return (
   <div className="services" id="services">
        <p>SELECTED WORK</p>
        <div className="work-button">
          <button id="all" onClick={showImage}>All</button>
          <button id="web-design" onClick={webDesign}>WEB DESIGN</button>
          <button id="logo-design" onClick={logoDesign}>LOGO DESIGN</button>
          <button id="branding">BRANDING</button>
        </div>

        <div className="show-work">
          
        {isImageVisible && (
                  <>
                       <img
                       src={pcSetup}
                       alt="Gon"
                       style={{height: "270px"}}
                       >  
                       </img>

                       <img
                       src={Laptop}
                       alt="Gon"
                       style={{height: "270px"}}
                       >  
                       </img>

                       <img
                       src={LaptopTwo}
                       alt="Gon"
                       style={{height: "270px"}}
                       >  
                       </img>

                       <img
                       src={Gon}
                       alt="Gon"
                       style={{height: "270px"}}
                       >  
                       </img>
                  </>
                 )
                 }
                 { isWebDesign && (
                  <>
                    <img
                      src={Gon}
                      alt="Gon"
                      style={{height: "270px"}}
                      >  
                      </img>
                  </>
                 )}
                 {
                  isLogoDesign && (
                    <>
                      <img
                      src={pcSetup}
                      alt="Gon"
                      style={{height: "270px"}}
                      >  
                      </img>
                    </>
                  )
                 }
        </div>
        
   </div>
  )
}

export default Services
