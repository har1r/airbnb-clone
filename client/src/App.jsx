import { Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import Layout from './components/Layout'
import RegisterPage from './pages/RegisterPage'
import axios from 'axios'
import { UserContextProvider } from './components/UserContext'

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true;

function App() {
  return (
    /* 
      <BrwoserRouter>
        <Routes>
          <Route/> atau <Route></Route>
        </Routes>
      </BrwoserRouter>

      - Ketiganya merupan pasangan yang harus ada untuk menavigasi halaman sesuai URL yang dimasukkan
        pada atribut path dan komponen halaman akan ditampilkan dengan memasukkan nama komponen
        ke atribut element
      
      - Atribut index merupakan default halaman yang akan tampil ketika user pertama kali membuka website
    */
   <UserContextProvider>
    <Routes>
      {/* 
        - Sintaks <Route></Route> tidak digunakan lagi dalam React Router v6, tetapi merupakan gaya yang digunakan 
          dalam versi React Router sebelumnya (v5 dan sebelumnya). Dalam versi lama, Anda dapat membuat 
          rute bersarang dengan <Route></Route> dan menempatkan rute lain di dalamnya <Route/>.
      */}
      <Route path='/' element={<Layout/>}>
        {/* 
          - Komponen Layout akan selalu muncul dari awal hingga akhir
          - Komponen dengan index akan muncul bersama Layout untuk pertama kali sebelum user menavigasi ke halaman lain
        */}
        <Route index element={<IndexPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
      </Route>
      
    </Routes>
   </UserContextProvider>
  )
}

export default App
