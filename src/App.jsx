import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <div className='bg-cover bg-center items-center justify-center flex flex-col h-screen w-screen p-[0.3rem] overflow-hidden bg-background1'>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Login/>
              </>
            }
          ></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
