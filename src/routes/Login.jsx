import { useEffect } from "react";
import { useState } from "react";
import { json } from "react-router-dom";

const Login = () =>{
    const [npm, setNpm] = useState("");
    const [tanggal_lahir, setTanggal_lahir] = useState("");
    const [user, setUser] = useState(false);
    // const navigate = useNavigate();

    const addlogin = (e) => {
        // setShowModal(false);
        e.preventDefault();
        try{
          fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": 'http://localhost:3000',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Access-Control-Allow-Headers, X-Requested-With',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'},
            body: JSON.stringify({ "npm": npm,"tanggal_lahir":tanggal_lahir})
            
          })
        
          .then(response => response.json())
          .then((data => {
            setUser(true);
          }));
      
          alert(user);
        //   navigate('/dashboard');
        }catch (error) {
            console.error('Gagal mengirim data:', error);
        }
      };
    return (
    <div >
        <div>
            <div className=" bg-[#39a0d4] h-screen flex items-center justify-center ">
                <div className="bg-white w-[600px] h-[410px] flex flex-col items-center gap-6 rounded-lg">
                    <div className="font-bold text-3xl text-center mt-6">
                        <b>Welcome to<br />Dashboard Admin</b>
                    </div>
                    <form onSubmit={addlogin} className="flex flex-col gap-4" >
                        <div className="flex flex-col w-80">
                            <label className="mb-2 font-semibold" htmlFor="Email">
                                NIM 
                            </label>
                            <input className="outline outline-1 outline-gray-600 px-3 py-2 rounded-lg hover:outline-[#87C9E9] focus:outline-[#87C9E9] " type="text" id="NIM" name="npm" value={npm} onChange={(e) => setNpm(e.target.value)} />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold" htmlFor="Password">
                                Tanggal Lahir 
                            </label>
                            <input className="outline outline-1 outline-gray-600 px-3 py-2 rounded-lg hover:outline-[#87C9E9] focus:outline-[#87C9E9]" type="date" id="Password" name="tanggal_lahir" value={tanggal_lahir} onChange={(e) => setTanggal_lahir(e.target.value)} />
                        </div>
                        <div>
                            <button className="bg-blue-600 text-white px-3 py-2 rounded-lg w-80 mt-6 hover:bg-blue-500" onClick={'handleLogin'}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>        
    </div>
      
    );
  }
  export default Login;