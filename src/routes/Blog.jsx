import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import BannerBlog from "../components/Banner/BannerBlog";

const apiKey = process.env.REACT_APP_API_HOST;
const Blog = () =>{
  return (
    <div >
      <Navbar/>
    <BannerBlog />
      <div className="container">
        <p className="text-center text-primary font-semibold">Lorem ipsum</p>
        <h1 className="text-center text-5xl font-semibold">Lorem ipsum</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-20 py-20">
          
           
          
        </div>
      </div>
    </div>
    
  );
}


export default Blog;