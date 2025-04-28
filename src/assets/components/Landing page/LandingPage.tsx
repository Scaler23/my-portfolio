import "./Landing Page.css";
import Home from "../Home/Home";
import About from "../About us/About";
import { ContactUs } from "../Contact us/ContactUs";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/Services";
import Person from "../../images/person.png";
import Mouse from "./Mouse";
import Logo from "../../images/LOGO.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";
import SocialLogo from "./socialMediaLogo";
const LandingPage = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [isShowSocialLogo, setShowSocialLogo] = useState<boolean>(false)
  useEffect(() => {
    const handleWidth = () => {
      if (window.innerWidth < 1300) {
        setShowSocialLogo(false);
      } else {
        setShowSocialLogo(true);
      }
    };

    // Call once on mount
    handleWidth();

    window.addEventListener("resize", handleWidth);
    return () => window.removeEventListener("resize", handleWidth);
  }, []);


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
      <nav className="nav-container">
        <div className="logo">
          <a href="#home" className="Logo">
            <img src={Logo} alt="Scaler Logo" />
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
      {/* ============= MOUSE================ */}
      <Mouse />
      {/* ====================== MEDIA LOGOS ================== */}
        {isShowSocialLogo && <SocialLogo />}
      {/* ============= MAIN CONTENT ====================== */}
      <div className="main-container">

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

        <ContactUs />
 
        {/*========================== CONTACT ========================= */}
   
      </div>
     
    </>
  );
};

export default LandingPage;
