import React, { useState } from "react";
import "./App.css"
import "./styles.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import Login from "./Pages/Login";
import Navebar from "./Pages/Navbar";
import Signup from "./Pages/Signup";
import Course from "./Pages/Course";
import Cart from "./Pages/Cart";


function App() {
  return (
    <HashRouter>
      <Navebar />
        
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/Login" element={<Login />}/>
            <Route path="/Signup" exact element={<Signup />} />
            <Route path="/Course" element={<Course />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
       
    </HashRouter>
  );
}

export default App;
