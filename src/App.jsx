import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Main from './pages/Main'
function App() {
  return (
    <Router> 
    <Routes>  
      <Route exact path="/" element={
          <div className='backdrop-blur-lg bg-cover bg-center items-center justify-center flex flex-col h-screen w-screen p-[0.3rem] overflow-hidden bg-[url("https://media.idownloadblog.com/wp-content/uploads/2021/10/macOS-Monterey-Apple-Stock-Wallpaper-still-2-2048x2048.jpg")]'>
            <Main/>
        </div>
      }></Route>
    </Routes>
  {/* <Routes>
    <Route exact path="/" element={
      <div id="main" className='h-[200vh] w-screen flex absolute flex-col top-0 transition-[top]'>
      <Login/>
      <Home/>
      </div>
    }>

    </Route>
</Routes> */}

    </Router>
  )
}

export default App