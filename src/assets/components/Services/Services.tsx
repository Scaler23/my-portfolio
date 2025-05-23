import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import WebSample from "../../images/image services/portfolio.jpg"
import Graphics from "../../images/image services/graphics.jpg"
import Branding from "../../images/image services/branding.jpg"
import LogoDesign from "../../images/image services/logosample.jpg"
import { FaMobileAlt } from "react-icons/fa";
import { SiTaichigraphics } from "react-icons/si";
import { MdOutlineBrandingWatermark, MdComputer } from "react-icons/md";
import "./Services.css";
const tabs = [
  { id: "all", label: "ALL" },
  { id: "web", label: "WEB DESIGN" },
  { id: "graphic", label: "GRAPHIC DESIGN" },
  { id: "branding", label: "BRANDING" },
];

const Services = () => {
  type ImageText = {
    src: string;
    title: string;
    description: string;
    image: any;
  }
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const getImages = (): ImageText[] => {
    switch (selectedTab.id) {
      case "web":
        return [
        {
          src: WebSample,
          title: "WEB DESIGN",
          description: "I offer professional web design services that help transform your website into a modern, responsive, and user-friendly site",
          image: <FaMobileAlt />,
        },
      ];;
      case "graphic":
        return [
        {
          src: Graphics,
          title: "GRAPHIC DESIGN",
          description: "Turn your ideas into reality with eye-catching designs and visuals. I craft striking graphics and illustrations that enhance your brand’s impact.",
            image: <SiTaichigraphics />,
        },
      ];
      case "branding":
        return [
        {
          src: Branding,
          title: "BRANDING",
          description: "Elevate your brand with a strong identity through captivating visuals and thoughtful design strategies.",
            image: <MdOutlineBrandingWatermark />,
        },
           {
          src: LogoDesign,
          title: "LOGO DESIGN",
          description: "Give your brand a unique voice with custom logo designs that reflect your identity and vision.",
            image: <FaMobileAlt />,
        }
      ];; 
      default:
        return[
        {
          src: WebSample,
          title: "WEB DESIGN",
          description: "I offer professional web design services that help transform your website into a modern, responsive, and user-friendly site",
            image: <FaMobileAlt />,
        },
        {
          src: Graphics,
          title: "GRAPHIC DESIGN",
          description: "Turn your ideas into reality with eye-catching designs and visuals. I craft striking graphics and illustrations that enhance your brand’s impact.",
            image: <SiTaichigraphics />,
        },
        {
          src: Branding,
          title: "BRANDING",
          description: "Elevate your brand with a strong identity through captivating visuals and thoughtful design strategies.",
            image: <MdOutlineBrandingWatermark />,
        },
        {
          src: LogoDesign,
          title: "LOGO DESIGN",
          description: "Give your brand a unique voice with custom logo designs that reflect your identity and vision.",
            image: <MdComputer />,
        },
      ];
    }
  };

  return (
    <div className="services" id="services">
      <p>SELECTED WORK</p>

      <div className="work-button">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              amount: 1,
            }}
            exit={{ opacity: 0, y: 200 }}
            transition={{ type: "spring", duration: 1 }}
            onClick={() => setSelectedTab(tab)}
            className="button relative px-4 py-2 font-medium"
            style={{
              border: "1px solid black",
              backgroundColor:
                selectedTab.id === tab.id ? "#246E64" : "#F2F2F2",
              color: selectedTab.id === tab.id ? "#fff" : "#454545",
              borderColor: selectedTab.id === tab.id ? "#FFFFFF" : "#454545"
            }}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>

      <div className="show-work">
        <AnimatePresence mode="wait">
          {getImages().map((item, index) => (
            <motion.div
              key={item.src + index}
                className="selectectedWork relative group"
              viewport={{
                amount: 0.5,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={item.src}
                alt={item.title || "work"}
              />
              {/* Hover Overlay */}
              <div className=" hoverText absolute inset-0 bg-[#ffffff] bg-opacity-10  opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-active:opacity-100">
             <div className="hoverText-wrapper">
                <div className="image-logo">
                  <div className="image-box">
                  <div className="logo-container">
                  <span className="image-icon">{item.image}</span>
                  </div>
                  </div>
                </div>
                <div className="content">
                <span className="workTitle"> {item.title}</span>
                <span className="workDescription">{item.description}</span>
                </div>
            </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Services;
