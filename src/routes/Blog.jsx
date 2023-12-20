import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BannerBlog from "../components/Banner/BannerBlog";

const apiKey = process.env.REACT_APP_API_HOST;
const Blog = () =>{

  const [dokumentasi, setDokumentasi] = useState([]);

  useEffect(() => {
      
    const url="http://localhost:5000/berita"
    fetch(url)
  .then((response) => response.json()) 
  .then((json) => setDokumentasi(json.data));
  
     }, []);
  return (
  <div >
      <Navbar/>
      <BannerBlog />
      <div className="container">
        <h1 className="text-left text-3xl font-semibold pl-10 pt-5">Kegiatan Terbaru</h1>
         
   </div>

<div className="grid grid-cols-2 md:grid-cols-1">

{dokumentasi.map((rowData) => (
  <div className="card flex ml-36 mr-36 20 mt-20 mb-20 border-2">
        <img
            src={rowData.gambar}
            alt={rowData.gambar}
            className="rounded-lg w-96 "
          />
      <div className="judul ml-10">
        <h1 className="text-3xl capitalize text-gray-800 font-medium mb-4">
          {rowData.judul}
        </h1>
        <p className="w-3/5 text-justify">
          {rowData.deskripsi}
        </p>
      </div>
   </div>
))}
</div>


        <Footer/>
  </div>
    
  );
}


export default Blog;