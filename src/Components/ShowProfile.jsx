import React from "react";

function ShowProfile(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div
      onClick={props.onClose}
      className="absolute flex z-10 p-8 justify-end items-start w-full h-screen"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative top-[5rem] flex justify-center rounded bg-[#1b283b] border h-[18rem] w-[15rem]"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute -top-[11px] right-3 flex flex-col justify-center bg-[#1b283b] border border-left-none border-r-0 border-b-0  rotate-45 h-[20px] w-[20px]"
        >
        </div>
        <div className="flex flex-col items-start justify-center py-5">
              <div className="w-[2.5rem] h-[2.5rem] rounded-[1.25rem] bg-white"></div>
              <p className="text-lg text-[#a6aea6] ">{props.name}</p>
            </div>  
      </div>
    </div>
  );
}

export default ShowProfile;
