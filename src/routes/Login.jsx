import { useEffect } from "react";
import { useState } from "react";


const login = () =>{
    return (
      <div >
      
      <div>
            
            <div className="bg-[#87C9E9] w-screen h-screen flex items-center justify-center ">
                <div className="bg-white w-[500px] h-[600px] flex flex-col items-center py-20 gap-6">
                    <div className="font-bold text-3xl text-center">
                        <b>Welcome to<br />Dashboard Admin</b>
                    </div>
                    <form className="flex flex-col gap-4" >
                        <div className="flex flex-col w-80">
                            <label htmlFor="Email">
                                Email 
                            </label>
                            <input className="outline outline-1 outline-gray-600 px-3 py-2 rounded-lg hover:outline-[#87C9E9] focus:outline-[#87C9E9] " type="email" id="Email" name="email"  />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="Password">
                                Password 
                            </label>
                            <input className="outline outline-1 outline-gray-600 px-3 py-2 rounded-lg hover:outline-[#87C9E9] focus:outline-[#87C9E9]" type="password" id="Password" name="password"  />
                        </div>
                        <div>
                            <button className="bg-blue-600 text-white px-3 py-2 rounded-lg w-80 mt-10" onClick={''}>Login</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>        
      
      </div>
      
    );
  }
  export default login;