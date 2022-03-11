import React from 'react'
import Footer from '../../Footer/Footer'
import './AdvenStories.css'
import { Card,Row,Col,Container } from 'react-bootstrap'

export default function Adventure() {

  return (
  
    <div className='card'>
      <div className="card bg-dark text-white">
  <img src="\images\TheGiantSwinginRishikesh.jpg" class="card-img" alt="background" height="550px"/>
  <div className="card-img-overlay">
    <h5 className="card-title">Adventure Stories</h5>
    <p className="card-text">
    Through compelling images and well-crafted stories, research and curated news of interest,
     Adventure.Travel inspires the curious to try new destinations,<br></br> branch out in their activities, 
     interact deeply with nature,
     and experience different cultures in the most respectful way possible..</p>
     <p>
         Life-changing travel must also be sustainable travel.
          By bringing together a growing community of people committed to traveling thoughtfully and considerately,
           we help shape the adventure and eco-tourism industry as it grows. In response to travelers’ desires,
            tour operators, destinations and travel advisors are increasingly working to ensure their experiences
             provide an unforgettable journey in a responsible,
          sustainable way.
     </p>

    {/* <p className="card-text">Last updated 3 mins ago</p> */}

  </div>
</div>
            
     <h1 className='head'>LATEST STORIES</h1>
     <br></br>

     <Container>
  <Row>
    <Col sm={4}>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="/images/large.png" />
  <Card.Body>
    <Card.Title>Molestina</Card.Title>
    <Card.Text>
 
     <p className='para'> “Travelers are increasingly conscious about the size of their carbon footprint when they travel
       and may base their travel decisions on environmental issues.” 
       Read on to learn more about how two creative leaders in Ecuador </p>
    
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>
      </Col>
    <Col sm={4}>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="/images/green.jpg"/>
  <Card.Body>
    <Card.Title>Cotopaxi National Park Trek</Card.Title>
    <Card.Text>
    Picking up the thread of an emotional awakening that leads to climate action, 
    Jorge acknowledges that we are moving now into a phase with travel 
    experiences in which service providers are going beyond 
    simply setting the stage
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>
      </Col>
    <Col sm={4}>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="/images/taj.jpg" />
  <Card.Body>
    <Card.Title>Jewel of India</Card.Title>
    <Card.Text>
    Taj Mahal, a monument that truly has rarified air surrounding it 
    and immaculately kept grounds. However, this is also 
    one of the busiest attractions in India.
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>
<br/>
      </Col>
  </Row>
  
</Container>
   
<Footer/>
      </div>
      
      

  )
}



