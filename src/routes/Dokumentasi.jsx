import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BannerDokumentasi from "../components/Banner/BannerDokumentasi";

const apiKey = `http://localhost:4000/dokumentasi`;
const Dokumentasi = () =>{
  const [dokumentasi, setDokumentasi] = useState([]);

    const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = `http://localhost:4000/dokumentasi`;

  useEffect(() => {
      
    setLoading(false);
    const url="http://localhost:4000/dokumentasi"
    fetch(url)
  .then((response) => response.json()) 
  .then((json) => setDokumentasi(json.data));
  
     }, []);
  return (
    <div >
      <Navbar/>
    <BannerDokumentasi />
      <div className="">
        
        <h1 className="text-left text-3xl font-semibold pl-10 pt-10">Dokumentasi Kegiatan Terbaru</h1>
          
        {loading ? (
    <p>Loading...</p>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-4 mt-20 gap-4 mb-20 border">
      {dokumentasi.map((rowData) => (
  <div
    key={rowData}
    className="bg-gray-200 p-4 rounded-lg shadow-lg mx-12"
  >
    <img
      src={rowData.berkas}
      alt={rowData.nama}
      className="mx-auto max-w-1xl h-40  mb-2"
      
    />
  </div>
      ))}
    </div>
  )}
          

<div className="grid grid-cols-2 md:grid-cols-2 ">



        </div>

        </div>
        <Footer/>
      </div>
    
  );
}


export default Dokumentasi;