import React from 'react'
import './about.scss'
import Walpaper from '../../assets/walpaper.jpg'
import Awambeng from '../../assets/user.jpg'
import Manfouo from '../../assets/me.jpg'
import Kappe from '../../assets/priscille.jpeg'
// import Video from '../../assets/Video.mp4'
import NatRes from '../../assets/types-of-natural-resources---teachoo.jpg'

function About() {
  return (
    <section className="about section" id='About'>
      <div className="secContainer">
        <div className="title">
          Our Team!!!
        </div>

        <div className="mainContent container grid">
          <div className="singleItem">
            <img src={Kappe} alt="Image Name" style={{width: '300px', height: '300px', borderRadius: '50%', background: 'white', marginRight:  'auto', marginLeft: 'auto'}} />
            <h2>Kappe Priscille</h2>
            <p>
              Web Developper 
            </p>
          </div>

          <div className="singleItem">
            <img src={Manfouo} alt="Image Name" style={{width: '300px', height: '300px', borderRadius: '50%', background: 'white', marginRight:  'auto', marginLeft: 'auto'}} />
            <h2>Manfouo Patrick</h2>
            <p>
              Web Developper  
            </p>
          </div>

          <div className="singleItem">
            <img src={Awambeng} alt="Image Name" style={{width: '300px', height: '300px', borderRadius: '50%', background: 'white', marginRight:  'auto', marginLeft: 'auto'}} />
            <h2>Awambeng Rodrick</h2>
            <p>
              Web Developper & Network Engineer
            </p>
          </div>
        </div>

        <div className="videoCard container">
          <div className="cardContent grid">
            <div className="cardText">
              <h2>Natural Resources.</h2>
              <p>
                Natural resources are materials from the Earth that are
                used to support life and meet people’s needs.
                Any natural substance that humans use can be considered
                a natural resource. Oil, coal, natural gas, metals, stone
                and sand are natural resources. Other natural resources
                are air, sunlight, soil and water. Animals, birds, fish and
                plants are natural resources as well. 
              </p>
            </div>

            <div className="cardVideo">
              {/* <video src={Video} autoPlay loop muted type="video/mp4"></video> */}
              <img src={NatRes} alt="Types of natural resources" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About