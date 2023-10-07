import React from "react";
import { Link } from "react-router-dom";
import banner from "../../images/banner.png";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-screen py-36 bg-fixed"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="container ml-20">
        <h1 className="text-6xl capitalize text-gray-800 font-medium mb-4">
          Mahapala upnv
        </h1>
        <p className="w-2/5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="mt-12">
          <Link
            to="#"
            className="bg-primary border border-primary text-white px-3 py-2 font-medium rounded hover:bg-transparent hover:text-primary transition"
          >
            Ketahui lebih lanjut
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
