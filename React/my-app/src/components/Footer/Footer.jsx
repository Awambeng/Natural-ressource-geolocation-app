import React from 'react'
// import {SiYourtraveldottv} from 'react-icons/si'
import {ImFacebook} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import Logo from '../../assets/regena.png'
import './footer.scss'

function Footer() {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <a href="#" className="logo flex">
              <h1 className="flex">
                {/* <SiYourtraveldottv className="icon" /> */}
                <img src={Logo} alt="Regena" className="icon"/>
                Regena
              </h1>
            </a>
          </div>

          <div className="socials flex">
            <ImFacebook className="icon" />
            <BsTwitter className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>
        
        <div className="footerLinks">
          <span className="linkTitle">
            Information
          </span>
          <li>
            <a href="#" className="Destination">Home</a>
          </li>
          <li>
            <a href="#popular" className="Destination">Explore Sites</a>
          </li>
          <li>
            <a href="#Resource" className="Destination">Resources</a>
          </li>
          <li>
            <a href="#About" className="Destination">About</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">
            Contact Us
          </span>
          <span className="phone">+237 695731090</span>
          <span className="email">awambengrodrick@gmail.com</span>
        </div>
      
    </div>
  </div>
  )
}

export default Footer