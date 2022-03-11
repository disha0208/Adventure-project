import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
 import { useNavigate } from 'react-router-dom';

function Navbar() {

   const navigate=useNavigate();
 
  const handleLogout=()=>{
   window.localStorage.clear();
    navigate('/login')
 }

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  // const isAuth=window.localStorage.getItem('TokenValue');

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRVL
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/About'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/feedback'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Feedback
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/adventure'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Adventure Stories
              </Link>
            </li>
            
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>LOGIN</Button>}
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          <button className='btn1' onClick={handleLogout}>Logout</button> 

            
        </div>
      </nav>
    </>
  );
}

export default Navbar;
