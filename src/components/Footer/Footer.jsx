import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-gray-100 py-16">
      {/* <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16"> */}
      <div className="flex gap-20">
        <div className="footer-logo flex justify-start">
          <div className="ml-4">
            {/* <span className="text-2xl font-Poppins border-l-4 px-2 border-primary">
              Logo
              <span>
                <i className="fas fa-plane-departure text-blue-500 animate-pulse"></i>
              </span>
              
            </span> */}
            <h1 className="text-2xl font-Poppins border-primary border-l-4 px-2">
            Logo
            </h1>
            <p className="text-justify py-4">
            Mahapala adalah UKM di UPN "Veteran" Jawa Timur yang fokus pada pengembangan diri, kepemimpinan,
            dan pengabdian masyarakat. Mereka terlibat dalam kegiatan sosial dan pengembangan diri mahasiswa.
            </p>
          </div>
          
        </div>
        
        <div className="footer-kontak justify-end">
          <h1 className="text-2xl font-Poppins border-primary border-l-4 px-2">
            Kontak
          </h1>
          <p className="text-justify py-4 mr-10">
            Mahapala adalah UKM di UPN "Veteran" Jawa Timur yang fokus pada pengembangan diri, kepemimpinan,
            dan pengabdian masyarakat. Mereka terlibat dalam kegiatan sosial dan pengembangan diri mahasiswa.
            </p>
          <div className="py-4">
            <p>
              <i className="fas fa-phone-alt text-primary"></i> 123
            </p>
            <p className="py-2">
              <i className="far fa-envelope text-primary"></i>{" "}
              @gmail
            </p>
            <p>
              <i className="fas fa-map-marker-alt text-primary"></i> upnvj
            </p>
          </div>
        </div>

        
        </div>
    </div>
  );
};

export default Footer;
