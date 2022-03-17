import React, { useRef } from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CatagorizedCards() {

  const womenClothes = useRef(null)
  const babiesClothes = useRef(null)
  const menClothes = useRef(null)

  const gotoWomenSection = () => window.scrollTo({
    top: womenClothes.current.offsetTop,
    behavior: "smooth"
  })
  const gotoBabiesSection = () => window.scrollTo({
    top: babiesClothes.current.offsetTop,
    behavior: "smooth"
  })
  const gotoMenSection = () => window.scrollTo({
    top: menClothes.current.offsetTop,
    behavior: "smooth"
  })
  const gotoTop = () => window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });


  return (
    <>
      <div className='scroll'>
        <button className='nav-links-scroller' onClick={gotoMenSection}>
          MEN CLOTHES
        </button>
        <button className='nav-links-scroller' onClick={gotoWomenSection}  >
          WOMEN CLOTHES
        </button>
        <button className='nav-links-scroller' onClick={gotoBabiesSection} >
          BABIES CLOTHES
        </button>
      </div>
      <div className='cards' ref={menClothes}>
        <h1  >MEN CLOTHES</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/men hoodies.jpg'
                label='Men Hoodies'
                label_2="Contact the supplier"
                path='/items/order'
                head_1='composition'
                text_1='100% cotton'
                head_2='Price '
                text_2='1245.64 ETB and 78.9$'

                head_4='Size'
                text_4='1.72 m Men can wear'
              />
              <CardItem
                src='images/m shoees.jpeg'
                label='Men shoes'
                label_2="Contact the supplier"
                path='/items/order'
                head_1='composition'
                text_1='cotton and lather'
                head_2='Price '
                text_2='2552.64 ETB and 88.9$'

                head_4='Size'
                text_4='41 - 42 leg size'
              />
              <CardItem
                src='images/ca16d0e4-ed7c-4748-9698-6069a947f22c.jpeg'
                label='Men Jackets'
                label_2="Contact the supplier"
                path='/items/order'
                head_1='composition'
                text_1='cotton and polyester'
                head_2='Price '
                text_2='1245.64 ETB and 78.9$'

                head_4='Size'
                text_4='1.72 m Men can wear'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/images (2).jpeg'
                label='Men Pants'
                label_2="Contact the supplier"
                head_1='composition'
                text_1='100% cotton'
                head_2='Price '
                text_2='1245.64 ETB and 78.9$'
                path='/items/order'

                head_4='Size'
                text_4='1.72 m Men can wear'
              />
              <CardItem
                src='images/images (3).jpeg'
                label='Men shemiz'
                label_2="Contact the supplier"
                path='/items/order'

                head_1='composition'
                text_1='100% cotton'
                head_2='Price '
                text_2='1245.64 ETB and 78.9$'

                head_4='Size'
                text_4='1.72 m Men can wear'
              />
              <CardItem
                src='images/m hoodue.jpg'
                label='Men sleeve hoodies'
                label_2="Contact the supplier"
                head_1='composition'
                text_1='cotton  '
                head_2='Price '
                text_2='1245.64 ETB and 78.9$'
                path='/items/order'

                head_4='Size'
                text_4='1.72 m Men can wear'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/41ejtp7oGjL.jpg'
                label='Men sportswear'
                label_2="Contact the supplier"
                path='/items/order'

                head_1='composition'
                text_1='100% cotton'
                head_2='Price '
                text_2='1245.64 ETB and 78.9$'

                head_4='Size'
                text_4='1.72 m Men can wear'
              />
              <CardItem
                src='images/143540_1628156597.jpg'
                label='Men sleeve '
                label_2="Contact the supplier"
                path='/items/order'

                head_1='composition'
                text_1='100% cotton'
                head_2='Price '
                text_2='1245.64 ETB and 78.9$'

                head_4='Size'
                text_4='1.72 m Men can wear'
              />
              <CardItem
                src='images/cb11af21f3fa771c3127c80ff15b390d.jpg'
                label='Men suits'
                label_2="Contact the supplier"
                path='/items/order'

                head_1='composition'
                text_1='wool and silk'
                head_2='Price '
                text_2='7890.64 ETB and 123.9$'

                head_4='Size'
                text_4='1.72 m Men can wear'
              />
            </ul>
          </div>
        </div>

        <h1 ref={womenClothes}>WOMEN CLOTHES</h1>
        <div className='cards__container' >
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/cocktail-attire-for-women-208559-1581109992957-square.700x0c.jpg'
                label='Women dinner dress'
                label_2="Contact the supplier"
                path='/items/order'

                head_1='composition'
                text_1='100% cotton'
                head_2='Price '
                text_2='1245.64 ETB and 78.9$'

                head_4='Size'
                text_4='1.72 m women can wear'
              />
              <CardItem
                src='images/w shoed.jpg'
                label='Women shoes'
                label_2="Contact the supplier"
                path='/items/order'

                head_1='composition'
                text_1='leather , canvas'
                head_2='Price '
                text_2='1245.64 ETB and 78.9$'

                head_4='Size'
                text_4='1.72 m women can wear'
              />
              <CardItem
                src='images/Women-Coat-Fashion-Ladies-Retro-Rivet-Zipper-Up-Bomber-Jacket-Casual-Coat-Outwear-Winter-Jacket-Women__05912.1548156368.jpg'
                label='Women Jackets'
                label_2="Contact the supplier"
                path='/items/order'

                head_1='composition'
                text_1='100% leather'
                head_2='Price '
                text_2='1245.64 ETB and 78.9$'

                head_4='Size'
                text_4='1.72 m Men can wear'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/85290e24e72bfe22157114dd6bf9e7a306-200313-03.2x.rsquare.w600.jpg'
                label='Women Pants'
                label_2="Contact the supplier"
                path='/items/order'

                head_1='composition'
                text_1='100% cotton'
                head_2='Price '
                text_2='1245.64 ETB and 78.9$'

                head_4='Size'
                text_4='1.72 m women can wear'
              />
              <CardItem
                src='images/cc92ded9ab9a1e124547249425a17499de105826_original.jpeg'
                label='women hoodies'
                label_2="Contact the supplier"
                path='/items/order'

                head_1='composition'
                text_1='100% cotton'
                head_2='Price '
                text_2='1245.64 ETB and 78.9$'

                head_4='Size'
                text_4='All type of women can wear'
              />
              <CardItem
                src='images/perce 1.jpg'
                label='Women perce'
                label_2="Contact the supplier"
                path='/items/order'

                head_1='composition'
                text_1='100% cotton'
                head_2='Price '
                text_2='1245.64 ETB and 78.9$'

                head_4='Size'
                text_4='1.72 m women can wear'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/casual-dresses-luxury-pearl-beading-short.jpg'
                label='women casual dress'
                label_2="Contact the supplier"
                path='/items/order'

                head_1='composition'
                text_1='100% cotton'
                head_2='Price '
                text_2='1245.64 ETB and 78.9$'

                head_4='Size'
                text_4='1.72 m women can wear'
              />
              <CardItem
                src='images/perc e1.jpg'
                label='women perce '
                label_2="Contact the supplier"
                path='/items/order'

                head_1='composition'
                text_1='100% cotton'
                head_2='Price '
                text_2='1245.64 ETB and 78.9$'

                head_4='Size'
                text_4='1.72 m women can wear'
              />
              <CardItem
                src='images/w shhhoes.jpg'
                label='women shoes'
                label_2="Contact the supplier"
                path='/items/order'

                head_1='composition'
                text_1='100% cotton'
                head_2='Price '
                text_2='1245.64 ETB and 78.9$'

                head_4='Size'
                text_4='1.72 m women can wear'
              />
            </ul>
          </div>
        </div>


        <h1 ref={babiesClothes}>BABIES CLOTHES</h1>
        <div className='cards__container' >
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/babies dress.jpg'
                label='Babies dress'
                label_2="Contact the supplier"
                head_1='composition'
                text_1='100% cotton'
                head_2='Price '
                text_2='450.64 ETB and 35.9$'
                path='/items/order'
                
                head_4='Size'
                text_4='Babies under 7 years can wear'
              />
              <CardItem
                src='images/il_340x270.3694439741_2hfh.jpg'
                label='Babies dress'
                label_2="Contact the supplier"
                head_1='composition'
                text_1='100% cotton'
                head_2='Price '
                text_2='450.64 ETB and 35.9$'
                path='/items/order'
                head_4='Size'
                text_4='Babies under 7 years can wear'
              />
              <CardItem
                src='images/b dresss.jpg'
                label='Babies dress'
                label_2="Contact the supplier"
                head_1='composition'
                text_1='100% cotton'
                head_2='Price '
                text_2='450.64 ETB and 35.9$'
                path='/items/order'
                
                head_4='Size'
                text_4='Babies under 7 years can wear'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/b dresssss.jpg'
                label='Babies dress'
                label_2="Contact the supplier"
                head_1='composition'
                text_1='100% cotton'
                head_2='Price '
                text_2='450.64 ETB and 35.9$'
                path='/items/order'
               
                head_4='Size'
                text_4='Babies under 7 years can wear'
              />
              <CardItem
                src='images/dlyora1489395772911.jpg'
                label='Babies dress'
                label_2="Contact the supplier"
                head_1='composition'
                text_1='100% cotton'
                head_2='Price '
                text_2='450.64 ETB and 35.9$'
                path='/items/order'
               
                head_4='Size'
                text_4='Babies under 7 years can wear'
              />
              <CardItem
                src='images/b dresss.jpg'
                label='Babies dress'
                label_2="Contact the supplier"
                head_1='composition'
                text_1='100% cotton'
                head_2='Price '
                text_2='450.64 ETB and 35.9$'
                path='/items/order'

                head_4='Size'
                text_4='Babies under 7 years can wear'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/b dress.jpg'
                label='Babies dress'
                label_2="Contact the supplier"
                head_1='composition'
                text_1='100% cotton'
                head_2='Price '
                text_2='450.64 ETB and 35.9$'
                path='/items/order'

                head_4='Size'
                text_4='Babies under 7 years can wear'
              />
              <CardItem
                src='images/Flower-Baby-Girls-Dress-2018-New-Sleeveless-Newborn-Dresses-for-Baby-Girls-Summer-Birthday-Party-Dress-Baby-Clothing.jpg'
                label='Babies dress'
                label_2="Contact the supplier"

                head_1='composition'
                text_1='100% cotton'
                head_2='Price '
                text_2='450.64 ETB and 35.9$'
                path='/items/order'

                head_4='Size'
                text_4='Babies under 7 years can wear'
              />
              <CardItem
                src='images/Hf70d0cbaba2a47b387cb2b7453ba50fb0.jpg'
                label='Babies dress'
                label_2="Contact the supplier"

                head_1='composition'
                text_1='100% cotton'
                head_2='Price '
                text_2='450.64 ETB and 35.9$'
                path='/items/order'

                head_4='Size'
                text_4='Babies under 7 years can wear'
              />
            </ul>
          </div>
        </div>
      </div> 

      <div className='arrow'>

        <i className="fa fa-arrow-circle-up" aria-hidden="true" onClick={gotoTop}></i>

      </div>
    </>



  );
}

export default CatagorizedCards;