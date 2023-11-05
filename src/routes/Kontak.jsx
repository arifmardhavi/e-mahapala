import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BannerKontak from "../components/Banner/BannerKontak";

const apiKey = process.env.REACT_APP_API_HOST;
const Dokumentasi = () =>{
    const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = process.env.REACT_APP_API_HOST;

  useEffect(() => {
    
    fetch(apiKey)
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
        setLoading(false);
      })
      .catch((error) => {  
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);
  return (
    <div >
      <Navbar/>
    <BannerKontak />
      <div className="container">
        
        <h1 className="text-left text-3xl font-semibold pl-10 pt-10">Dokumentasi Kegiatan Terbaru</h1>
          
        
          

<div className="grid grid-cols-2 md:grid-cols-2 ">



        </div>

        </div>
        <Footer/>
      </div>
    
  );
}


export default Dokumentasi;