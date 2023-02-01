import React from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
function ShowProfile(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div
      onClick={props.onClose}
      className="absolute flex z-10 p-8 justify-end items-start w-full h-screen" data-aos="fade-down" data-aos-offset="0" data-aos-duration="500" data-aos-easing="easeOut" 
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative top-[81px] flex justify-center text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600 h-[18rem] w-[15rem]"
      >
        <div className="relative w-full h-full flex flex-col items-center justify-between  gap-3 p-5">
          <div className="w-[3rem] h-[3rem] rounded-[1.5rem] bg-white"></div>
          <p className="text-base font-semibold leading-none text-gray-900 dark:text-white ">
            {props.name}
          </p>
          <p className="mb-3 text-sm font-normal">{props.id}</p>
          <Link to="/">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 focus:outline-none rounded px-6 py-2 font-medium text-white "
            >
              LOGOUT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShowProfile;
