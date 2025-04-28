import {toast} from "react-toastify"
import { FaCheckCircle } from "react-icons/fa";
import './Toastify.css'
 export const notifySuccess = () =>{
    toast.success('Sent Succesfully', {
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        className: "success",
        icon: <FaCheckCircle color="#5AAD95" size={30} />,
        });
}

export const notifyAlert = () =>{
  toast.warn('All fields are required', {
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    className: "alert",
    });
}
export const notifyErr = () =>{
  toast.error('Error!', {
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