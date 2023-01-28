import React, { useEffect, useState } from "react";
import Aos from "aos";
import ShowProfile from "../Components/ShowProfile";
import "aos/dist/aos.css";
import discord from "../Images/discord.png";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 200 });
  }, []);
  const [show, setShow] = useState(false);
  const [val, setValue] = useState(0);
  const handle = () => {
    setValue(val + 1);
  };
  const change = (event) => {
    if (event === 0) {
      return "absolute transition-[left]  duration-500 sm:w-full h-full grid w-[200%] grid-cols-[1fr_1fr] sm:grid-cols-[16em_1fr] left-0 sm:left-0";
    } else {
      return "absolute transition-[left] duration-500 sm:w-full h-full grid w-[200%] grid-cols-[1fr_1fr] sm:grid-cols-[16em_1fr] sm:left-0 -left-[100%]";
    }
  };
  const change1 = (event) => {
    if (event === 0) {
      return "absolute transition-[left] grid duration-500 h-full w-[200%] grid-cols-[1fr_1fr] -left-[100%]";
    } else {
      return "absolute transition-[left] grid duration-500 h-full w-[200%] grid-cols-[1fr_1fr] left-0";
    }
  };
  return (
    <>
      <div id="home" className="relative p-2 w-full h-screen">
        <div
          data-aos="fade-right"
          data-aos-offset="0"
          className="relative overflow-hidden w-full border h-full grid grid-cols-[4em_1fr] rounded-lg"
        >
          <div className="backdrop-filter backdrop-blur-md bg-[#00000090] border-r-[1px]">
            <nav className="bg-white border-gray-200 px-2 sm:px-4  sm:hidden block backdrop-blur-md backdrop-filter py-2.5 rounded dark:bg-gray-900/20">
              <div className="container flex flex-row items-center justify-end ">
                <div
                  className="w-[3rem] h-[3rem] relative overflow-hidden"
                  onClick={handle}
                >
                  <div className={change1(val % 2)}>
                    <div className="items-center flex justify-center cursor-pointer hover:text-white text-[#aea6ae]">
                      <span class="material-symbols-outlined">chat</span>
                    </div>
                    <div className="items-center flex justify-center cursor-pointer hover:text-white text-[#aea6ae]">
                      <span class="material-symbols-outlined">menu</span>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="relative overflow-hidden w-full h-full">
            <div className={change(val % 2)}>
              <div className="backdrop-filter backdrop-blur-md bg-[#00000080] border-r-[1px]">
                <nav className="bg-white border-gray-200 px-2 sm:px-4 backdrop-blur-md backdrop-filter py-2.5 rounded dark:bg-gray-900/20">
                  <div className="container flex flex-row items-center justify-end ">
                    <div className="flex">
                      <div className="relative">
                        <input
                          type="text"
                          id="search-navbar"
                          className="peer block w-full my-1.5 h-[2.25rem] p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#b1b1b7]  dark:focus:outline-none"
                          placeholder="Search..."
                        />
                        <div className=" peer-focus:text-white absolute text-[#b1b1b7] inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            className="w-5 h-5 "
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span className="sr-only">Search icon</span>
                        </div>
                      </div>
                    </div>
                    <button
                      className="relative h-[3rem] w-[3rem] bg-white rounded-[1.5rem] ml-4 block sm:hidden"
                      onClick={() => setShow(true)}
                    />
                  </div>
                </nav>
              </div>
              <div className="backdrop-filter backdrop-blur-md  bg-[#00000075]">
                <nav className="bg-white border-gray-200 px-2 sm:px-4 backdrop-blur-md backdrop-filter py-2.5 rounded dark:bg-gray-900/20">
                  <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="/home" className="flex items-center">
                      <img
                        src={discord}
                        className="h-[3rem] mr-3"
                        alt="Flowbite Logo"
                      />
                      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        Moderators
                      </span>
                    </a>
                    <div className="flex md:order-2">
                      <button
                        className="relative h-[3rem] w-[3rem] bg-white rounded-[1.5rem] ml-4 sm:block hidden"
                        onClick={() => setShow(true)}
                      ></button>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ShowProfile
        onClose={() => setShow(false)}
        show={show}
        name={"C.Nikhil Karthik"}
      />
    </>
  );
}

export default Home;
