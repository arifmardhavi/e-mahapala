import { useEffect } from "react";
import { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import lipu from "../images/review/1.png";
import { Link, useHref } from "react-router-dom"


const Dashboardadmin = () =>{
    const [showModal, setShowModal] = useState(false);
    const button = document.getElementById("myButton");
    const [Modallihat, Setmodallihat] = useState(false);
    const [dataid, setRowData] = useState();
    const handleViewClick = (data) => {
      Setmodallihat(true); // Menampilkan modal
      setRowData(data); // Mengatur rowData dengan data yang sesua
    };
    const data = [
        { judul: 'artikel abcd', gambar: '33.jpg', konten: 'IT',id: 1 },
        { judul: 'artikel 123', gambar: 'ff.jpg', konten: 'Marketing', id: 2 },
      //  { judul: 'artikel asd', gambar: 'adw.jpg', konten: 'Fishing', id: 3 },
        // ... tambahkan data lainnya sesuai kebutuhan
      ];

      //button.addEventListener("click", function() {
      //    console.log(`ID: ${data.id}`);
      //});
      // State untuk menyimpan data yang dipilih untuk dihapus
      
    return (
      <div >
        
      <div className="flex flex-col gap-3 h-screen w-screen bg-gray-300   lg:p-12 lg:py-6 overflow-y-hidden">
      <Sidebar/>
            <div className="flex flex-row gap-10 ml-64">
                        
                        <div className="bg-white rounded-xl p-5 flex flex-col items-start flex-grow gap-1">
                        <span className="text-slate-600">Data Anggota</span>
                        <b className="text-2xl">55{''}</b>
                              
                        </div>
                        <div className="bg-white rounded-xl p-5 flex flex-col items-start flex-grow gap-1">
                        <span className="text-slate-600">Data Anggota</span>
                        <b className="text-2xl">34{''}</b>
                              
                        </div>
                        <div className="bg-white rounded-xl p-5 flex flex-col items-start flex-grow gap-1">
                        <span className="text-slate-600">Data Anggota</span>
                        <b className="text-2xl">13{''}</b>
                              
                        </div>
                        <div className="bg-white rounded-xl p-5 flex flex-col items-start flex-grow gap-1">
                        <span className="text-slate-600">Data Anggota</span>
                        <b className="text-2xl">13{''}</b>                 
                        </div>             
                    </div>     

                {/* text konten coba */}
                <div className="flex flex-row justify-between items-center gap-3 ml-64">
                    <div className="rounded-xl p-5 flex flex-col items-start flex-grow gap-1">
                    <b className="text-2xl">Tabel Konten</b>
                    </div>
                    <button
                    className="px-3 bg-blue-600 text-white rounded-full py-2 self-center hover:bg-blue-700"
                    onClick={() => setShowModal(true)}>
                    + Tambah Konten
                    </button>
                </div>
                    

               {/* Table Konten Coba      */}
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg ml-64">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                Judul               
                </th>
                <th scope="col" class="px-6 py-3">
                    Gambar
                </th>
                <th scope="col" class="px-6 py-3">
                    Konten
                </th>
                <th scope="col" class="px-6 py-3">
                    Aksi
                </th>
            </tr>
        </thead>
        <tbody class=" dark:bg-gray-900 dark:border-gray-700">
          {data.map((rowData) => (
            <tr key={rowData.id}>
              <td className="py-2 px-4 border-b">{rowData.judul}</td>
              <td className="py-2 px-4 border-b">{rowData.gambar}</td>
              <td className="py-2 px-4 border-b">{rowData.konten}</td>
              <td className="py-2 px-4 border-b">{
                <div>
                <button onClick={() =>  '' } className={`hover:bg-sky-200 hover:text-sky-800 px-4 py-2 rounded-lg flex items-center "bg-sky-200 text-sky-800" : ""}`}> Lihat {rowData.id}</button>
                <button onClick={() =>  handleViewClick(rowData) } className={`hover:bg-green-200 hover:text-red-800 px-4 py-2 rounded-lg flex items-center "bg-green-200 text-green-800" : ""}`}> Edit</button>
                {Modallihat ? (
        <>
        
          <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true ">
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div class="fixed inset-0 z-10 overflow-y-auto pt-32">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
      <div class="relative transform overflow-hidden rounded-lg bg-red text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg min-h-20">
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
            value={dataid.judul}
            onChange={'handleChange'}
            className="border p-2 mb-2"
          />

      <label className="mb-2">Gambar</label>
          <input
            type="file"
            name="nim"
            value={''}
            onChange={'handleChange'}
            className="border p-2 mb-2"
          />
      <label className="mb-2">Konten</label>
          <input
            type="text"
            name="nim"
            value={dataid.konten}
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



                    
                    {/* Untuk Data Dokumentasi */}
                    <div className="flex flex-col gap-3 h-screen w-screen bg-gray-300   lg:p-12 lg:py-6 overflow-y-hidden">
                    
                    {/* text Dokumentasi */}
                    <div className="flex flex-row justify-between items-center gap-3 ml-64">
                    <div className="rounded-xl p-5 flex flex-col items-start flex-grow gap-1">
                    <b className="text-2xl">Tabel Dokumentasi</b>
                    <span className="text-slate-600"></span>
                    </div>
                    <button
                    className="px-3 bg-blue-600 text-white rounded-full py-2 self-center hover:bg-blue-700"
                    onClick={() => setShowModal(true)}>
                    + Tambah Dokumentasi
                    </button>
                    </div>
                    

               {/* Table Dokumentasi      */}
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg ml-64">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                Gambar               
                </th>
                <th scope="col" class="px-6 py-3">
                    Nama
                </th>
                <th scope="col" class="px-6 py-3">
                    Kategori
                </th>
                <th scope="col" class="px-6 py-3">
                    Divisi
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Tanggal
                </th>
                <th scope="col" class="px-6 py-3">
                    Aksi
                </th>
            </tr>
        </thead>
        <tbody>
           
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                dummy
                </th>
                <td class="px-6 py-4">
                Dummy             
                </td>
                <td class="px-6 py-4">
                Dummy             
                </td>
                <td class="px-6 py-4">
                    Dummy       
                </td>
                <td class="px-6 py-4">
                dummy               
                </td>
                <td class="px-6 py-4">
                    Dummy                
                </td>
                <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                <a href="#" class="font-medium text-green-600 dark:text-green-500 hover:underline ml-3">Edit</a>
                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline ml-3">Delete</a>
                </td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                dummy               
                </th>
                <td class="px-6 py-4">
                Dummy             
                </td>
                <td class="px-6 py-4">
                Dummy             
                </td>
                <td class="px-6 py-4">
                    Dummy       
                </td>
                <td class="px-6 py-4">
                dummy               
                </td>
                <td class="px-6 py-4">
                    Dummy                
                </td>
                <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                <a href="#" class="font-medium text-green-600 dark:text-green-500 hover:underline ml-3">Edit</a>
                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline ml-3">Delete</a>
                </td>
            </tr><tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                dummy  
                </th>
                <td class="px-6 py-4">
                Dummy             
                </td>
                <td class="px-6 py-4">
                Dummy             
                </td>
                <td class="px-6 py-4">
                    Dummy       
                </td>
                <td class="px-6 py-4">
                dummy               
                </td>
                <td class="px-6 py-4">
                    Dummy                
                </td>
                <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                <a href="#" class="font-medium text-green-600 dark:text-green-500 hover:underline ml-3">Edit</a>
                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline ml-3">Delete</a>
                </td>
            </tr>
        </tbody>
                </table>
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
          <label className="mb-2">NIM</label>
          <input
            type="text"
            name="nim"
            value={'formValues.nim'}
            onChange={'handleChange'}
            className="border p-2 mb-2"
          />

          <label className="mb-2">Nama</label>
          <input
            type="text"
            name="nama"
            value={'formValues.nama'}
            onChange={'handleChange'}
            className="border p-2 mb-2"
          />

          <label className="mb-2">Divisi</label>
          <input
            type="text"
            name="divisi"
            value={'formValues.divisi'}
            onChange={'handleChange'}
            className="border p-2 mb-2"
          />

          <label className="mb-2">Status Jabatan</label>
          <input
            type="text"
            name="statusJabatan"
            value={'formValues.statusJabatan'}
            onChange={'handleChange'}
            className="border p-2 mb-4"
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
          {data.map((rowData) => (
            <tr key={rowData.nim}>
              <td className="py-2 px-4 border-b">{rowData.nim}</td>
              <td className="py-2 px-4 border-b">{rowData.nama}</td>
              <td className="py-2 px-4 border-b">{rowData.divisi}</td>
              <td className="py-2 px-4 border-b">{rowData.status}</td>
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
  }
  export default Dashboardadmin;