import React, {useState} from 'react'
import './navbar.scss'
import Logo from '../../assets/regena.png'
import {AiFillCloseCircle} from 'react-icons/ai'
import {AiOutlineMenu} from 'react-icons/ai'
// import {SiYourtraveldottv} from 'react-icons/si'


export default function Navbar() {
  const [active, setActive] = useState('navBar');
  const showNav =()=>{
    setActive('navBar activeNavbar')
  }

  const removeNav =()=>{
    setActive('navBar')
  }

  const [transparent, setTransparent] = useState('header')
  const addBg = () => {
    if(window.scrollY >= 10){
      setTransparent('header activeHeader')
    }else{
      setTransparent('header')
    }
  }
  window.addEventListener('scroll', addBg)

  return (
    <section className="navBarSection">
      <div className={transparent}>
        <div className="logoDiv">
          <a href="#" className='logo'>
          <div className="icon">
            <img src={Logo} alt="Regena" style={{background: 'white'}}/>
            <h1>REGENA</h1>
            {/* <h1 className="flex">
              <SiYourtraveldottv className="icon" />
              Regena
            </h1> */}
          </div>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">

            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>

            <li className="navItem">
              <a href="#popular" className="navLink">Explore Sites</a>
            </li>

            <li className="navItem">
              <a href="#Resource" className="navLink">Resources</a>
            </li>

            <li className="navItem">
              <a href="#About" className="navLink">About</a>
            </li>

            <li className="navItem">
              <a href="#Blog" className="navLink">Blog</a>
            </li>

            <div className="headerBtns flex">
              <button className="btn loginBtn">
                <a href="/login">Login</a>
              </button>
              <button className="btn sigupBtn">
                <a href="/signup">Sign Up</a>
              </button>
            </div>
          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon"/>
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <AiOutlineMenu className="icon"/>
        </div>
      </div>
    </section>
  )
}
