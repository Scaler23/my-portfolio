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
        icon: <FaCheckCircle color="#8E8E8E" size={30} />,
        style:{
            borderLeft: "5px solid #8E8E8E"
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
    });
}