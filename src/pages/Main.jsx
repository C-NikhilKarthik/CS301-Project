import React from 'react'
import Home from './Home'
import Login from './Login'
function Main() {
  return (
    <div id="main" className="transition-[top] ease-in-out duration-700 absolute flex flex-col justify-start items-center w-full top-0">
    <Login/>
    <Home/>
</div>  )
}

export default Main