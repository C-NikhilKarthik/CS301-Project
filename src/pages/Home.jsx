import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
function Home() {
  useState(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-bg1 w-screen h-screen bg-cover bg-center p-4">
      <div
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-offset="0"
        className="bg-black/40 w-full h-full rounded-lg backdrop-blur-md"
      >
        <div className=""></div>
      </div>
    </div>
  );
}

export default Home;
