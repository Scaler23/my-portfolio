import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { notifyAlert, notifyErr, notifySuccess} from './ToastifyNotification';
import { ToastContainer} from 'react-toastify';
import "./ContactUs.css"

export const ContactUs: React.FC = () => {
  
  const form = useRef<HTMLFormElement>(null);
  const  [isSending, setIsSending] = useState<boolean>(false)
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
 
    // Exit function if form.current is null
  if(isSending || !form.current) return;
 
  const  name = form.current['from_name'].value;
  const email = form.current['from_email'].value;
  const message = form.current['message'].value;
  
  // alert when name, email, alert is empty or null
    if(!name || !email || !message){
      notifyAlert();
      form.current?.reset();
      return;
    }

    setIsSending(true); // Set isSending to true to prevent multiple submissions

    emailjs
      .sendForm('service_549p7kn', 'template_6yyobxm', form.current, {
        publicKey: 'x-02FkPjTvnE_hoXk',
      })
      .then(
        () => {
          console.log("Successfully Sent");
          form.current?.reset();
          setIsSending(false);
          notifySuccess();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsSending(false);
          notifyErr()
        }
            
      ); 
      return "";
  };

  return (

    <div className="contact" id='contact'>
      <p className='getTouch'>GET IN TOUCH</p>
        <form ref={form} onSubmit={sendEmail}>
          <div className="row">
          <div className="first-column">
              <input type="text" name="from_name" placeholder='NAME' className='name' required/>
              <input type="email" name="from_email" placeholder='EMAIL' className='email'/>
          </div>
          <div className="second-column">
            <textarea name="message"  placeholder='MESSAGE' className='message'/>
          </div>
          </div>
            <input type="submit" value="SUBMIT"  className='submit' />

        </form>
        <ToastContainer
       />
    </div>
  );
};