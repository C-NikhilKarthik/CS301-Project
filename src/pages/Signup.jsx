import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import AppDrop from "../Components/AppDrop";
import { useEffect } from "react";
function Signup() {
  const [show, SetShow] = useState(0);
  const handle = () => {
    SetShow(show + 1);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  const change = (event) => {
    if (event !== 0) {
      return "relative h-full sm:hidden w-full px-4 bg-gray-700 shadow-lg divide-gray-600 rounded z-10 transition-[left] top-2 left-0";
    } else {
      return "relative h-full sm:hidden w-full px-4 bg-gray-700 shadow-lg divide-gray-600 z-10 rounded transition-[left] top-2 left-[120%]";
    }
  };
  return (
    <div className="w-screen h-screen bg-bg1 bg-cover bg-center  ">
      <div className="flex flex-col w-full h-full sm:px-20 px-4 overflow-x-hidden">
        <nav
          data-aos="zoom-out-down"
          data-aos-offset="0"
          className="w-full bg-black/30 backdrop-filter mt-6 h-auto backdrop-blur-sm rounded px-4 sm:px-6 md:px-10 flex justify-between py-3"
        >
          <a href="/" className="flex flex-nowrap">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Main logo"
            />
            <p className="ms:font-base text-xl flex flex-nowrap items-center justify-center px-4 text-gray-300">
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
            <Link to="/login">
              <button className="rounded-lg bg-black/30 hover:bg-black/40 mx-2 border-gray-300 border text-gray-200 px-5 py-2">
                Sign In
              </button>
            </Link>
            <Link to="/login">
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 "
              >
                Sign Up
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>

          <button
            className="sm:hidden flex border-2 bg-black/30 backdrop-filter backdrop-blur-md rounded border-gray-400 p-2"
            onClick={handle}
          >
            <span className="material-symbols-outlined text-gray-300 ">
              menu
            </span>
          </button>
        </nav>
        <AppDrop class={change(show % 2)} />
        <div
          data-aos="fade-right"
          data-aos-delay="600"
          data-aos-duration="500"
          className="sm:top-0 -top-32 relative mt-10 flex fle-col justify-center items-center"
        >
          <div
            className=" text-4xl font-bold bg-black/30 w-fit px-6 py-4 rounded-md backdrop-blur-md text-gray-100 flex flex-col items-center justify-center"
          >
            <p>Share.</p>
            <p>Explore.</p>
            <p>Connect.</p>
            <div className="text-gray-200 text-[1rem] font-normal">
              Connect with various users and explore your interests.
            </div>
            <div className="flex w-fit">
              <Link to="/login">
                <button className="text-white text-base bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-md px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">
                  Get Started
                </button>
              </Link>
              <Link to="/">
                <button className="border-2 border-white text-base px-5 py-2 rounded-lg ml-4 hover:bg-gray-400/50 backdrop-blur-sm backdrop-filter">
                  Explore
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
