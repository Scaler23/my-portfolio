import "./Portfolio.css"
import {motion} from "motion/react"
import Project from "../../images/websitepic.png"
const Portfolio = () => {
  return (
    <div className="Portfolio" id="portfolio">
          <motion.div className="portfolio-title"
           viewport={{
                amount: 0.5,
              }}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <p>PROJECT</p>
          </motion.div>
          <div className="project">
            <motion.div className="port-wrapper" 
             viewport={{
                amount: 0.5,
              }}
              initial={{ opacity: 0}}
              whileInView={{ opacity: 1}}
              exit={{ opacity: 0}}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
            <img src={Project} alt=""/>
            </motion.div>
           
         
          <motion.div className="port-info"
               viewport={{
                amount: 0.5,
              }}
              initial={{ opacity: 0}}
              whileInView={{ opacity: 1}}
              exit={{ opacity: 0}}
              transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <p className="port-title">SCALER|CODE</p>
            <p className="port-description">A personal website portfolio built using TypeScript, CSS, Vite, and React.js, designed to showcase my programming skills, technical knowledge, and passion for front-end development. This project highlights my ability to design and develop responsive, efficient, and well-structured web application
            </p>
            </motion.div> 
          </div>
    </div>
  )
}

export default Portfolio
