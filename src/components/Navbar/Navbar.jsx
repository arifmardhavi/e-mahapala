import { Link, useHref } from "react-router-dom";

export default function Navbar({ active }) {


    return (
        <div className="bg-gray-800 flex flex-wrap sticky">
        <div className="w-full">
        <nav className="relative flex flex-wrap items-center justify-center px-2 py-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-center">
        <div className="w-full relative flex justify-between lg:w-auto  lg:static lg:block lg:justify-start">
        
        </div>
        <ul className="flex flex-row list-none">
        <li className="nav-item">
                      <a href ="/"
          className="px-3 py-1 flex items-center text-lg uppercase font-bold leading-snug text-gray-100">
                        MAHAPALA
                      </a>
                    </li>
        <li className="nav-item">
                      <a href ="/"
          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-100 hover:opacity-75">
                        Home
                      </a>
                    </li>
        <li className="nav-item">
                      <a href
                        ={"/blog"}
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-100 hover:opacity-75">
                        Blog
                      </a>
                    </li>
        <li className="nav-item">
                      <a href
                        ={"/Dokumentasi"}
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-100 hover:opacity-75">
                        Dokumentasi
                      </a>
                    </li>
        <li className="nav-item">
                      <a href
                        ={"/kontak"}
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-100 hover:opacity-75">
                        Kontak
                      </a>
                    </li>
                    {/* <li className="nav-item bg-indigo-500 my-2 lg:my-0 rounded-md mr-4">
                          <a href
                            ={"/login"}
                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                          >
                            Login
                          </a>
                        </li> */}
                        
        </ul>
  
        
        </div>
        </nav>
        </div>
        </div>
    )
}