import React from 'react'
import './home.scss' 

export default function Home() {
  return (
    <section className="home" id='Home'>
      <div className="setContainer container">
        <div className="homeText">
          <h1 className="title">
            Localise your resources easily with Regena.
          </h1>
          <p className="subTitle">
            Explore new places and make yourself confortable!
          </p>

          <button className="btn">
            <a href="/sign-up" style={{color: 'white'}}>Explore Now</a>
          </button>
        </div>

        <div className="homeCard grid"></div>
        <div className="locationDiv"></div>
      </div>
    </section>
  )
}
