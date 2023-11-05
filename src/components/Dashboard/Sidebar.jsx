import { Link, useHref } from "react-router-dom"



export default function Sidebar({active, className}) {

    const sidebarContent = [
        {
            text: "Dashboard",
            address: "/admin",
           
        },
        {
            text: "Anggota",
            address: "/editanggota",
            
        },
        {
            text: "Dokumentasi",
            address: "/dokumentasiadmin",
            
        },
        {
            text: "Perpustakaan",
            address: "/perpustakaanadmin",
           
        },
        {
            text: "Logistik",
            address: "/logistik",
        },
        {
            text: "Konten Artikel",
            address: "/admin",
        },
        


    ]

    return (
        <div className={`bg-white rounded-xl ${className}`}>
            <div className="flex flex-col justify-between px-3 py-2 w-48 gap-1 h-[500px] min-h-[400px]">    
                <div className="flex flex-col gap-1">
                {
                    sidebarContent.map((e, i) => {
                        return (
                            <Link key={i} to={e.address} className={`hover:bg-sky-200 hover:text-sky-800 px-4 py-2 rounded-lg flex items-center ${active === e.text ? "bg-sky-200 text-sky-800" : ""}`}>{e.icon} <span>{e.text}</span></Link>
                        )
                    })
                }
                </div>
                <div className="flex flex-col gap-1">
                    <Link to="/ChangePassword" className={`hover:bg-sky-200 hover:text-sky-800 px-4 py-2 rounded-lg flex items-center ${active === "Settings"? "bg-sky-200 text-sky-800" : ""}`}> Settings</Link>
                    <Link to="/logout" className={`hover:bg-sky-200 hover:text-sky-800 px-4 py-2 rounded-lg flex items-center ${active === "Logout" ? "bg-sky-200 text-sky-800" : ""}`}>Logout</Link>
                </div>
            </div>
            
                    
            
        </div>
    )
}