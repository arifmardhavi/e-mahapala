import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import CustomerReviews from "../components/CustomerReviews/CustomerReviews";
import Feature from "../components/Feature/Feature";
import ToursPackage from "../components/ToursPackage/ToursPackage";
import HappyCustomers from "./../components/HappyCustomers/HappyCustomers";

const apiKey = process.env.REACT_APP_API_HOST;
const Home = () =>{
  return (
    <div >
      <Navbar/>
    <Banner />
      <Feature />
      <div className="container">
        <p className="text-center text-primary font-semibold">Lorem ipsum</p>
        <h1 className="text-center text-5xl font-semibold">Lorem ipsum</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-20 py-20">
          
           
          
        </div>
      </div>
      <HappyCustomers />
      <CustomerReviews />
    </div>
    
  );
}


export default Home;