import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

/* 
  - Single Page Application (SPA) adalah jenis aplikasi web yang memuat SATU halaman
    HTML utama dan mengelola navigasi halaman dan konten dinamis secara langsung di
    dalam browser. Pada SPA, saat pengguna mengklik link atau berinteraksi dengan aplikasi,
    JavaScript akan memperbarui konten di halaman tersebut tanpa memuat ulang halaman secara keseluruhan.

  - Mudahnya, ketika user request untuk pertama kali maka akan direspon dengan mengload satu halaman HTML utama, dan ketika
    user request untuk yang kedua dan seterusnya maka halaman tidak akan direload atau memuat ulang semua elemen, melainkan
    hanya mengload halaman sesuai naviagasi atau routing yang dituju

  - Dengan kata lain hanya akan mendownload item yang dibutuhkan

  - Ketika user request untuk pertama kali, maka server akan merespon dengan HTML, ketika user request kedua kali dan seterusnya, 
    maka server akan merespon dengan JSON
  
  - <BrowserRouter> adalah komponen yang memungkinkan aplikasi untuk menavigasi antara "halaman-halaman"
    berbeda tanpa harus benar-benar memuat ulang seluruh halaman (Single Page Application).
    Dengan BrowserRouter, URL di browser berubah seolah-olah Anda berpindah halaman,
    tetapi aplikasi sebenarnya hanya menampilkan komponen yang berbeda sesuai rute yang telah diatur.
*/
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* 
      - <StrictMode> di React adalah komponen khusus yang membantu pengembang mendeteksi dan memperbaiki potensi masalah dalam kode.
        Mode ini tidak mempengaruhi tampilan atau fungsi aplikasi di lingkungan produksi, 
        tetapi di lingkungan pengembangan, StrictMode memberikan peringatan dan pemeriksaan
        tambahan untuk membantu memastikan aplikasi lebih aman, efisien, dan sesuai dengan standar terbaik di React.
    */}
    <StrictMode>
      <App />
    </StrictMode>,
  </BrowserRouter>
)
