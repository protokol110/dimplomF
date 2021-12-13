import React, {useEffect, useRef, useState} from 'react';
import {NavLink, useParams} from 'react-router-dom';
import {setItemInCart, setItemInFav} from "../store/reducers/cartReducer";
import {useDispatch} from "react-redux";

// images
import wishlist from '../svg/wishlist-icon.svg';
import minus from '../svg/collapse-icon.svg';
import plus from '../svg/Union.svg';
import useItemInFav from "../hooks/useItemInFav";
import useItemInBag from "../hooks/useItemInBag";


const ItemCard = ({data}) => {

  const [productIsVisible, setProductIsVisible] = useState(false);

  const [productPlusIsVisible, setProductPlusIsVisible] = useState(true);

  const [productMinusIsVisible, setProductMinusIsVisible] = useState(false);

  const [shippingIsVisible, setShippingIsVisible] = useState(false);

  const [shippingPlusIsVisible, setShippingPlusIsVisible] = useState(true);

  const [shippingMinusIsVisible, setShippingMinusIsVisible] = useState(false);

  const [fabricIsVisible, setFabricIsVisible] = useState(false);

  const [fabricPlusIsVisible, setFabricPlusIsVisible] = useState(true);

  const [fabricMinusIsVisible, setFabricMinusIsVisible] = useState(false);

  const {id} = useParams();
  
  const isItemInBag = useItemInBag(id);
  
  const isItemInFav = useItemInFav(id);

  const dispatch = useDispatch();

  const addToBag = (e) => {
    e.stopPropagation();
    if(!isItemInBag) {
      dispatch(setItemInCart(data.filter(elem => elem.id === id)[0]))
    }
  }

  const addToFavorites = (e) => {
    e.stopPropagation();
    if(!isItemInFav) {
      dispatch(setItemInFav(data.filter(elem => elem.id === id)[0]))
    }
  }
  
  const showProductContent = () => {
    setProductIsVisible(prev => !prev);
    setProductPlusIsVisible(prev => !prev);
    setProductMinusIsVisible(prev => !prev);
  }

  const showShippingContent = () => {
    setShippingIsVisible(prev => !prev);
    setShippingPlusIsVisible(prev => !prev);
    setShippingMinusIsVisible(prev => !prev);
  }

  const showFabricContent = () => {
    setFabricIsVisible(prev => !prev);
    setFabricPlusIsVisible(prev => !prev);
    setFabricMinusIsVisible(prev => !prev);
  }

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  return (
    <>
      {data.filter((item) => item.id === id)
          .map((item) => (
        <section className="itemCard__section">
          <NavLink to="/" className="itemCard__back">Home</NavLink>
          <img src={item.images[0]} className="itemCard__image" alt="image1"/>
          <img src={item.images[1]} className="itemCard__image itemCard__image-two" alt="image2"/>
          <div className="itemCard__descrContainer">
            <p className="itemCard__title" key={item.id}>{item.name}</p>
            <div>
              <p className="itemCard__miniTitle, itemCard__price, color_black">USD ${item.price.value / 100}</p>
              <p className="itemCard__miniTitle, itemCard__order, color_lightGray">PRE-ORDER</p>
            </div>
            <p className="itemCard__miniTitle, itemCard__color, color_gray">COLOR</p>
            <div className="itemCard__colorRect" style={{ backgroundColor: `${item.color.hex}` }}>
            </div>
            <p className="itemCard__miniTitle, itemCard__size, color_gray">SIZE</p>
            <div className="itemCard__sizeContainer">
              {item.availableSizes.join('').split(',').map(item =>
                <span className="itemCard__size">{item.trim()}</span>
              )}
            </div>
            <div className="itemCard__buttonContainer">
              <button className="itemCard__button" onClick={addToBag}>
                {isItemInBag ? (
                    'ADDED'
                  )
                  : 'ADD TO BAG'}
              </button>
              <div className="itemCard__rectangle">
                <img src={wishlist} className="itemCard__wishlist" alt="wishlist" onClick={addToFavorites} />
              </div>
            </div>
            <div className="itemCard__drop" onClick={showProductContent}>
              {productPlusIsVisible &&
              <img src={plus} className="itemCard__plus" alt="plus"/>
              }
              {productMinusIsVisible &&
              <img src={minus} className="itemCard__minus" alt="minus"/>
              }
              <div className="itemCard__dropText">
                <p className="itemCard__miniTitle, color_black, margin_left">PRODUCT DESCRIPTION</p>
                {productIsVisible &&
                    <p className="itemCard__descrText">{item.description}</p>
                 }
              </div>
            </div>
            <div className="itemCard__drop" onClick={showShippingContent}>
              {shippingPlusIsVisible &&
                  <img src={plus} className="itemCard__plus" alt="plus"/>
                }
              {shippingMinusIsVisible &&
                  <img src={minus} className="itemCard__minus" alt="minus"/>
                }
              <div className="itemCard__dropText">
                <p className="itemCard__miniTitle, color_black, margin_left">SHIPPING & RETURNS</p>
                {shippingIsVisible &&
                    <p className="itemCard__descrText">Saints are a low-waist, drop crotch relaxed boyfriend jean.</p>
                  }
              </div>
            </div>
            <div className="itemCard__drop" onClick={showFabricContent}>
              {fabricPlusIsVisible &&
                  <img src={plus} className="itemCard__plus" alt="plus"/>
                }
              {fabricMinusIsVisible &&
                  <img src={minus} className="itemCard__minus" alt="minus"/>
                }
              <div className="itemCard__dropText">
                <p className="itemCard__miniTitle, color_black, margin_left">FABRIC COMPOSITION</p>
                {fabricIsVisible &&
                    <p className="itemCard__descrText">Saints are a low-waist, drop crotch relaxed boyfriend jean.</p>
                  }
              </div>
            </div>
          </div>
        </section>
          ))
      }
    </>
  )
}

export default ItemCard;

