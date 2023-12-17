import { useEffect } from "react";
import { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import lipu from "../images/review/1.png";
import { Link, useHref } from "react-router-dom"


const Dokumentasiadmin = () =>{
    const [showModal, setShowModal] = useState(false);
    const [Modallihat, Setmodallihat] = useState(false);
    const [loading, setLoading] = useState(true);
    const [dataid, setRowData] = useState();
    const [barang, setBarang] = useState("");
    const [logistik, setLogistik] = useState([]);
    const [jumlah, setJumlah] = useState("");
    const [kondisi, setKondisi] = useState("");
    const [loading, setLoading] = useState(false);

    const handleViewClick = (data) => {
      Setmodallihat(true); // Menampilkan modal
      setRowData(data); // Mengatur rowData dengan data yang sesua
    };

    useEffect(() => {
      setLoading(false);
      const url="http://localhost:5000/logistik"
      fetch(url)
    .then((response) => response.json()) 
    .then((json) => setLogistik(json.data));
    
       }, []);
       console.log(logistik.data)
    const data = [
        { nama: 'Perahuu', jumlah: '4', kondisi: 'baik',id:2 },
        { nama: 'tenda', jumlah: '12', kondisi: 'sedang',id:20 },
        // ... tambahkan data lainnya sesuai kebutuhan
      ];
      const addlogistik = (e) => {
    
        e.preventDefault();
    
       fetch('http://localhost:4000/logistik', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Request-Method': 'GET, POST, DELETE, PUT, OPTIONS',
        },
        body: JSON.stringify({ "nama": barang,"qty":jumlah,"kondisi":kondisi })
        
    })
    
    .then(response => response.json())
    .then(()=>{
      if('secret'!="password"){
            'setError'("You are not authorized")
          }
          else {
            'navigate'("/photos")
          }
      
     }) 
    
    };
      // State untuk menyimpan data yang dipilih untuk dihapus
      
    return (
      
      <div >
        
      <div className="flex flex-col gap-3 h-screen w-screen bg-gray-300  lg:p-12 lg:py-6 overflow-y-hidden">
        <Sidebar/>
                <div className="bg-white rounded-xl p-5 flex flex-col items-start ml-64">
                        <b className="text-slate-600">Management Logistik Mahapala</b>
                        <b className="text-2xl">55{''}</b>      
                </div>
              <div className="flex flex-row gap-3 ml-64">
                       
                       
                <div className="  flex justify-between items-center flex-grow">
                    <div className="">
                    <b className="text-2xl">Tabel Logistik</b>
                    </div>
                    <button
                    className="px-3 bg-blue-600 text-white rounded-full py-2 hover:bg-blue-700"
                    onClick={() => setShowModal(true)}>
                    + Tambah Data Barang
                    </button>
                </div>
              </div>

                    <div className="flex flex-row gap-3">
                        
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-64">     
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="py-2 border-b w-64 text-left px-5">Nama</th>
            <th className="py-2 border-b w-64 text-left px-5">Jumlah</th>
            <th className="py-2 border-b w-64 text-left px-5">Kondisi</th>
            <th className="py-2 border-b w-64 text-left px-5">Aksi</th>
          </tr>
        </thead>
        <tbody>
               
          {logistik.map((rowData) => (
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <td className="py-2 px-4 border-b">{rowData.nama}</td>
              <td className="py-2 px-4 border-b">{rowData.jumlah}</td>
              <td className="py-2 px-4 border-b">{rowData.kondisi}</td>
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
          <label className="mb-2">Nama</label>
          <input
            type="text"
            name="nim"
            value={dataid.nama}
            onChange={'handleChange'}
            className="border p-2 mb-2"
          />

      <label className="mb-2">Jumlah</label>
          <input
            type="text"
            name="nim"
            value={dataid.jumlah}
            onChange={'handleChange'}
            className="border p-2 mb-2"
          />
      <label className="mb-2">Kondisi</label>
          <input
            type="text"
            name="nim"
            value={dataid.kondisi}
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

      </div>

      {/* Sebelah Kanan: Form NIM, Nama, Divisi, Status Jabatan */}
      <form onSubmit={addlogistik}>
        <div className="flex flex-col">
          <label className="mb-2">Nama barang</label>
          <input
            type="text"
            name="barang"
            value={barang}
            onChange={(e) => setBarang(e.target.value)}
            className="border p-2 mb-2"
          />

          <label className="mb-2">Jumlah</label>
          <input
            type="number"
            name="jumlah"
            value={jumlah}
            onChange={(e) => setJumlah(e.target.value)}
            className="border p-2 mb-2"
          />
          <label className="mb-2">Kondisi</label>
          <input
            type="text"
            name="kondisi"
            value={kondisi}
            onChange={(e) => setKondisi(e.target.value)}
            className="border p-2 mb-2"
          />

          {/* Tombol Submit */}
          
        </div>
        <input className="submit-btn" type="submit" value="Submit" data-testid="submit" />

      </form>
    </div>
                <p class="text-sm text-gray-500">{''}</p>
                
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button type="button" onClick={() => setShowModal(false)}
          class="inline-flex w-full justify-center rounded-md border 
          border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm 
          hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 
          sm:ml-3 sm:w-auto sm:text-sm">Submit</button>

        </div>
      </div>
    </div>
  </div>
  <div className="bg-white rounded-xl min-h-[500px] overflow-y-auto h-[500px]">
  <div className="container mx-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">NIM</th>
            <th className="py-2 px-4 border-b">Nama</th>
            <th className="py-2 px-4 border-b">Divisi</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {Logistik.map((logistikList) => (
            <tr key={logistikList.nim}>
              <td className="py-2 px-4 border-b">{logistikList.nim}</td>
              <td className="py-2 px-4 border-b">{logistikList.nama}</td>
              <td className="py-2 px-4 border-b">{logistikList.divisi}</td>
              <td className="py-2 px-4 border-b">{logistikList.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
</div>
</div>
        </>
      ) : null}
      
      
      </div>
      
    );
  }}
  export default Dokumentasiadmin;