import React, { Component } from 'react';
import Me from './assets/me.jpg';
import Logo from './assets/logo.png';
import './components/Sidebar/sidebar.css';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiTwotoneHome } from 'react-icons/ai';
import { MdExplore } from 'react-icons/md';
import { GrResources } from 'react-icons/gr';
import { IoIosAddCircle } from 'react-icons/io';
import { AiFillSetting } from 'react-icons/ai';
import { BsShareFill } from 'react-icons/bs';
import { ImExit } from 'react-icons/im';
import { TbMathGreater } from 'react-icons/tb';
import Map from './components/Map/Map';
import { Navigate } from 'react-router-dom';

export default class Sidebar extends Component {
  state = {
    isOpen: true,
    showSubmenu: false,
    showSubmenu1: false,
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  toggleSubmenu = () => {
    this.setState({ showSubmenu: !this.state.showSubmenu });
  };

  toggleSubmenu1 = () => {
   this.setState({ showSubmenu1: !this.state.showSubmenu1 });
  };

  constructor(props) {
    super(props);
    const udata = localStorage.getItem('user');
    const odata = JSON.parse(udata);
    let loggedIN = true;
    if (udata == null) {
      loggedIN = false;
    }
    this.state = {
      user: odata.user,
      loggedIN,
    };
  }

  render() {
    const { isOpen, showSubmenu, showSubmenu1 } = this.state;
    if (this.state.loggedIN === false) {
      return <Navigate to="/sign-in" />;
    }

    return (
      <body className="con">
        <Map className="map" />
        <section style={{ width: isOpen ? '200px' : '90px' }} className="sidebar">
          <header>
            <div style={{ display: isOpen ? 'block' : 'none' }} className="cred">
              <div className="log">
                <img src={Me} alt="logo name" />
                <p className="nom1">{this.state.user.first_name} </p>
              </div>
            </div>
            <div className="logo-text">
              <span style={{ display: isOpen ? 'block' : 'none' }} className="logo">
                <img src={Logo} alt="logo name" />
              </span>
              <div style={{ marginLeft: isOpen ? '0px' : '0px' }} className="text header-text">
                <span className="name">Regena App</span>
              </div>
            </div>
            <AiOutlineMenuFold onClick={this.toggle} className="icon toggle" />
          </header>

          <div className="menu-bar">
            <div className="menu">
              <li className="search-box">
                <a href="#">
                  <AiOutlineSearch className="icon" />
                  <input type="search" placeholder="Search..." />
                </a>
              </li>
              <ul className="menu-links">
                <li className="nav-link">
                  <a href="/home">
                    <AiTwotoneHome className="icon" />
                    <span style={{ display: isOpen ? 'block' : 'none' }} className="text nav-text">
                      Home
                    </span>
                  </a>
                </li>

                <li className="nav-link">
                  <a href="#" onClick={this.toggleSubmenu}>
                    <MdExplore className="icon" />
                    <span style={{ display: isOpen ? 'block' : 'none' }} className="text nav-text">
                      Explore
                    </span>
                    <TbMathGreater style={{ display: isOpen ? 'block' : 'none' }} className="icon" id="great" />
                  </a>
                  {showSubmenu && (
                    <ul className="submenu">
                      <li className="nav-link">
                        <a href="/touristic" target="_blank">
                          <span style={{ display: isOpen ? 'block' : 'block' }} className="text nav-text">
                            Touristic Sites
                          </span>
                        </a>
                      </li>
                      <li className="nav-link">
                        <a href="#">
                          <span style={{ display: isOpen ? 'block' : 'block' }} className="text nav-text">
                            Current Events
                          </span>
                        </a>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="nav-link">
                  <a href="#">
                    <IoIosAddCircle className="icon" />
                    <span style={{ display: isOpen ? 'block' : 'none' }} className="text nav-text">
                      Add a Resource
                    </span>
                  </a>
                </li>

                <li className="nav-link">
                  <a href="#" onClick={this.toggleSubmenu1}>
                    <GrResources className="icon" />
                    <span style={{ display: isOpen ? 'block' : 'none' }} className="text nav-text">
                      Resource
                    </span>
                    <TbMathGreater style={{ display: isOpen ? 'block' : 'none' }} className="icon" id="great" />
                  </a>
                  {showSubmenu1 && (
                    <ul className="submenu">
                      <li className="nav-link">
                        <a href="#">
                          <span style={{ display: isOpen ? 'block' : 'block' }} className="text nav-text">
                            My Resource
                          </span>
                        </a>
                      </li>
                      <li className="nav-link">
                        <a href="#">
                          <span style={{ display: isOpen ? 'block' : 'block' }} className="text nav-text">
                            Available Resources
                          </span>
                        </a>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="nav-link">
                  <a href="#">
                    <AiFillSetting className="icon" />
                    <span style={{ display: isOpen ? 'block' : 'none' }} className="text nav-text">
                      Setting
                    </span>
                  </a>
                </li>

                <li className="nav-link">
                  <a href="/map">
                    <BsShareFill className="icon" />
                    <span style={{ display: isOpen ? 'block' : 'none' }} className="text nav-text">
                      Share Link
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="bottom-content">
              <li className="">
                <a href="/logout">
                  <ImExit className="icon" />
                  <span style={{ display: isOpen ? 'block' : 'none' }} className="text nav-text">
                    LogOut
                  </span>
                </a>
              </li>

              {/* <li className="mode">
              <div className="moon-sun">
                <BsFillMoonStarsFill className="icon moon" />
                <BsFillSunFill className="icon sun" />
              </div>
              <span style={{display: isOpen ? "block" : "none"}} className="mode-text text">Dark Mode</span>
              <div className="toggle-switch">
                <span className="switch"></span>
              </div>
            </li> */}
            </div>
          </div>
        </section>
      </body>
    );
  }
}