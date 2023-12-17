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

          <div className="kontak-mahapala mx-20 mb-6">
            <h1 className="text-left text-xl font-semibold pt-10">Hubungi Kami</h1>
            <p className="py-3 text-gray-800 font-regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptate excepturi, animi beatae perferendis blanditiis maxime dolor unde quam hic natus, sunt necessitatibus earum eveniet eum architecto ratione et cupiditate?</p>
            
            <div className="sosmed-instagram flex">
              <img 
              src="https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Color-Logo.wine.svg" 
              alt="Instagram"
              className="h-[7rem]" />
              <div className="instagram py-4">
              <h3 className="font-bold">Instagram</h3>
                  <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus illo, reprehenderit voluptates doloribus iusto repellendus magnam blanditiis eveniet fugiat pariatur tempora, suscipit facere saepe cum eos, velit consequatur doloremque dolores.</span>
              </div>
            </div>

            <div className="sosmed-whatsapp flex">
              <img 
              src="data:image/jpeg;base64,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" 
              alt="WhatsApp"
              className="h-[8rem]" />
              <div className="whatsApp py-4">
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