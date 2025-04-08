import "./Landing Page.css"
import Home from "../Home/Home"
import About from "../About us/About"
import { ContactUs } from "../Contact us/ContactUs"
import Portfolio from "../Portfolio/Portfolio"
import Services from "../Services/Services"
import Person from "../../images/person.png"
import Mouse from "./Mouse"
const LandingPage = () => {
  return (

<div className="main-container" >

       {/*  MOUSE */}
<Mouse/>
  {/* ============= NAVIGATION ============ */}
   
  <div className="first-background" id="home">
        <nav className="nav-container">
            <div className="logo">
               <a href="#home" >Logo</a>
            </div>
            <ul className="nav-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </nav>

               {/* media logos */}
        <div className="logos">
             <a href="">
                  {/* <img src="" alt="" /> */}
              </a>
        </div>
               {/* MY PICTURE */}
        <div className="myPicture">
          <img src={Person} alt="" />
        </div>

    </div>
    <div className="second-background"></div>
    <div className="third-background">
      <ContactUs/>
    </div>
  


{/*========================== MAIN Container ========================= */}

 <main >   

  <div className="content">
        <Home/>
        <About/>
        <Portfolio/>
        <div className="circle"></div>
  </div>

    <div className="services-content">
     <Services/>
      <div className="circle">
      </div>
      <div className="rectangle"></div>
    </div>
</main>  

</div>  
       
  )
}

export default LandingPage