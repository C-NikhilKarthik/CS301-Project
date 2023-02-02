import React, { } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Signup from "./pages/Signup";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Signup />}></Route>
        <Route
          path="/home"
          element={
            <>
              <Home />
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
