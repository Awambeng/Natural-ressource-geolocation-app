import React from 'react'
import './blog.scss'
import Water from '../../assets/water.jpg'
import Soil from '../../assets/soil.jpg'
import Air from '../../assets/air.jpg'
import Gold from '../../assets/gold.jpg'
// import { BsArrowRightShort } from 'react-icons/bs'



const Posts = [
  {
    id:1,
    PostImage:Water,
    title:'Water: The Precious Resource',
    desc:'Do you know why our planet earth is also known as the Blue Planet? It is because of the vast oceans that our planet is made up of! Water is present on earth in the form of lakes, rivers, seas, oceans and glaciers. It is also present in the atmosphere in the form of water vapor.'
  },

  {
    id:2,
    PostImage:Soil,
    title:'Soil : The Surface of the Land, The Skin of the Earth',
    desc:'Soil is made up of all the crucial elements which are necessary for survival such as zinc, iron, nitrogen compounds etc. The soil is also a home to billions of microorganisms. Soil is a mixture of essential components such as minerals (45%), water (25%), air (25%) and organic matter (billions of organisms) or humus (5%). Food, fiber and fuel all derives from soil itself!'
  },

  {
    id:3,
    PostImage:Air,
    title:'Air: The Supplier of Energy',
    desc:'Let us first understand the composition of air in the atmosphere. The air is made up of 78% of nitrogen, 21% of oxygen and the rest is made up of other gases such as methane, neon, argon, helium, hydrogen etc. Air is present all around you, you cannot see it but certainly feel it. Air is essential for life on earth. It is a renewable resource and a supplier of energy.'
  },

  {
    id:4,
    PostImage:Gold,
    title:'Gold: Malleable & Valuable.',
    desc:'Gold is a chemical element with the symbol Au and atomic number 79. This makes it one of the higher–atomic-number elements that occur naturally. It is a bright, slightly orange-yellow, dense, soft, malleable, and ductile metal in pure form. Chemically, gold is a transition metal and a group 11 element.'
  }
]
function Blog() {
  return (
    <section className="blog container section" id='Blog'>
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">
            Our blog
          </h2>
          <p>
            Learn more on some natural resources in our site.
          </p>
        </div>
        <div className="mainContainer grid">
        {
            Posts.map(({id, PostImage, title, desc})=>{
              return( 
          <div className="singlePost grid" key={id}> 
            <div className="imgDiv">
              <img src={PostImage} alt={title} />
            </div>

            <div className="postDetails">
              <h3>{title}</h3>
              <p>
              {desc}
              </p>
            </div>
            {/* <a href="#" className="flex">
              Read More
              <BsArrowRightShort className="icon" />
            </a> */}
          </div>
              )
           })
          }
        </div>
      </div>
    </section>
  )
}

export default Blog