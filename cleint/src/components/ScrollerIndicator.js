import React from 'react';
import './Scroller.css';
import { Link } from 'react-router-dom';

function ScrollerIndicator(){
  
    const menClothes = useRef(null);

     return(
        <div className='scroll'>
              <Link to='/' className='nav-links-scroller' >
                MEN CLOTHES
              </Link>
              <Link to='/' className='nav-links-scroller' >
                WOMEN CLOTHES
              </Link>
              <Link to='/' className='nav-links-scroller' >
                BABIES CLOTHES
              </Link>
        </div>
     )
};
export default ScrollerIndicator