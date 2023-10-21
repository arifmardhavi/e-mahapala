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
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="p4 pl-36 ml-20 pt-36">

          <h1 className="text-6xl capitalize text-gray-800 font-medium mb-4">
          Kegiatan Mahapala
        </h1>
            
          </div>
          <div className="p4 ml-20 pt-20">

          <img
    src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fkabarkampus.com%2Fwp-content%2Fuploads%2F2014%2F09%2F15-09-2014-Mahapala-Unnes-e1410763819781.jpg&f=1&nofb=1&ipt=ee5329508ee94198519a3e4bebabac2f4c59486a1773cc8f3218983350ce0749&ipo=images"
    alt="Gambar dari Google"
    className="max-w-full h-auto rounded-lg"
  />
            
          </div>

        </div>
        
      </div>
  );
};

export default BannerBlog;
