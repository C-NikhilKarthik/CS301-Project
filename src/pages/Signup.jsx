import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AppDrop from "../Components/AppDrop";
function Signup() {
  const [show,SetShow] = useState(0);
  const handle=()=>{
    SetShow(show+1);
  }
  const change=(event)=>{
    if(event!==0){
      return "relative  sm:hidden w-full px-4 bg-gray-700 divide-gray-600 rounded transition-[left] top-2 left-0";
    }else{
      return "relative sm:hidden w-full px-4 bg-gray-700 divide-gray-600 rounded transition-[left] top-2 left-[120%]"
    }
  }
  return (
    <div className="w-screen h-screen bg-bg1 bg-cover bg-center  ">
      <div className="flex flex-col w-full h-full sm:px-20 px-4 overflow-x-hidden">
        <nav className="w-full bg-black/30 backdrop-filter mt-6 h-auto backdrop-blur-sm rounded px-4 sm:px-6 md:px-10 flex justify-between py-3">
          <a href="/" className="flex flex-nowrap">
            <img src="https://flowbite.com/docs/images/logo.svg" alt="Main logo"/>
            <p className="hidden sm:flex flex-nowrap items-center justify-center px-2 text-gray-300 text-lg">
              Moderators
            </p>
          </a>
          <div className="sm:flex hidden items-center">
            <ul className="flex justify-between items-center gap-6">
              <Link to="/">
                <li className="text-gray-300 hover:text-white after:transition-[width] after:rounded after:block after:w-0 after:h-1 after:bg-white hover:after:w-full">
                  Home
                </li>
              </Link>
              <Link to="/">
                <li className="text-gray-300 hover:text-white after:transition-[width] after:rounded after:block after:w-0 after:h-1 after:bg-white hover:after:w-full">
                  About
                </li>
              </Link>
              <Link to="/">
                <li className="text-gray-300 hover:text-white after:transition-[width] after:rounded after:block after:w-0 after:h-1 after:bg-white hover:after:w-full">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div className="hidden sm:flex sm:items-center">
          <button className="rounded-lg bg-black/30 mx-2 backdrop-blur-sm border-gray-300 border text-gray-200 px-5 py-2">
            Sign In
          </button>
          <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-md px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">
            Sign Up
          </button>
          </div>

          <button className="sm:hidden flex border-2 bg-black/30 backdrop-filter backdrop-blur-md rounded border-gray-400 p-2" onClick={handle}>
            <span className="material-symbols-outlined text-gray-300 ">menu</span>
          </button>
        </nav>
        <AppDrop class={change(show%2)}/>
      </div>
    </div>
  );
}

export default Signup;
