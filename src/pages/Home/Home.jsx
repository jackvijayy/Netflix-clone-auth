
import Navbar from "../../components/Navbar/Navbar"
import "./Home.css"
import herobanner from '../../assets/hero_banner.jpg'
import herotitle from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'

import { Titlecard } from "../../components/Titlecards/Titlecard"
import Footer from "../../components/Footer/Footer"

export const Home = () => {
  return (
    <div className="home">
        <Navbar/>
        <div className="hero">
          <img src={herobanner} alt=""  className="banner-img"/>
          <div className="hero-caption">
            <img src={herotitle} alt="" className="caption-img" />
            <p>Discovering his ties and secret ancient order,a young man
              living in modern Isatbel embarks on quest to save the city from an immortal enemy
            </p>
            <div className="hero-btns">
            <button className="btn"><img src={play_icon} width={20}></img>Play</button>
            <button className="btn dark-btn">More Info</button>
            </div>

            <Titlecard/>
          </div>

        </div>
        <div className="more-cards">
          <Titlecard title={"BlockBuster Movies"} category={"top_rated"}/>
          <Titlecard title={"Only On Netflix"} category={"popular"}/>
          <Titlecard title={"Upcoming"} category={"upcoming"}/>
          <Titlecard title={"Top Picks For You"} category={"now_playing"}/>
        </div>
        <Footer/>
        


    </div>
  )
}
