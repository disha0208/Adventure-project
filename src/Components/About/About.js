import React from 'react'
import Footer from '../../Footer/Footer'
import './About.css'

export default function About() {

  return (
  
    <div className='card'>
      <div className="card bg-dark text-white">
  <img src="/images/img.jpg" class="card-img" alt="background" height="550px"/>
  <div className="card-img-overlay">
    <h5 className="card-title">Why is Travelling an adventure?</h5>
    <p className="card-text">
    Travel inspires the curious to try new destinations,branch out in their activities,<br></br>
     interact deeply with nature,<br></br> and experience different cultures in the most respectful way possible..</p>
    {/* <p className="card-text">Last updated 3 mins ago</p> */}

  </div>
</div>
<Footer/>
      </div>
      
      

  )
}
