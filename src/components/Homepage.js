import React from 'react'
import {Link} from 'react-router-dom'
import card1 from '../images/card1.png'
import card2 from '../images/card2.png'
import card3 from '../images/card3.png'
import Footerhomepage from './Footerhomepage'



const Homepage = () => {
  return (
    <div>
    <div>
        <p></p>
        <div className='Firstcontainer'>
           <div className='Firstcontainerchild'>
                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h1>
                <button className='Homebutton'> <Link to='/contact' className='Contactuslink'>Contact Us </Link></button>
           </div>
        </div>

        <div className='Secondcontainer'>
           <div className='Posts'>
                <p className='Ptag'> Latest blog posts </p>
                <h4 className='Blogheading'> Lorem ipsum dolor sit amet ctetur. </h4><br/>
                <div className='Cards'>
                <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={card1} class="card-img-top cardimages" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
    <button className='Continuereading'> Continue reading </button>
  </div>
  
  <div class="col">
    <div class="card h-100">
      <img src={card2} class="card-img-top cardimages" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
    <button className='Continuereading'> Continue reading </button>
  </div>
  
  <div class="col">
    <div class="card h-100">
      <img src={card3} class="card-img-top cardimages" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
    <button className='Continuereading'> Continue reading </button>
  </div>
</div>
                </div>
           </div>
        </div>
    </div>
    <Footerhomepage></Footerhomepage>
    </div>

  

  )
}

export default Homepage