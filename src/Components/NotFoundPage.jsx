import React from "react";
import { Link } from "react-router-dom";
import { BiError } from "react-icons/bi";
import { HiOutlineBackspace } from "react-icons/hi2";
const NotFoundPage = () => {
  return (
    <div className="w-full pb-[400px] flex justify-center items-center bg-[#fcf9f9]">
      <div>
        <div className="flex md:flex-row flex-col-reverse items-center justify-center">
          <h1 className="text-[#c4c4c4] lg:text-[300px] md:text-[250px] text-[150px] font-black">404</h1>
          <BiError className="text-[#c4c4c4]" size={300} />
        </div>
        <h1 className="text-center mt-[-40px] md:text-[3rem] text-[#404040] sm:text-[2rem] text-[28px]">Sorry we couldn't find that page</h1>

        <div className="w-full mt-5 flex justify-center">
          <Link className="flex border-2 hover:bg-[#c4c4c4] transition-all rounded-md px-6 py-[10px] mt-[10px] items-center space-x-[5px]" to="/">
            <p className="font-bold">Back To My Repositories</p>
          <span><HiOutlineBackspace className="text-[20px]" /></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
