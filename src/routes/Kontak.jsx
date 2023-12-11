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
    <div>
      <Navbar/>
      <BannerKontak />
      <div className="container">
        <h1 className="text-left text-xl font-semibold ml-20 pt-10">MAHAPALA UPN VETERAN JAWA TIMUR</h1>
          <div className="flex justify-center items-center p4 pt-8">
            <img
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwartapalaindonesia.com%2Fwp-content%2Fuploads%2F2021%2F04%2F1618299955594-1-960x640.jpg&f=1&nofb=1&ipt=04d5e7ab677519ce4f2584156fc7f0e94b612b0e07f0a8e7648b9a0b7471986c&ipo=images"
            alt="Gambar dari Google"
            className="h-80 rounded-lg ml-14 mr-4"/>
            <div className="visi-misi mx-4 text-justify">
              <h1 className="text-6xl capitalize text-gray-800 font-medium">
                Visi Misi Mahapala
              </h1>
              <p className="p-4 text-gray-800 font-regular">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, obcaecati reprehenderit quisquam perferendis officiis molestiae, maxime tempore asperiores blanditiis accusamus sed. Quae ullam unde quos minima, amet omnis pariatur autem.
              </p>
            </div>
          </div>

          <div className="kontak-mahapala ml-20">
            <h1 className="text-left text-xl font-semibold pt-10">Hubungi Kami</h1>
            <p className="py-3 text-gray-800 font-regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptate excepturi, animi beatae perferendis blanditiis maxime dolor unde quam hic natus, sunt necessitatibus earum eveniet eum architecto ratione et cupiditate?</p>
            
            <div className="sosmed flex">
              <img 
              src="https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Color-Logo.wine.svg" 
              alt=""
              className="h-24" />
              <div className="instagram">
              <h3 className="font-bold">Instagram</h3>
                  <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus illo, reprehenderit voluptates doloribus iusto repellendus magnam blanditiis eveniet fugiat pariatur tempora, suscipit facere saepe cum eos, velit consequatur doloremque dolores.</span>
              </div>
              
              <img src="" alt="" />
              <div className="whatsApp">
                <h3 className="font-bold">WhatsApp</h3>
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit animi ex ullam quia soluta amet assumenda id incidunt mollitia? Ut quaerat numquam similique error corporis eius ipsa facilis aliquid modi?</span>
        
              </div>
            </div>
              
          </div>
      </div>
        <Footer/>
    </div>
    
  );
}


export default Dokumentasi;