import React, { useState } from 'react';
import { AiTwotoneHome } from 'react-icons/ai';
import { MdCategory } from 'react-icons/md';
import { GrResources } from 'react-icons/gr';
import { AiFillSetting } from 'react-icons/ai';
import { BsPeopleFill, BsShareFill } from 'react-icons/bs';
import { ImExit } from 'react-icons/im';
import {AiOutlineSearch} from 'react-icons/ai';
import { TbLocationFilled, TbMathGreater } from 'react-icons/tb';
import Me from '../../assets/me.jpg';
import Logo from '../../assets/logo.png';
import './admin.css';
import Map from '../Map/Map';

function AdminPage() {
  const [citizenOpen, setCitizenOpen] = useState(true);
  const [resourceOpen, setResourceOpen] = useState(true);

  const toggleCitizen = () => {
    setCitizenOpen(!citizenOpen);
  };

  const toggleResource = () => {
    setResourceOpen(!resourceOpen);
  };

  return (
    <div className="con">
       <Map className="map" />
      <section className="sidebar">
        <header>
          <div className="cred">
            <div className="log">
              <img src={Me} alt="logo name" />
              <p className="nom1">Admin</p>
            </div>
          </div>
          <div className="logo-text">
            <span className="logo">
              <img src={Logo} alt="logo name" />
            </span>
            <div className="text header-text">
              <span className="name">Regena App</span>
            </div>
          </div>
        </header>

        <div className="menu-bar">
          <li className="search-box">
            <a href="/search/resource">
              <AiOutlineSearch className="icon" />
              <input type="search" className="cherche" placeholder="Search..." />
            </a>
          </li>
          <ul className="menu-links">
            <li className="nav-link">
              <a href="/home">
                <AiTwotoneHome className="icon" />
                <span className="text nav-text">Home</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="/Category/List">
                <MdCategory className="icon" />
                <span className="text nav-text">Resource Categories</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="/all-zones">
                <TbLocationFilled className="icon" />
                <span className="text nav-text">Zones</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="#" onClick={toggleCitizen}>
                <BsPeopleFill className="icon" />
                <span className="text nav-text">Citizen</span>
                <TbMathGreater className="icon" id="great" />
              </a>
              <ul className={`submenu ${citizenOpen ? 'open' : ''}`}>
                <li className="nav-link">
                  <a href="/new-citizen">
                    <span className="text nav-text">Add citizen</span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="/all-citizens">
                    <span className="text nav-text">List citizen</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-link">
              <a href="#" onClick={toggleResource}>
                <GrResources className="icon" />
                <span className="text nav-text">Resource</span>
                <TbMathGreater className="icon" id="great" />
              </a>
              <ul className={`submenu ${resourceOpen ? 'open' : ''}`}>
                <li className="nav-link">
                  <a href="/resource/admin/new">
                    <span className="text nav-text">Add Resource</span>
                  </a>
                  {/* <Link to="/resource/admin/new">Add Resource</Link> */}
                </li>
                <li className="nav-link">
                  <a href="/all-resources/admin">
                    <span className="text nav-text">List Resource</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-link">
              <a href="#">
                <AiFillSetting className="icon" />
                <span className="text nav-text">Setting</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="#">
                <BsShareFill className="icon" />
                <span className="text nav-text">Share Link</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="bottom-content">
          <li className="">
            <a href="/logout">
              <ImExit className="icon" />
              <span className="text nav-text">LogOut</span>
            </a>
          </li>
        </div>
      </section>
    </div>
  );
}

export default AdminPage;


