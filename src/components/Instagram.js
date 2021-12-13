import React from 'react';

//images
import insta1 from '../svg/instagram_images/insta1.svg';
import insta2 from '../svg/instagram_images/insta2.svg';
import insta3 from '../svg/instagram_images/insta3.svg';
import insta4 from '../svg/instagram_images/insta4.svg';
import insta5 from '../svg/instagram_images/insta5.svg';


const Instagram = () => {
  
  return (
    <>
        <section className="instagram__section">
          <div>
            <span className="instagram__text">SHOP INSTAGRAM</span>
            <span className="instagram__text instagram__title"> SHOP ></span>
          </div>
          <div className="instagram__bigContainer">
            <img src={insta4} className="instagram__firstImage" alt="insta4"/>
            <div className="instagram__container">
              <img src={insta2} className="instagram__image" alt="insta2"/>
              <img src={insta3} className="instagram__image" alt="insta3"/>
              <img src={insta1} className="instagram__image" alt="insta1"/>
              <img src={insta5} className="instagram__image" alt="insta5"/>
            </div>
          </div>
          <p className="instagram__text">#MODNIKKY</p>
        </section>
    </>
  )
}

export default Instagram;