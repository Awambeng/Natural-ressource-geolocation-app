import React from 'react'
import './touristic.css'
import Blog1 from '../../assets/blog1.jpg'
import Blog2 from '../../assets/blog2.jpg'
import Blog3 from '../../assets/blog3.jpg'
import Blog4 from '../../assets/blog4.jpg'
import Blog5 from '../../assets/blog5.jpg'
import Footer from '../../components/Footer/Footer'

function Touristic() {
  return (
  <div>
  <div className="touristic">
  <section class="articles">
    
    <div className="article">
      <h1>Best Places to Visit in Cameroon</h1>
    </div>
    <div className="article">
        <p className="auteur1">
          Written by Jan Meeuwesen<br />
          on January 11, 2023</p>
        <p>
        Cameroon, often referred to as the heart of Africa, is a buzzing country with life and soul in abundance. The large and industrious cities here are complemented by vast areas of mountains, rainforest and beaches. The terrain here is as varied as the language with over 230 local languages complementing the 
        English and French speaking regions. The variety of wildlife at the large number of natural parks in the country provide nature lovers with plenty of chances to spot rare and exotic creatures. Gorillas are common in the south of the country in the Campo Ma’an National Park and elephants, hyenas and 
        giraffes make an appearance at other parks. Hiring and driving your own vehicle here is much easier than in other parts of Africa due to the good road conditions. The public transport is also better than in many other African countries meaning that you will never be stuck in one place in the country.
        Overall the mix of music, epic terrain and more culture than you can possibly hope to soak up, makes Cameroon a great place to visit in Africa and it is immediately clear that you are at the very epicenter of this fascinating continent.
        Lets explore the best places to visit in Cameroon:
        </p>
    </div> 
    
    <div class="article">
      <div class="left">
        <img src={Blog1} alt="" />
      </div>
      <div className="right">
        <h1>Dschang</h1>
        <p className="auteur">
        <br />This city, located in the West province of Cameroon, is growing quickly and the population has increased tenfold in the past 20 years. The main attractions in the city are the Museum of Civilization, which explores the history of Cameroon through its tribes and cultures, and the Center le Cinematique which, as it sounds is a museum centered around film.<br /><br />
        The latter of these two attractions seems to have been neglected in recent years but the Museum of Civilization is still a great learning experience for visitors to Cameroon.
        </p>
      </div>
    </div>

    <div class="article">
      <div class="left">
        <img src={Blog2} alt="" />
      </div>
    <div className="right">
        <h1>Korup National Park</h1>
        <p className="auteur">
        <br />Korup National Park is a vast area, comprising 126,000 hectares of evergreen forest. The park is well maintained with resident scientists and well-marked trails. Many species of birds can be found in the park including hornbills and the extremely rare red headed rockfowl.  Visitors to the park may even be lucky enough to see elephants or chimps although these are rare.<br /><br />
        The road access to the park can be tricky especially in the wet months when the road conditions deteriorate. It is worth noting that the Chimpanzee camp is a 7 mile hike from the Mana foot bridge, so come prepared.
        </p>
      </div>
    </div>

    <div class="article">
      <div class="left">
        <img src={Blog3} alt="" />
      </div>
      <div className="right">
        <h1>Yaounde</h1>
        <p className="auteur">
        <br />West Africa may not be known for beautiful cities but Cameroon’s capital Yaounde certainly is one. The city is immaculately planned to be spread over seven hills meaning that the numerous buildings in the city are separated by stretches of lush green and rising terrain.<br /><br />
          In addition to its layout, the city is clean and safe with plenty of points of interest. The 1970’s government buildings here will appeal to culture buffs and are unusual looking to say the least. Given the central location of Yaounde it is also a perfect city to include in any 
          tour of the country.
        </p>
      </div>
    </div>

    <div class="article">
      <div class="left">
        <img src={Blog4} alt="" />
      </div>
      <div className="right">
        <h1>Waza National Park</h1>
        <p className="auteur">
        <br />About 180 miles to the north of Maroua is Waza National Park. This park looks very different during the four seasons but is always a good place to witness some of the country’s most spectacular wildlife including elephants, giraffes and hyenas.<br /><br />
        Self-drive vehicles are allowed to explore the park but you will need a guide. This is not necarasilly a bad thing as you are much more likely to see the wildlife with a local guide that knows their stuff.
        </p>
      </div>
    </div>
    
    <div class="article">
      <div class="left">
        <img src={Blog5} alt="" />
      </div>
      <div className="right">
        <h1>Kribi</h1>
        <p className="auteur">
        <br />This is the home of paradise in Cameroon. The beaches here are stunning with white sand, blue sea and fresh fish served from the restaurants lining the seafront. There are plenty of hotels in the Kribi area and most are reasonably priced.<br /><br />
        If after lounging by the beach all day you are looking for something different to do, the Chutes de la Lobe waterfalls are just 8km due south from the town. The waterfalls cascade directly into the sea forming a truly memorable sight.
        </p>
      </div>
    </div>
  </section>
  </div>
  <section className="footer">
  <Footer />
  </section>
  </div>
  )
}

export default Touristic