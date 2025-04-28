
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";

const SocialLogo = () =>{
    
    return(
        <div className="logos">
        <div className="logo-wrapper">
          <div className="linkin">
            <a href="https://www.linkedin.com/in/johnbert-yabut-30136424b/">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="gitHub">
            <a href="https://github.com/Scaler23/my-portfolio.git">
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
    )
}
export default SocialLogo