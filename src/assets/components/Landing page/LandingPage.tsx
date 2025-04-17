import "./Landing Page.css";
import Home from "../Home/Home";
import About from "../About us/About";
import { ContactUs } from "../Contact us/ContactUs";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/Services";
import Person from "../../images/person.png";
import Mouse from "./Mouse";
import Logo from "../../images/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";
const LandingPage = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [width, setWidth] = useState(window.innerWidth);
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
    const handleSize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleSize);
    return () => {
      window.addEventListener("resize", handleSize);
    };
  }, [width]);
  return (
    <div className="main-container">
      {/*  MOUSE */}
      <Mouse />
      {/* ============= NAVIGATION ============ */}
      <div className="first-background" id="home">
        <nav className="nav-container">
          <div className="logo">
            <a href="#home" className="Logo">
              <img src={Logo} alt="Scaler Logo" />
            </a>
          </div>
          <ul className={`nav-list ${showNav ? "show" : "none"}`}>
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
        {/* media logos */}
        <div className="logos">
          <h1>{width}</h1>
          <a href="">{/* <img src="" alt="" /> */}</a>
        </div>
        {/* MY PICTURE */}
        <div className="myPicture">
          <img src={Person} alt="" />
        </div>
      </div>
      <div className="second-background"></div>
      <div className="third-background">
        <ContactUs />
      </div>
      {/*========================== MAIN Container ========================= */}
      <main>
        <div className="content">
          <Home />
          <About />
          <Portfolio />
          <div className="circle"></div>
        </div>

        <div className="services-content">
          <Services />
          <div className="circle"></div>
          <div className="rectangle"></div>
        </div>
        <div className="contact-container"></div>
      </main>
    </div>
  );
};

export default LandingPage;
