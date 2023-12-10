import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import CustomerReviews from "../components/CustomerReviews/CustomerReviews";
import Feature from "../components/Feature/Feature";
import ToursPackage from "../components/ToursPackage/ToursPackage";
import HappyCustomers from "./../components/HappyCustomers/HappyCustomers";
import Footer from "../components/Footer/Footer";

const apiKey = process.env.REACT_APP_API_HOST;
const Home = () =>{
  return (
    <div >
      <Navbar/>
    <Banner />
    {/* component yang mengeluarkan 3 pilihan aksi  blog, dokumentasi, dan kontak  */}
      <Feature />
      <CustomerReviews />
      <div className="">
        <h1 className="text-center text-5xl font-bold">Tentang Mahapala</h1>
        <p className="mt-6 text-center text-primary font-semibold">Daftar Sekarang</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-20 py-20">
          
           
          
        </div>
      </div>
      {/* ini masuk visi misi mahapala */}
      <HappyCustomers />

      <Footer/>
    </div>
    
  );
}


export default Home;