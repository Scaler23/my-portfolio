import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { notifyAlert, notifyErr, notifySuccess } from "./ToastifyNotification";
import { motion } from "motion/react";
import { ToastContainer } from "react-toastify";
import "./ContactUs.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";



export const ContactUs: React.FC = () => {
  const [isWidth, setWidth] = useState<boolean>(false);

  useEffect(()=>{
        const HandWidth = () =>{
            if(window.innerWidth < 1300){
              setWidth(true)
            }else{
              setWidth(false)
            }
        }
        HandWidth();
        window.addEventListener("resize", HandWidth);
        return () => window.removeEventListener("resize", HandWidth);
  },[])
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState<boolean>(false);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Exit function if form.current is null
    if (isSending || !form.current) return;

    const name = form.current["from_name"].value;
    const email = form.current["from_email"].value;
    const message = form.current["message"].value;

    // alert when name, email, alert is empty or null
    if (!name || !email || !message) {
      notifyAlert();
      form.current?.reset();
      return;
    }

    setIsSending(true); // Set isSending to true to prevent multiple submissions

    emailjs
      .sendForm("service_549p7kn", "template_6yyobxm", form.current, {
        publicKey: "x-02FkPjTvnE_hoXk",
      })
      .then(
        () => {
          console.log("Successfully Sent");
          form.current?.reset();
          setIsSending(false);
          notifySuccess();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSending(false);
          notifyErr();
        }
      );
    return "";
  };

  return (
    <div className="contact" id="contact">
      <p className="getTouch">GET IN TOUCH</p>
      <form ref={form} onSubmit={sendEmail}>
        <div className="row">
          <div className="first-column">
            <motion.input
              type="text"
              name="from_name"
              placeholder="NAME"
              className="name"
              required
              viewport={{
                amount: 0.5,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            />
            <motion.input
              type="email"
              name="from_email"
              placeholder="EMAIL"
              className="email"
              viewport={{
                amount: 0.5,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="second-column">
            <motion.textarea
              name="message"
              placeholder="MESSAGE"
              className="message"
              viewport={{
                amount: 0.5,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
        <motion.input
          type="submit"
          value="SUBMIT"
          className="submit"
          viewport={{
            amount: 0.5,
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        />
      </form>
      {isWidth &&
      <div className="logosTwo">
      <div className="logo-wrapperTwo">
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
      }
      <div className="copy">
      &copy; Johnbert 2025.
      </div>
        
      <ToastContainer
  toastClassName="custom-toast"
        style={
          {
            position:"fixed"
          }
        }
         />
    </div>
  );
};
