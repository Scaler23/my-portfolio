import "./Landing Page.css";
import Home from "../Home/Home";
import About from "../About us/About";
import { ContactUs } from "../Contact us/ContactUs";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/Services";
import Person from "../../images/person.png";
import Mouse from "./Mouse";
import Icon from "../../images/icon.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";
const LandingPage = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) {
        setShowNav(false); // Auto-hide nav on desktop
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  return (
    <>
      {/* ============= NAVIGATION ============ */}
      <div className="whole">
       
      <nav className="nav-container">
        <div className="logo">
          <a href="#home" className="Logo">
            <img src={Icon} alt="Scaler Logo" />
          </a>
        </div>
        <ul className={`nav-list ${showNav ? "show" : "close"}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
        <GiHamburgerMenu
          className="burger"
          onClick={() => {
            setShowNav((prev) => !prev);
          }}
        />
      </nav>
      <div className="half">
      {/* ============= MOUSE================ */}
      <Mouse />
      {/* ============= MAIN CONTENT ====================== */}
      <div className="main-container">
<div className="hoabpose">
        <div className="hoabpo">
   
          {/* =================== HOME ===================== */}

          {/* MY PICTURE */}
          <div className="myPicture">
            <img src={Person} alt="" />
          </div>

          <div className="first-background" id="home">
            <Home />
          </div>

          {/* =================== ABOUT and PortFolio ===================== */}
          <div className="second-background">
            <div className="content">
              <About />
              <Portfolio />
              
            </div>
          </div>
          <div className="circle-top"></div>
        </div>

        {/* =================== SERVICES ===================== */}

        <div className="services-content">
          <Services />
          <div className="circle"></div>
          <div className="rectangle"></div>
        </div>
        </div>
        <ContactUs />
 
        {/*========================== CONTACT ========================= */}
        </div>
      </div>
      </div>
    </>
  );
};

export default LandingPage;
