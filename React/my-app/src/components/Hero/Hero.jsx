import React from 'react'
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsDot} from 'react-icons/bs'
import './hero.scss'
import MountCameroon from '../../assets/mtCamer.jpg'
import Museum from '../../assets/museum.jpg'
import MefouPark from '../../assets/mefoupark.jpg'
import WaterfallLobe from '../../assets/chutelobe.jpg'


const Data = [
  {
    id:1,
    imgSrc:Museum,
    destTitle:'Museum',
    location:'Bandjoun, cameroon',
    grade:'Relax'
  },

  {
    id:2,
    imgSrc:MountCameroon,
    destTitle:'Mount Cameroon',
    location:'Southwest Province of Cameroon',
    grade:'Relax'
  },

  {
    id:3,
    imgSrc:MefouPark,
    destTitle:'Mefou National Park',
    location:'Yaounde, cameroon',
    grade:'Relax'
  },

  {
    id:4,
    imgSrc:WaterfallLobe,
    destTitle:'Chutes de la Lobé',
    location:'Kribi, Cameroon',
    grade:'Relax'
  }
]

function Hero() {
  return (
    <section className="popular section container" id='popular'>
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">
              Popular Touristic Sites
            </h2>
            <p>Get more knowledge on popular Touristics  
               Sites you can explore!!!
            </p>
          </div>
          <div className="iconsDiv flex">
            <BsArrowLeftShort className="icon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>

        <div className="mainContent grid">
          {
          Data.map(({id,imgSrc,destTitle,location,grade}) => {
            return(
              <div className="singleDestination" key={id}>
              <div className="destImage">
  
                <img src={imgSrc} alt="image title" />
  
                <div className="overlayInfo">
                  <h3>{destTitle}</h3>
                  <p>
                    {location}
                  </p>
  
                  <BsArrowRightShort className="icon" />
                </div>
              </div>
              <div className="destFooter">
                <div className="number">{id}</div>
                <div className="destText flex">
                  <h6>{location}</h6>
                  <span className="flex">
                    <span className="dot">
                      <BsDot className="icon" />
                    </span>
                  </span>
                </div>
              </div>
            </div>
                 )
                })
              }
        </div>
      </div>
    </section> 
  )
}

export default Hero