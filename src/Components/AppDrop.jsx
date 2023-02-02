import React from "react";

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
          <div className="w-full rounded flex justify-center items-center hover:bg-gray-600 py-2 text-gray-300">
            SignIn
          </div>
          <div className="text-white bg-blue-700 flex justify-center hover:bg-blue-800 font-medium rounded-lg text-md px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">
            SignUp
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppDrop;
