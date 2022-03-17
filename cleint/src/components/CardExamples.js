import React from 'react';
import { Link } from 'react-router-dom';

function CardExamples(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link_exaple' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label} />
            <img
              className='cards__item__img_example'
              alt='Market products'
              src={props.src}
            />
         
         
        </Link>
      </li>
    </>
  );
}

export default CardExamples;