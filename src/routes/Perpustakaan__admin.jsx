import { useEffect } from "react";
import { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import lipu from "../images/review/1.png";
import { Link, useHref } from "react-router-dom"


const Dokumentasiadmin = () =>{
    const [showModal, setShowModal] = useState(false);
    const [Modallihat, Setmodallihat] = useState(false);
    const [dataid, setRowData] = useState();
    const [nama, setNama] = useState("");
    const [divisi, setDivisi] = useState("");
    const [kategori, setKategori] = useState("");
    const [berkas, setBerkas] = useState(null);
    const [Perpustakaan, setPerpustakaan] = useState([]);
    const handleViewClick = (data) => {
      Setmodallihat(true); // Menampilkan modal
      setRowData(data); // Mengatur rowData dengan data yang sesua
    };
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
      setBerkas(event.target.files[0]);
      console.log(berkas)
    };
    useEffect(() => {
      
      const url="http://localhost:5000/perpustakaan"
      fetch(url)
    .then((response) => response.json()) 
    .then((json) => setPerpustakaan(json.data));
    
       }, []);

      const addperpustakaan = (e) => {
        // setShowModal(false);
        e.preventDefault();
        try{
          fetch('http://localhost:5000/perpustakaan', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": 'http://localhost:3000',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Access-Control-Allow-Headers, X-Requested-With',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'},
            body: JSON.stringify({ "nama": nama,"divisi":divisi, "kategori":kategori,"berkas":berkas })
            
          })
        
          .then(response => response.json())
          console.log(berkas)
      
          alert('data berhasil ditambahkan');
          //window.location.reload();
        }catch (error) {
          console.error('Gagal mengirim data:', error);
        }
      };
      
    
    
      // State untuk menyimpan data yang dipilih untuk dihapus
      
    return (
      <div >
      <div className="flex flex-col gap-3 h-screen w-screen bg-gray-300  lg:p-12 lg:py-6 overflow-y-hidden">
      <Sidebar/>
      <div className="flex flex-row gap-10 ml-64">
                        
                        <div className="bg-white rounded-xl p-5 flex flex-col items-start flex-grow gap-1">
                        <span className="text-slate-600">Management Berkas Mahapala</span>
                        <b className="text-2xl">55{''}</b>      
                        </div>

                        <div className="bg-white rounded-xl p-5 flex flex-col items-start flex-grow gap-1">
                        <span className="text-slate-600">Jumlah Data Berkas</span>
                        <b className="text-2xl">34{''}</b>  
                        </div>
                                   
                    </div>  
            <div className="flex flex-row gap-3 ml-64">
                        
                        {/* <div className="bg-white rounded-xl p-5 flex flex-col items-start flex-grow gap-1">
                            <b className="text-2xl">Manajemen Arsip Perpustakaan </b>
                            <span className="text-slate-600"></span>
                            <button
                    className="px-3 bg-blue-600 text-white rounded-xl py-2 self-end hover:bg-blue-700"
                    onClick={() => setShowModal(true)}>Tambah Arsip</button>
                  
                    
                  
                        </div> */}
              <div className="rounded-xl flex justify-between items-center flex-grow">
                    <div className="">
                    <b className="text-2xl">Tabel Managament Perpustakaan</b>
                    </div>
                    <button
                    className="px-3 bg-blue-600 text-white rounded-full py-2 hover:bg-blue-700"
                    onClick={() => setShowModal(true)}>
                    + Tambah data
                    </button>
                </div>
                
                        
            </div>
                    <div className="flex flex-row gap-3">
                        
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-64">     
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="py-2 border-b w-64 text-left px-5">Nama</th>
            <th className="py-2 border-b w-64 text-left px-5">Divisi</th>
            <th className="py-2 border-b w-64 text-left px-5">Kategori</th>
            <th className="py-2 border-b w-64 text-left px-5">berkas</th>
            <th className="py-2 border-b w-64 text-left px-5">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {Perpustakaan.map((rowData) => (
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <td className="py-2 px-4 border-b">{rowData.nama}</td>
              <td className="py-2 px-4 border-b">{rowData.divisi}</td>
              <td className="py-2 px-4 border-b">{rowData.kategori}</td>
              <td className="py-2 px-4 border-b">
                {rowData.berkas}
                {/* <iframe src= {`../../../mahapala-backend/uploads/${rowData.berkas}`} title={`{rowData.berkas}`}></iframe> */}
              </td>
              <td className="py-2 px-4 border-b">{
                <div>
                <Link to="/" className={`hover:bg-sky-200 hover:text-sky-800 px-4 py-2 rounded-lg flex items-center "bg-sky-200 text-sky-800" : ""}`}> Lihat</Link>
                <button onClick={() =>  handleViewClick(rowData) } className={`hover:bg-green-200 hover:text-red-800 px-4 py-2 rounded-lg flex items-center "bg-green-200 text-green-800" : ""}`}> Edit</button>
                {Modallihat ? (
        <>
        
          <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true ">
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
  className="w-32 h-32 object-cover "
/>

        {/* Input untuk mengunggah foto */}
        
      </div>

      {/* Sebelah Kanan: Form NIM, Nama, Divisi, Status Jabatan */}
      <form onSubmit={'handleSubmit'}>
        <div className="flex flex-col">
          <label className="mb-2">Judul</label>
          <input
            type="text"
            name="nim"
            value={dataid.nama}
            onChange={'handleChange'}
            className="border p-2 mb-2"
          />

      <label className="mb-2">Divisi</label>
          <input
            type="text"
            name="nim"
            value={dataid.divisi}
            onChange={'handleChange'}
            className="border p-2 mb-2"
          />
      <label className="mb-2">Kategori</label>
          <input
            type="text"
            name="nim"
            value={dataid.kategori}
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
                <Link to="/" className={`hover:bg-red-200 hover:text-red-800 px-4 py-2 rounded-lg flex items-center "bg-red-200 text-red-800" : ""}`}> Hapus</Link>
                </div>

              }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </div>
                    </div>
                    
                    {showModal ? (
                      <>
                        <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true ">
                          
                          <div class="fixed inset-0 z-10 overflow-y-auto pt-32">
                            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
                              <div class="relative transform  rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg min-h-20">
                                <form onSubmit={addperpustakaan}>
                                  <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div class="sm:flex sm:items-start">
                                      <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <div class="mt-2">
                                          <div className="flex justify-center items-center">
                                                <div className="flex flex-col w-[26.5rem]">
                                                  <label className="mb-2">Nama Perpustakaan</label>
                                                  <input
                                                    type="text"
                                                    name="nama"
                                                    value={nama}
                                                    onChange={(e) => setNama(e.target.value)}
                                                    className="border p-2 mb-2"
                                                  />

                                                  <label className="mb-2">Divisi</label>
                                                  <input
                                                    type="number"
                                                    name="divisi"
                                                    value={divisi}
                                                    onChange={(e) => setDivisi(e.target.value)}
                                                    className="border p-2 mb-2"
                                                  />
                                                  <label className="mb-2">Kondisi</label>
                                                  <input 
                                                  type="number" 
                                                  name="kategori" 
                                                  value={kategori} 
                                                  onChange={(e) => setKategori(e.target.value)} 
                                                  className="border p-2 mb-2"
                                                  />

                                                  <input 
                                                  type="text" 
                                                  name="berkas" 
                                                  value={berkas} 
                                                  onChange={(e) => setBerkas(e.target.value)} 
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
      
      
      </div>
      
    );
  }
  export default Dokumentasiadmin;