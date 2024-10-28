import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
    return(
        /*
            - Membuat template Layout yang diisi dengan komponen Header yang akan selalu muncul
            - <Outlet/> digunakan untuk menangkap navigasi-navigasi lain yang bersarang di komponen Layout yang dirender dibawah komponen Header
        */
        <div className="p-4 flex flex-col min-h-screen">
            <Header/>
            <Outlet/>
        </div>
    )
};