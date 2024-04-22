import React from 'react'
  import { ToastContainer, toast, Bounce } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const ToastMessage = () => {
    
    toast('Repository created successfully.', {
        position: "top-right",
        autoClose: 4000,
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
        <ToastContainer />
      </div>
  )
}

export default ToastMessage
