import React from 'react'

function Teams() {
  return (
    <div className="w-full relative my-5 flex justify-center items-center overflow-auto">
        <div className="peer relative h-[3rem] w-[3rem] bg-white rounded-[1.5rem] cursor-pointer"></div>
        <div className='peer-hover:h-4 absolute rounded h-0 transition-[height] w-2 bg-gray-300 -left-1'></div>
    </div>
  )
}

export default Teams