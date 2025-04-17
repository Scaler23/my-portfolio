import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Gon from "../../images/image services/gon.webp";
import pcSetup from "../../images/image services/pcsetup.jpg";
import Laptop from "../../images/image services/laptop.jpg";
import LaptopTwo from "../../images/image services/latop2.jpg";
import "./Services.css";
const tabs = [
  { id: "all", label: "All" },
  { id: "web", label: "Web Design" },
  { id: "logo", label: "Logo Design" },
  { id: "brand", label: "Branding" },
];

const Services = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const getImages = () => {
    switch (selectedTab.id) {
      case "web":
        return [Gon, pcSetup];
      case "logo":
        return [pcSetup];
      case "brand":
        return [Laptop]; // Add branding images if any
      default:
        return [pcSetup, Laptop, LaptopTwo, Gon];
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
                selectedTab.id === tab.id ? "#7a7a7a" : "#b6b6b6",
              color: selectedTab.id === tab.id ? "#fff" : "#333",
            }}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>

      <div className="show-work">
        <AnimatePresence mode="wait">
          {getImages().map((src, index) => (
            <motion.img
              key={src + index}
              src={src}
              alt="work"
              viewport={{
                amount: 0.5,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Services;
