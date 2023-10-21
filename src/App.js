import logo from './logo.svg';
import { Link } from "react-router-dom";

import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home.jsx';
import TrainerProfile from './routes/Trainer_profile';
import Dashboard_admin from './routes/Dashboard_admin';
import Editanggota from './routes/Edit_anggota';
import Login from './routes/Login';
import Blog from './routes/Blog';

function App() {
  return (
<>

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainerprofiles" element={<TrainerProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Dashboard_admin />} />
        <Route path="/editanggota" element={<Editanggota />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
