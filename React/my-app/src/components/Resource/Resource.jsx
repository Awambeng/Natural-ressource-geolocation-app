import React from 'react'
// import {MdLocationOn} from 'react-icons/md'
import {BsArrowRightShort} from 'react-icons/bs'
import Charbon from '../../assets/charbon.jpg'
import Timber from '../../assets/timber.jpg'
import CrudeOil from '../../assets/oilgas.jpg'
import Iron from '../../assets/iron.jpg'
import './resource.scss'


const Data = [
  {
    id:1,
    imgSrc:Timber,
    destTitle:'Timber',
    location:'Cameroon is endowed with more than 300 timber species of which around 80 are exploited for commercial purposes. Given that these species are highly prized on the world market it was important to secure same by putting in place a system to combat illegal acts.', 
    // Three regions namely, the East. the Littoral and the South have been identified for this operation.'
    price:'41% of timber exploited in cameroon'
  },

  {
    id:2,
    imgSrc:CrudeOil,
    destTitle:'Crude Oil',
    location:'In January 2023, production of crude oil for Cameroon was 57.4 thousand barrels per day. Production of crude oil of Cameroon fell gradually from 61.05 thousand barrels per day in February 2022 to 57.4 thousand barrels per day in January 2023.',
    price:'40% of crude oil exploited in cameroon'
  },

  {
    id:3,
    imgSrc:Iron,
    destTitle:'Mineral Resource',
    location:'(Business in Cameroon) - Three major Iron Ore deposits are being evaluated: Mbalam, Nkout, and Kribi. It is said that the potential of these three areas can make Cameroon a major producer of iron in the world. According to data published by the Australian company,',
    price:'35% of iron exploited in cameroon'
  },

  {
    id:4,
    imgSrc:Charbon,
    destTitle:'Coal',
    location:'Coal is a sedimentary deposit composed predominantly of carbon that is readily combustible. Coal is black or brownish-black, and has a composition that consists of more than 50 percent by weight and more than 70 percent by volume of carbonaceous material.',
    price:'27% of coal exploited in cameroon',
  }
]

function Resource() {
  return (
    <section className="offer container section" id='Resource'>
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">
            Some Natural Resources
          </h2>
          <p>
            Keep forward and discover some highly attractive resources in cameroon
          </p>
        </div>
        <div className="mainContent grid">
          {
            Data.map(({id, imgSrc, destTitle, location, price})=>{
              return( 
          <div className="singleOffer" key={id}>
            <div className="destImage">
              <img src={imgSrc} alt="{destTitle}" />
            </div>
          
            <div className="offerBody">
              <div className="price flex">
                <h4>{price}</h4>
              </div>
              <div className="amenities flex">
              <div className="singleAmenity flex">
                <small>{location}</small>
              </div>
              </div>
              <button className="btn flex" disabled>
                View Details
                <BsArrowRightShort className="icon" />
              </button>
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

export default Resource