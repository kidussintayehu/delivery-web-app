import React from 'react';
import './Cards.css';
import CardExamples from './CardExamples';
function Cards() {
  return (
    <div className='cards'>
      <h1>Check out some market items!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items_above'>
            <CardExamples
              src='images/men hoodies.jpg'
              label='Men Hoodies'
              path='/items'
            />
            <CardExamples
             src ='images/w shoed.jpg'
             label='Women shoes'
             path='/items'
            />
          </ul>
          <ul className='cards__items'>
            <CardExamples
              src='images/perce 1.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Perce'
              path='/item'
            />
            <CardExamples
              src='images/b dress.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Babies Dresses'
              path='/items'
            />
            <CardExamples
              src='images/m shoees.jpeg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Men shoes'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items_above'>
            <CardExamples
              src='images/cocktail-attire-for-women-208559-1581109992957-square.700x0c.jpg'
              label='Women dinner dress'
              path='/items'
            />
            <CardExamples
             src ='images/cb11af21f3fa771c3127c80ff15b390d.jpg'
             label='Men suits'
             path='/items'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;