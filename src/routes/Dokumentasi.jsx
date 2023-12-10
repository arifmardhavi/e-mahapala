import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BannerDokumentasi from "../components/Banner/BannerDokumentasi";

// const apiKey = process.env.REACT_APP_API_HOST;
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
    <BannerDokumentasi />
    <div className="container">
      <h1 className="text-left text-3xl font-semibold pl-10 pt-10">Dokumentasi Kegiatan Terbaru</h1>
        {loading ? (
        <p>Loading...</p>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-4 mr-36 ml-36 gap-4 pt-20 pb-36">
        {pokemonList.slice(0, 8).map((pokemon, index) => (
        <div key={index}
          className="bg-gray-200 p-4 rounded-lg shadow-lg">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
            alt={pokemon.name}
            className="mx-auto max-w-1xl h-40  mb-2"/>
        </div>
        ))}
      </div>
    )}<div className="grid grid-cols-2 md:grid-cols-2 ">
      
      </div>

          </div>
          <Footer/>
  </div>
    
  );
}


export default Dokumentasi;