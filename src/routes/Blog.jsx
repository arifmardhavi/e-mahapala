import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BannerBlog from "../components/Banner/BannerBlog";

const apiKey = process.env.REACT_APP_API_HOST;
const Blog = () =>{
  return (
  <div >
      <Navbar/>
      <BannerBlog />
      <div className="container">
        <h1 className="text-left text-3xl font-semibold pl-10 pt-5">Kegiatan Terbaru</h1>
          
        <div class="w-max pl-6 text-left">
          <nav aria-label="breadcrumb">
            <ol class="flex w-full flex-wrap items-center rounded-md bg-blue-gray-50 bg-opacity-60 py-2 px-4">
              <li class="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-blue-500">
                <a class="opacity-60" href="#">
                  <span>All</span>
                </a>
                <span class="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased">
                  /
                </span>
              </li>
              <li class="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-blue-500">
                <a class="opacity-60" href="#">
                  <span>Divisi1</span>
                </a>
                <span class="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased">
                  /
                </span>
              </li>
              <li class="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-blue-500">
                <a
                  class="font-medium text-blue-gray-900 transition-colors hover:text-blue-500"
                  href="#"
                >
                  Divisi2
                </a>
              </li>
            </ol>
          </nav> 
        </div>          
   </div>

<div className="grid grid-cols-2 md:grid-cols-1">
  <div className="card flex ml-36 mr-36 20 mt-20 mb-20 border-2">
        <img
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwartapalaindonesia.com%2Fwp-content%2Fuploads%2F2021%2F04%2F1618299955594-1-960x640.jpg&f=1&nofb=1&ipt=04d5e7ab677519ce4f2584156fc7f0e94b612b0e07f0a8e7648b9a0b7471986c&ipo=images"
            alt="Gambar dari Google"
            className="rounded-lg w-96 "
          />
      <div className="judul ml-10">
        <h1 className="text-3xl capitalize text-gray-800 font-medium mb-4">
          Kegiatan Mahapala
        </h1>
        <p className="w-3/5 text-justify">
          Mahapala adalah UKM di UPN "Veteran" Jawa Timur yang fokus pada pengembangan diri, kepemimpinan, dan pengabdian masyarakat. Mereka terlibat dalam kegiatan sosial dan pengembangan diri mahasiswa.
        </p>
      </div>
   </div>

</div>


        <Footer/>
  </div>
    
  );
}


export default Blog;