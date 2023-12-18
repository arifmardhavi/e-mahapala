/* eslint-disable no-undef */
import { useEffect } from "react";
import { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import lipu from "../images/review/1.png";


const EditAnggota = () =>{
    const [showModal, setShowModal] = useState(false);
    const [Modallihat, Setmodallihat] = useState(false);
    const [dataid, setRowData] = useState();
    const [npm, setNpm] = useState("");
    const [nama, setNama] = useState("");
    const [user, setUser] = useState([]);
    const [tanggal_lahir, setTanggal_lahir] = useState("");
    const [telepon, setTelepon] = useState("");
    const [alamat, setAlamat] = useState("");
    const [setatus, setSetatus] = useState("");
    const [level, setLevel] = useState("");
    
    const handleViewClick = (data) => {
      Setmodallihat(true); // Menampilkan modal
      setRowData(data); // Mengatur rowData dengan data yang sesua
    };
    useEffect(() => {
      
      // setLoading(false);
      const url="http://localhost:4000/users"
      fetch(url)
    .then((response) => response.json()) 
    .then((json) => setUser(json.data));
    
       }, []);
      const adduser = (e) => {
        // setShowModal(false);
        e.preventDefault();
        try{
          fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": 'http://localhost:3000',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Access-Control-Allow-Headers, X-Requested-With',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'},
            body: JSON.stringify({ "npm": npm,"nama": nama, "tanggal_lahir": tanggal_lahir, "telepon": telepon, "alamat": alamat, "status": setatus, "level": level })
          })
          .then(response => response.json())
        
        
          alert('data berhasil ditambahkan');
          window.location.reload();
        }catch (error) {
          console.error('Gagal mengirim data:', error);
        }
      };
    return (
      <div>
        <div className="flex flex-col gap-3 bg-gray-300  lg:p-12 lg:py-6">
          <Sidebar/>
          <div className="bg-white rounded-xl p-5 flex flex-col items-start flex-grow gap-1 ml-64">
            <span className="text-slate-600">Total Anggota</span>
            <b className="text-2xl">sekian{''}</b>                 
          </div>
          {showModal ? (
          <>
            <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal= "true">
              <div class="fixed inset-0 z-10 overflow-y-auto pt-32">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
                  <div class="relative transform  rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg min-h-20">
                    <form onSubmit={adduser}>
                      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <div class="mt-2">
                              <div className="flex justify-center items-center">
                                    <div className="flex flex-col w-[26.5rem]">
                                      <label className="mb-2">NIM</label>
                                      <input
                                        type="text"
                                        name="npm"
                                        value={npm}
                                        onChange={(e) => setNpm(e.target.value)}
                                        className="border p-2 mb-2"
                                      />

                                      <label className="mb-2">Nama</label>
                                      <input
                                        type="text"
                                        name="nama"
                                        value={nama}
                                        onChange={(e) => setNama(e.target.value)}
                                        className="border p-2 mb-2"
                                      />
                                      <label className="mb-2">Tanggal Lahir</label>
                                      <input 
                                      type="date" 
                                      name="tanggal_lahir" 
                                      value={tanggal_lahir} 
                                      onChange={(e) => setTanggal_lahir(e.target.value)} 
                                      className="border p-2 mb-2"
                                      />
                                      <label className="mb-2">Telepon</label>
                                      <input 
                                      type="text" 
                                      name="telepon" 
                                      value={telepon} 
                                      onChange={(e) => setTelepon(e.target.value)} 
                                      className="border p-2 mb-2"
                                      />
                                      <label className="mb-2">Alamat</label>
                                      <input 
                                      type="text" 
                                      name="alamat" 
                                      value={alamat} 
                                      onChange={(e) => setAlamat(e.target.value)} 
                                      className="border p-2 mb-2"
                                      />
                                      <label className="mb-2">Status</label>
                                      <input 
                                      type="number" 
                                      name="setatus" 
                                      value={setatus} 
                                      onChange={(e) => setSetatus(e.target.value)} 
                                      className="border p-2 mb-2"
                                      />
                                      <label className="mb-2">Level</label>
                                      <input 
                                      type="number" 
                                      name="level" 
                                      value={level} 
                                      onChange={(e) => setLevel(e.target.value)} 
                                      className="border p-2 mb-2"
                                      />

                                      {/* Tombol Submit */}
                                      
                                    </div>
                                    {/* <input className="submit-btn" type="submit" value="Submit" data-testid="submit" /> */}
                              </div>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button 
                        type="submit"
                        class="inline-flex w-full justify-center rounded-md border 
                        border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm 
                        hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 
                        sm:ml-3 sm:w-auto sm:text-sm">Submit</button>
                        <button type="button" onClick={() => setShowModal(false)}
                        class="inline-flex w-full justify-center rounded-md border 
                        border-transparent bg-gray-800 px-4 py-2 text-base font-medium text-white shadow-sm 
                        hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 
                        sm:ml-3 sm:w-auto sm:text-sm">close</button>

                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </>
          ) : null}
          <div className="flex gap-3 ml-64">
            <div className="rounded-xl flex justify-between items-center flex-grow mb-2">
                <div className="">
                <b className="text-2xl">Tabel Anggota</b>
                </div>
                <button
                className="px-3 bg-blue-600 text-white rounded-full py-2 hover:bg-blue-700"
                onClick={() => setShowModal(true)}>
                + Tambah Anggota
                </button>
            </div>
          </div>
            <div className="flex flex-row gap-3 ml-64">
              <div class="relative  shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" class="px-6 py-3 border-b">
                              NIM               
                          </th>
                          <th scope="col" class="px-6 py-3 border-b">
                              Nama
                          </th>
                          <th scope="col" class="px-6 py-3 border-b">
                              Tanggal Lahir
                          </th>
                          <th scope="col" class="px-6 py-3 border-b">
                              Telepon
                          </th>
                          <th scope="col" class="px-6 py-3 border-b">
                              Alamat
                          </th>
                          <th scope="col" class="px-6 py-3 border-b">
                              Status
                          </th>
                          <th scope="col" class="px-6 py-3 border-b">
                              Level
                          </th>
                          <th scope="col" class="px-6 py-3 border-b">
                              Aksi
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                    {user.map((rowData) => (
                      <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                          key={rowData.nim}>
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {rowData.npm}
                          </th>
                          <td class="px-6 py-4">
                          {rowData.nama}           
                          </td>
                          <td class="px-6 py-4">
                          {rowData.tanggal_lahir}   
                          </td>
                          <td class="px-6 py-4">
                          {rowData.telepon}          
                          </td>
                          <td class="px-6 py-4">
                          {rowData.alamat}          
                          </td>
                          <td class="px-6 py-4">
                          {rowData.status}          
                          </td>
                          <td class="px-6 py-4">
                          {rowData.level}          
                          </td>
                          <td class="px-6 py-4">
                            <div>
                          <a href="#view" class="hover:bg-sky-200 hover:text-sky-800 px-4 py-2 rounded-lg flex items-center">View</a>
                          <button onClick={() =>  handleViewClick(rowData) } className={`hover:bg-green-200 hover:text-red-800 px-4 py-2 rounded-lg flex items-center "bg-green-200 text-green-800" : ""}`}>Edit</button>
                          <a href="#delete" class="hover:bg-red-200 hover:text-red-800 px-4 py-2 rounded-lg flex items-center ">Delete</a>
                          

                                {Modallihat ? (
                      <>
                  
                    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                        <div class="fixed inset-0 z-10 overflow-y-auto pt-32">
                          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
                            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg min-h-20">
                              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div class="sm:flex sm:items-start">
                                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <div class="mt-2">
                                      <div className="flex justify-center items-center">
                                        {/* Sebelah Kiri: Bagian Foto */}
                                        <div className="mr-8">
                                          {/* Tambahkan logika untuk menampilkan foto */}
                                          <img
                                          src={lipu}
                                          alt="Foto Profil"
                                          className="w-32 h-32 object-cover "/>
                                          {/* Input untuk mengunggah foto */}
                                        </div>
                                        {/* Sebelah Kanan: Form NIM, Nama, Divisi, Status Jabatan */}
                                        <form onSubmit={addAnggota}>
                                          <div className="flex flex-col">
                                            <label className="mb-2">NPM</label>
                                              <input
                                                type="text"
                                                name="nim"
                                                value={npm}
                                                onChange={'handleChange'}
                                                className="border p-2 mb-2"
                                              />

                                            <label className="mb-2">Nama</label>
                                              <input
                                                type="text"
                                                name="nama"
                                                value={nama}
                                                onChange={'handleChange'}
                                                className="border p-2 mb-2"
                                              />

                                            <label className="mb-2">TTL</label>
                                              <input
                                                type="text"
                                                name="tanggal_lahir"
                                                value={tanggal_lahir}
                                                onChange={'handleChange'}
                                                className="border p-2 mb-2"
                                              />

                                            <label className="mb-2">Telepon</label>
                                              <input
                                                type="text"
                                                name="telepon"
                                                value={telepon}
                                                onChange={'handleChange'}
                                                className="border p-2 mb-2"
                                              />

                                            <label className="mb-2">Alamat</label>
                                              <input
                                                type="text"
                                                name="alamat"
                                                value={alamat}
                                                onChange={'handleChange'}
                                                className="border p-2 mb-2"
                                              />
                                              {/* Tombol Submit */}
                                          </div>
                                        </form>
                                      </div>
                                      <p class="text-sm text-gray-500">{''}</p> 
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button type="button" onClick={() => Setmodallihat(false)}
                                class="inline-flex w-full justify-center rounded-md border 
                                border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm 
                                hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 
                                sm:ml-3 sm:w-auto sm:text-sm">Submit</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </>
                ) : null}
                          
                          </div>

                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
        </div>
      </div>
      
    );
  }
  export default EditAnggota;