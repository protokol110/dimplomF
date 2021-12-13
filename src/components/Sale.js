import React, {useState} from 'react';

// components
import SaleContent from "./SaleContent";

// images
import arrow from "../svg/arrow.svg";
import arrowVector from "../svg/arrowVector.svg";

const Sale = ({ data, color, setItemFav }) => {
  
  const [indexFirst, setIndexFirst] = useState(0);
  
  const [indexLast, setIndexLast] = useState(4);
  
  const setRight = () => {
    if(indexLast < data.length) {
      setIndexFirst(indexFirst + 1);
      setIndexLast(indexLast + 1)
    }
  }
  
  const setLeft = () => {
    if(indexFirst > 0) {
      setIndexFirst(indexFirst - 1);
      setIndexLast(indexLast - 1)
    }
  }
  
  return (
    <>
      <section className="sale__section">
        <div className="category__titleContainer">
          <span className="sale__firstTitle">#MODNIKKY_</span>
          <span className="sale__secondTitle">Sale</span>
        </div>
        <div className="sale__gallery">
          <SaleContent data={data} color={color} indexFirst={indexFirst} indexLast={indexLast} setItemFav={setItemFav}/>
          <div>
            {indexFirst > 0 &&
              <img className="sale__switcher-left sale__switcher" onClick={setLeft} src={arrow} alt="arrow"/>
            }
            {indexLast < data.length &&
              <>
              <img className="sale__switcher-right sale__switcher" src={arrow} alt="arrow"/>
              <img className="sale__switcher-arrow sale__switcher" onClick={setRight} src={arrowVector} alt="arrow"/>
              </>
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Sale;

