import React from "react";
import { Link } from "react-router-dom";
import banner from "../../images/banner.png";

const BannerBlog = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-screen py-36 bg-fixed"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      
        <div className="grid grid-cols-1 md:grid-cols-1 text-center gap-">



          <div className="p4 ml- pt-36">

          <h1 className="text-6xl capitalize text-gray-800 font-medium mb-4">
          Kontak Mahapala <br></br>UPN Veteran Jawa Timur
        </h1>
            
          </div>
          

        </div>
        
      </div>
  );
};

export default BannerBlog;
