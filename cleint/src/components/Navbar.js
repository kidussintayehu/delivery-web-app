import React, { useState, useEffect } from 'react';
// import Button from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar(props) {

  const [click, setClick] = useState(false);
  const [, setButton] = useState(true);

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

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            
            <i class="fa fa-shopping-basket" aria-hidden="true"></i>

          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              {props.value[0]}

              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/items'
                className='nav-links'
                onClick={closeMobileMenu}
              >
              {props.value[1]}
              

              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/post'
                className='nav-links'
                onClick={closeMobileMenu}
              >
              {props.value[2]}

              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
              {props.value[3]}
                 
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
              {props.value[4]}
 
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/login'
                className='nav-links'
                onClick={closeMobileMenu}
              >
              {props.value[5]}

              </Link>
            </li>
          
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;