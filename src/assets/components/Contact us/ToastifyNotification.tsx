import {toast} from "react-toastify"
import { FaCheckCircle } from "react-icons/fa";
import './Toastify.css'
 export const notifySuccess = () =>{
    toast.success('Sent Succesfully', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        className: "success",
        icon: <FaCheckCircle color="#5AAD95" size={30} />,
        style:{
            borderLeft: "5px solid #5AAD95",
        }
        });
}

export const notifyAlert = () =>{
  toast.warn('All fields are required', {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    className: "alert",
 style:{
  position: "fixed",
  bottom: "-40rem",
  right: "-10rem"
 }
    });
}
export const notifyErr = () =>{
  toast.error('Error!', {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    className: "error",
    });
}