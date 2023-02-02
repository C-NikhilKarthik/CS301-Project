import React from "react";
import { Link } from "react-router-dom";

function AppDrop(props) {
  return (
    <div className={props.class}>
      <div className="flex flex-col">
        <div className="border-b border-b-gray-500 py-2">
          <div className="w-full rounded flex justify-center items-center bg-blue-600 hover:bg-gray-600 py-2 text-gray-300">
            Home
          </div>
          <div className="w-full rounded flex justify-center items-center hover:bg-gray-600 py-2 text-gray-300">
            About
          </div>
          <div className="w-full rounded flex justify-center items-center hover:bg-gray-600 py-2 text-gray-300">
            Contact
          </div>
        </div>
        <div className="flex flex-col py-2 gap-1">
          <Link to="/login">
            <div className="w-full rounded flex justify-center items-center hover:bg-gray-600 py-2 text-gray-300">
              Sign In
            </div>
          </Link>
          <Link to="/login" className="flex justify-center">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 "
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
      </div>
    </div>
  );
}

export default AppDrop;
