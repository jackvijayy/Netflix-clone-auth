import React, { useEffect, useRef } from 'react'
import "./Navbar.css"
import logo from '../../assets/logo.png'
import search from '../../assets/search_icon.svg'
import bellicon from '../../assets/bell_icon.svg'
import profileimg from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'

const Navbar = () => {
    const navref=useRef()

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY >= 80){
                navref.current.classList.add('nav-scroll')
                
            }
            else{
                navref.current.classList.remove('nav-scroll')

            }
        })

    },[])




  return (
    <div ref={navref} className='navbar'>
        <div className='Navbar-left'>
            <img src={logo} alt="" />
            <ul>
                <li>Home</li>
                <li>Tv show</li>
                <li> Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse By Language</li>
            </ul>

        </div>
        <div className='navbar-right'>
            <img src={search} alt="" className='icon' />
            <p>children</p>
            <img src={bellicon} alt="" className='icon' />
            <div className="navbar-profile">
                <img src={profileimg} alt="" className='icon' />
                <img src={caret_icon} alt="" />
                <div className="dropdown">
                   <p onClick={()=>{logout()}}>SignOut</p>
                </div>
            </div>


        </div>
        

    </div>
  )
}

export default Navbar