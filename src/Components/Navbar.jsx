import React, {useState} from "react";
import {Link} from 'react-router-dom';
import CreateRepoModal from "./CreateRepoModal";
import ToastMessage from "./ToastMessage";
import ToastError from "./ToastError";
import TestModal from "./TestModal";


const Navbar = ({setIsErrorTrue}) => {
  const [showToast, setShowToast] = useState(false);
  const [showToastError, setShowToastError] = useState(false)
  const [showTestModal, setSowTestModal] = useState(false)
  //   {text: #a8b8eb, bg: #0e1c42, border: #21264b}

  const showTestModalHandler = () =>{
    setSowTestModal(true)
  }
  return (
    <nav className="flex z-10 fixed items-center md:justify-between justify-center w-full h-[60px] bg-[#fcfcfc] border-slate-300 border-b md:px-[80px] px-[1rem]">
      <button onClick={showTestModalHandler} className=" outline-none bg-[#0e1c42] text-[#a8b8eb] hover:text-[#0e1c42] hover:bg-[#a8b8eb] active:bg-[#0e1c42] active:text-[#a8b8eb] transition-all border-2 px-3 py-2 font-bold rounded-md cursor-pointer">Test</button>
      <ul className="flex items-center m-auto w-full space-x-10 justify-center">
        <li className=" outline-none">
          <Link className=" outline-none bg-[#0e1c42] text-[#a8b8eb] hover:text-[#0e1c42] hover:bg-[#a8b8eb] active:bg-[#0e1c42] active:text-[#a8b8eb] transition-all border-2 px-3 py-2 font-bold rounded-md cursor-pointer" to="/">Repositories</Link>
        </li>

        {/* createRepo */}
      <CreateRepoModal setShowToastError={setShowToastError} setShowToast={setShowToast} />
      </ul>

      {showToast && <ToastMessage />}
      {showToastError && <ToastError />}

      {<TestModal setIsErrorTrue={setIsErrorTrue} showTestModal={showTestModal} setSowTestModal={setSowTestModal} />}
    </nav>
  );
};

export default Navbar;