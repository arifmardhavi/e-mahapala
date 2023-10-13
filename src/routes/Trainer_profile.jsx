import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar/Navbar";

const PokemonList = () => {
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
    <div>
  <Navbar/>

<div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 min-h-screen flex items-center justify-center">
<div className="mr-20 ml-20 ">
  <h1 className="text-2xl font-semibold mb-4 pt-10">mungkin diisi para profil pt</h1>
  {loading ? (
    <p>Loading...</p>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10">
      {pokemonList.map((pokemon, index) => (
        <div
          key={index}
          className="bg-gray-200 p-4 rounded-lg shadow-lg">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
            alt={pokemon.name}
            className="mx-auto mb-2"
            width="96"
            height="96"
          />
          <h2 className="text-lg font-semibold">{pokemon.name}</h2>
          <p className="text-gray-600">isi lokasi</p>
          <p className="text-gray-600">isi skill ex:Core,kardio,diet</p>
        </div>
      ))}
    </div>
  )}
</div>
</div></div>
  );
};

export default PokemonList;
