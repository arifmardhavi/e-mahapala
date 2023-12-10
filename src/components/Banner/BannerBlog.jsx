import React from "react";
import { Link } from "react-router-dom";
import banner from "../../images/banner.png";

const BannerBlog = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-screen py-14 bg-fixed"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      
    <div className="grid grid-cols-1 md:grid-cols-2 gap-">
          <div className="p4 ml-48 pt-8">
            <img
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwartapalaindonesia.com%2Fwp-content%2Fuploads%2F2021%2F04%2F1618299955594-1-960x640.jpg&f=1&nofb=1&ipt=04d5e7ab677519ce4f2584156fc7f0e94b612b0e07f0a8e7648b9a0b7471986c&ipo=images"
            alt="Gambar dari Google"
            className="max-w-6xl h-96 rounded-lg"/>
          </div>

        <div className="p4 pl-36 ml- pt-36">
          <h1 className="text-6xl capitalize text-gray-800 font-medium mb-4">
            Kegiatan <br></br>Mahapala
          </h1>
        </div>
      </div>
  </div>
  );
};

export default BannerBlog;
