import { useEffect } from "react";
import { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";


const dashboardAdmin = () =>{
    return (
      <div >
      <div className="flex flex-col gap-3 h-screen w-screen bg-lime-500 p-5 lg:p-12 lg:py-6 overflow-y-hidden">
                    <div className="flex flex-row gap-3">
                        <div className="bg-white rounded-xl p-5 w-48 h-48 flex flex-col items-center justify-center">
                            <b className="mt-5"></b>
                            <b>{''}</b>
                            <span className="text-slate-600">{''}</span>
                        </div>
                        <div className="bg-white rounded-xl p-5 flex flex-col items-start flex-grow gap-1">
                            <b className="text-2xl">Halo {''}!</b>
                            <span className="text-slate-600">Selamat datang kembali!</span>
                            
                        </div>
                        
                    </div>
                    <div className="flex flex-row gap-3">
                    <Sidebar/>
                    
                    </div>
                    </div>
                    
      
      </div>
      
    );
  }
  export default dashboardAdmin;