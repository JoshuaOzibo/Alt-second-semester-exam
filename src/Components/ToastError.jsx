import React from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ToastError = ({isErrorTrue}) => {

    toast.error('Error creating repository:', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });


  return (
    <div>
      {isErrorTrue && <ToastContainer />}
    </div>
  )
}

export default ToastError
