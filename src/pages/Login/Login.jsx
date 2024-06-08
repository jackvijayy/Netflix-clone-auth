import React, { useState } from 'react'
import "./Login.css"
import logo from '../../assets/logo.png'
import { login,signup } from '../../firebase'



export const Login = () => {

  const[signstate,setsignstate]=useState("Sign In");
  const[name,setname]=useState("");
  const[email,setemail]=useState("");
  const[password,setpassword]=useState("");


  const user_auth =async(event)=>{
    event.preventDefault();
    if(signstate=="sign In"){
      await login(email,password)
    }
    else{
      await signup(name,email,password)
    }

  }
  

  return (
    <div className='login'>
      <img src={logo} alt=""  className='login-logo'/>
      <div className='login-form'>
        <h1>{signstate}</h1>
        <form>
          {signstate==="Sign Up"? <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} placeholder='Your Name'/>:<></> }
          
          <input type="email" placeholder='Email' value={email} onChange={(e)=>{setemail(e.target.value)}} />
          <input type="password" placeholder='Password' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
          <button onClick={user_auth} type='submit'>{signstate}</button>
          <div className='sign-help'>
            <div className='remember'>
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>

            </div>
            <p>Need Help?</p>

          </div>




        </form>
        <div className="form-switch">
          {signstate==="Sign In" ? <p>New To Netflix ?<span onClick={()=>{setsignstate("Sign Up")}}>Sign Up Now</span></p>
          :<p>Already Have Account ?<span onClick={()=>{setsignstate("Sign In")}}>Sign In Now</span></p>}
        
        </div>

      </div>

     
    </div>
    
  )
}
