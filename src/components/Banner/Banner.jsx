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
          Selamat Datang Di Web Mahapala
        </h1>
        <p className="w-2/5">
        

        Mahapala adalah UKM di UPN "Veteran" Jawa Timur yang fokus pada pengembangan diri, kepemimpinan,
         dan pengabdian masyarakat. Mereka terlibat dalam kegiatan sosial dan pengembangan diri mahasiswa.
        </p>
        <div className="mt-12">
          <Link
            to="/blog"
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
