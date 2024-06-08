import { Home } from "./pages/Home/Home"
import { Routes,Route, useNavigate } from "react-router-dom"
import {Login} from './pages/Login/Login'
import { Player } from "./pages/Player/Player"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  const navigate=useNavigate();


  useEffect(()=>{
    onAuthStateChanged(auth,async (user)=>{
      if(user){
        console.log("Logged-In")
        navigate('/')
      }
      else{
        console.log("Logged Out")
        navigate('/Login')
      }
    })

  },[])
  return (
    <div>
      <ToastContainer theme="dark" />
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/player/:id" element={<Player/>}/>
     </Routes>
     
      

    </div>
  )
}

export default App