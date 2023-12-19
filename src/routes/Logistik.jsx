import { useEffect } from "react";
import { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import lipu from "../images/review/1.png";
import { Link, useHref } from "react-router-dom"


const Dokumentasiadmin = () =>{
    const [showModal, setShowModal] = useState(false);
    const [Modallihat, Setmodallihat] = useState(false);
    const [dataid, setRowData] = useState();
    const [id, setId] = useState();
    const [barang, setBarang] = useState("");
    const [ubahbarang, setubahBarang] = useState("");
    const [logistik, setLogistik] = useState([]);
    const [jumlah, setJumlah] = useState("");
    const [ubahjumlah, setubahJumlah] = useState("");
    const [kondisi, setKondisi] = useState("");
    const [ubahkondisi, setubahKondisi] = useState("");
    const [hapus, setHapus] = useState("");
    const [loading, setLoading] = useState(false);
const setHapus1 = (e)=>{

  console.log(e)
  fetch(`http://localhost:5000/logistik/${e}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error(`Gagal menghapus item dengan e ${e}:`, error);
    });
    alert('data berhasil dihapus');
    window.location.reload();
}

const editLogistik = (e) => {
  e.preventDefault();
  // TODO: answer here
  fetch(`http://localhost:5000/logistik/${id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": 'http://localhost:3000',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Access-Control-Allow-Headers, X-Requested-With',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH'},
            body: JSON.stringify({ "nama": ubahbarang,"qty":ubahjumlah,"kondisi":ubahkondisi })
            
          })
          .then(response => response.json())
          alert('data berhasil ditambahkan');
          window.location.reload();
};

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
      const addlogistik = (e) => {
        // setShowModal(false);
        e.preventDefault();
        try{
          fetch('http://localhost:5000/logistik', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": 'http://localhost:3000',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Access-Control-Allow-Headers, X-Requested-With',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH'},
            body: JSON.stringify({ "nama": barang,"qty":jumlah,"kondisi":kondisi })
            
          })
        
          .then(response => response.json())
        
      
          alert('data berhasil ditambahkan');
          window.location.reload();
        }catch (error) {
          console.error('Gagal mengirim data:', error);
        }
      };
      // State untuk menyimpan data yang dipilih untuk dihapus
      
    return (
      
      <div >
        
      <div className="flex flex-col gap-3 bg-gray-300  lg:p-12 lg:py-6 overflow-y">
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
                        <th className="py-2 border-b w-64 text-left px-5">Barang</th>
                        <th className="py-2 border-b w-64 text-left px-5">Jumlah</th>
                        <th className="py-2 border-b w-64 text-left px-5">Kondisi</th>
                        <th className="py-2 border-b w-64 text-left px-5">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                          
                      {logistik.map((rowData) => (
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                          <td className="py-2 px-4 border-b">{rowData.nama}</td>
                          <td className="py-2 px-4 border-b">{rowData.qty}</td>
                          <td className="py-2 px-4 border-b">{rowData.kondisi}</td>
                          <td className="py-2 px-4 border-b">{
                            <div>
                            <button onClick={() =>  handleViewClick(rowData) } className={`hover:bg-green-200 hover:text-red-800 px-4 py-2 rounded-lg flex items-center "bg-green-200 text-green-800" : ""}`}> Edit</button>
                            {Modallihat ? (
                            <>
                            <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true ">
                              <div class="fixed inset-0 z-10 overflow-y-auto pt-32">
                                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
                                  <div class="relative transform  rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg min-h-20">
                                    <form onSubmit={editLogistik}>
                                      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <div class="sm:flex sm:items-start">
                                          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <div class="mt-2">
                                              <div className="flex justify-center items-center">
                                                    <div className="flex flex-col w-[26.5rem]">
                                                      <label className="mb-2">Nama barang</label>
                                                      <input
                                                        type="text"
                                                        name="barang"
                                                        placeholder={dataid.nama}
                                                        value={ubahbarang}
                                                        onChange={(e) => setubahBarang(e.target.value)}
                                                        className="border p-2 mb-2"
                                                      />

                                                      <label className="mb-2">Jumlah</label>
                                                      <input
                                                        type="number"
                                                        name="jumlah"
                                                        placeholder={dataid.qty}
                                                        value={ubahjumlah}
                                                        onChange={(e) => setubahJumlah(e.target.value)}
                                                        className="border p-2 mb-2"
                                                      />
                                                      <label className="mb-2">Kondisi</label>
                                                      <input 
                                                      type="text" 
                                                      name="kondisi" 
                                                      placeholder={dataid.kondisi}
                                                      value={ubahkondisi} 
                                                      onChange={(e) => setubahKondisi(e.target.value)}
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
                                        <button onClick={() => setId(dataid.id_logistik)}
                                        type="submit"
                                        class="inline-flex w-full justify-center rounded-md border 
                                        border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm 
                                        hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 
                                        sm:ml-3 sm:w-auto sm:text-sm">Submit</button>
                                        <button type="button" onClick={() => Setmodallihat(false)}
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
                            <button onClick={(e) => setHapus1(rowData.id_logistik)} className={`hover:bg-red-200 hover:text-red-800 px-4 py-2 rounded-lg flex items-center "bg-red-200 text-red-800" : ""}`}> Hapus</button>
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
                  <form onSubmit={addlogistik}>
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div class="sm:flex sm:items-start">
                        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <div class="mt-2">
                            <div className="flex justify-center items-center">
                                  <div className="flex flex-col w-[26.5rem]">
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