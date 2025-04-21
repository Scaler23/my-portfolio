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
import Facebook from "../../images/facebook.png";
import Linkin from "../../images/linkin.webp";
import Github from "../../images/github.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
const LandingPage = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) {
        setShowNav(false); // Auto-hide nav on desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleHeight = () => {
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleHeight);
    return () => {
      window.addEventListener("resize", handleHeight);
    };
  }, [height]);
  useEffect(() => {
    const handleSize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleSize);
    return () => {
      window.addEventListener("resize", handleSize);
    };
  }, [width]);
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
      <div className="logos">
        {/* <h1>{width}: width</h1>
          <h1>{height}: height</h1> */}
        <div className="logo-wrapper">
          <div className="linkin">
            <a href="">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="gitHub">
            <a href="https://github.com/settings/profile">
            <PiGithubLogoFill />
            </a>
          </div>

          <div className="facebook">
            <a href="https://www.facebook.com/johnbertyabut2222">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>
      {/* ============= MAIN CONTENT ====================== */}
      <div className="main-container">
        <div className="hoabpo">
          {/* =================== HOME ===================== */}

          {/* MY PICTURE */}
          <div className="myPicture">
            <img src={Person} alt="" />
          </div>

          <div className="first-background" id="home">
            {/* MY PICTURE */}
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
