import React from 'react';

import{Route,Routes,BrowserRouter as Router} from 'react-router-dom';
import Home from '../Components/Home/Home';
import Navbar from '../Components/Navbar'


import SignUp from '../Components/SignUp/SignUp';
import Feedback from '../Components/Feedback/Feedback';
import About from '../Components/About/About';
// import ContactUs from '../Components/Contact/AdvenStories';
import Protected from './Protected';
import Login from '../Components/Authentication/Login';
import Adventure from '../Components/Contact/AdvenStories';








export default function MyRouting() {
    return (
        <Router>
                  <Navbar/>
                     
            <Routes>

                <Route path="" element={<Home />} />
                
                <Route path="/about" element={<About />} />
                
       <Route element={<Protected />}>   
       
      
               
        </Route>
               <Route path="/adventure" element={<Adventure />} />
               <Route path="/feedback" element={<Feedback />} />
               <Route path="/login" element={<Login />} />
               
               <Route path="/sign-up" element={<SignUp />} />    
                
                {/* default path setup */}

           
               
               
            

                
           
           
            
                </Routes> 
        </Router>
    )
}
