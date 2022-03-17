import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label} />
          <figure className='cards__item__pic_2-wrap' data-category={props.label_2} />
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
         
          <div className='cards__item__info'>
            <h5 className='cards__item__head'>{props.head_1}</h5><br />
            <p className='text'>{props.text_1}</p>
            <h5 className='cards__item__head'>{props.head_2}</h5><br />
            <p className='text'>{props.text_2}</p>
            
            <h5 className='cards__item__head'>{props.head_4}</h5><br />
            <p className='text'>{props.text_4}</p>
            
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;