import React from 'react'
import "./Footer.css"
import youtubeicon from "../../assets/youtube_icon.png"
import twittericon from "../../assets/twitter_icon.png"
import instagramicon from "../../assets/instagram_icon.png"
import facebookicon from "../../assets/facebook_icon.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-icons'>
        <img src={youtubeicon} alt="" />
        <img src={twittericon} alt="" />
        <img src={instagramicon} alt="" />
        <img src={facebookicon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Invester Realtion</li>
        <li>Jobs</li>
        <li>Terms of use</li>
        <li>Privacy</li>
        <li>Leagal Notice</li>
        <li>Cookie Information</li>
        <li>Corporate Information</li>
        <li>Contact us</li>
      </ul>
      <p className='copyright'>@1997-2024 netflix,Inc</p>
      <p className='vijay'>@Developed by Vijay</p>

    

    </div>
  )
}

export default Footer