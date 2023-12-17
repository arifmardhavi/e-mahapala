import { useEffect } from "react";
import { useState } from "react";


const login = () =>{
    return (
    <div >
        <div>
            <div className=" bg-[#39a0d4] h-screen flex items-center justify-center ">
                <div className="bg-white w-[600px] h-[410px] flex flex-col items-center gap-6 rounded-lg">
                    <div className="font-bold text-3xl text-center mt-6">
                        <b>Welcome to<br />Dashboard Admin</b>
                    </div>
                    <form className="flex flex-col gap-4" >
                        <div className="flex flex-col w-80">
                            <label className="mb-2 font-semibold" htmlFor="Email">
                                Email 
                            </label>
                            <input className="outline outline-1 outline-gray-600 px-3 py-2 rounded-lg hover:outline-[#87C9E9] focus:outline-[#87C9E9] " type="email" id="Email" name="email"  />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold" htmlFor="Password">
                                Password 
                            </label>
                            <input className="outline outline-1 outline-gray-600 px-3 py-2 rounded-lg hover:outline-[#87C9E9] focus:outline-[#87C9E9]" type="password" id="Password" name="password"  />
                        </div>
                        <div>
                            <button className="bg-blue-600 text-white px-3 py-2 rounded-lg w-80 mt-6 hover:bg-blue-500" onClick={''}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>        
    </div>
      
    );
  }
  export default login;