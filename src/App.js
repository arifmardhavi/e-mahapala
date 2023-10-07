import logo from './logo.svg';
import { Link } from "react-router-dom";

import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home.jsx';
import TrainerProfile from './routes/Trainer_profile';

function App() {
  return (
<>
      <div className="flex flex-wrap sticky">
      <div className="w-full">
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div className="w-full relative flex justify-between lg:w-auto  lg:static lg:block lg:justify-start">
      
      </div>
      <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

      <li className="nav-item">
                    <a href ="/"
        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75">
                      Home
                    </a>
                  </li>
      <li className="nav-item">
                    <a href
                      ={"/trainerprofiles"}
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                    >
                      menu2"ada"
                    </a>
                  </li>
      <li className="nav-item">
                    <a href
                      to="/"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                    >
                      Galeri
                    </a>
                  </li>
      <li className="nav-item">
                    <a href
                      to="/"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                    >
                      contact
                    </a>
                  </li>
                  <li className="nav-item bg-indigo-500 my-2 lg:my-0 rounded-md mr-4">
                        <a href
                          to="/login"
                          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                        >
                          Login
                        </a>
                      </li>
                      <li className="nav-item bg-indigo-500 my-2 lg:my-0 mr-4 rounded-md">
                        <a href
                          to="/register"
                          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                        >
                          Register
                        </a>
                      </li>
      </ul>

      
      </div>
      </nav>
      </div>
      </div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainerprofiles" element={<TrainerProfile />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
