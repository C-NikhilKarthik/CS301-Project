import React from "react";
import { Link } from "react-router-dom";

function Login() {
  let submit=()=>{
    document.getElementById("main").style.top="-100vh";
  }
  let signup = () => {
    document.getElementById("t1").style.top = "0";
  };
  let signin = () => {
    document.getElementById("t1").style.top = "-304px";
  };
  return (
    <div id="login" className="relative flex justify-center items-center w-full h-screen">
      <div className=" backdrop-blur-lg border-white items-center justify-center border-[1px] flex flex-col rounded h-[25rem] bg-[#00000040] w-[20rem] p-[0.3rem] shadow-xl overflow-hidden ">
        <div
          id="t1"
          className="transition-[top] duration-300 absolute flex flex-col justify-start items-center w-full -top-[304px]"
        >
          <div className="relative flex h-[19rem] flex-col w-full gap-5 items-center justify-end pb-6 px-3 ">
            <div className="relative w-full flex flex-nowrap items-center">
              <input
                className="group w-full focus:shadow-md focus:outline-none rounded bg-[#00000070] px-8 py-1 text-[#d5d5d5]"
                placeholder="Username"
              />
              <span className="pointer-events-none group-focus:text-white text-[#989e98] absolute left-1 material-symbols-outlined">
                person
              </span>
            </div>
            <div className="relative w-full flex flex-nowrap items-center">
              <input
                type="password"
                className="group w-full focus:shadow-md focus:outline-none rounded bg-[#00000070] px-8 py-1 text-[#d5d5d5]"
                placeholder="Password"
              />
              <span className="pointer-events-none group-focus:text-white text-[#989e98] absolute left-1 material-symbols-outlined">
                lock
              </span>
            </div>
            <div className="relative w-full flex flex-nowrap items-center">
              <input
                type="password"
                className="group w-full focus:shadow-md focus:outline-none rounded bg-[#00000070] px-8 py-1 text-[#d5d5d5]"
                placeholder="Re-Enter Password"
              />
              <span className="pointer-events-none group-focus:text-white text-[#989e98] absolute left-1 material-symbols-outlined">
                lock
              </span>
            </div>
            <button
              className="px-8 py-2 border text-[#d5d5d5] rounded mt-3"
              onClick={signin}
            >
              Create Account
            </button>
          </div>
          <img
            className="h-16 my-4"
            src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png"
          />
          <div className="relative flex h-[19rem] flex-col w-full gap-5 items-center justify-start pt-4 px-3 ">
            <div className="relative w-full flex flex-nowrap items-center">
              <input
                className="group w-full focus:shadow-md focus:outline-none rounded bg-[#00000070] px-8 py-1 text-[#d5d5d5]"
                placeholder="Username"
              />
              <span className="pointer-events-none group-focus:text-white text-[#989e98] absolute left-1 material-symbols-outlined">
                person
              </span>
            </div>
            <div className="relative w-full flex flex-nowrap items-center">
              <input
                type="password"
                className="group w-full focus:shadow-md focus:outline-none rounded bg-[#00000070] px-8 py-1 text-[#d5d5d5]"
                placeholder="Password"
              />
              <span className="pointer-events-none group-focus:text-white text-[#989e98] absolute left-1 material-symbols-outlined">
                lock
              </span>
            </div>
              <button
                type="submit"
                className="px-8 py-2 border text-[#d5d5d5] mt-4 rounded"
                onClick={submit}
              >
                Log In
              </button>
            <div className="relative flex px-6 justify-between items-center w-full text-[#d5d5d5]">
              <a className="cursor-default">Don't have an account?</a>
              <a className=" cursor-pointer px-2 py-1" onClick={signup}>
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
