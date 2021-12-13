import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteItemFromCart, setItemInCart} from "../store/reducers/cartReducer";
import useItemInFav from "../hooks/useItemInFav";
import useItemInBag from "../hooks/useItemInBag";


const SaleContentItem = ({item, setItemFav}) => {
  
  const isItemInBag = useItemInBag(item.id);
  
  const isItemInFav = useItemInFav(item.id);
  
  const dispatch = useDispatch();

  const handleClickBag = (e) => {
    e.stopPropagation();
    if(isItemInBag) {
      dispatch(deleteItemFromCart(item.id))
    } else {
      dispatch(setItemInCart(item))
    }
  }

  const handleClickFav = (e) => {
    e.stopPropagation();
    setItemFav(item);
  }

  const percent = 32;

  return (
    <>
      <div className="saleContent__item" key={item.id}>
        <a href="#" className="saleContent__image-link">
          <img src={item.images[0]} className="saleContent__image" alt={item.name}/>
        </a>
        {isItemInFav ? (
          <div className="saleContent__wishlistNew" onClick={handleClickFav}>
          </div>
        ) :
          <div className="saleContent__wishlist" onClick={handleClickFav}>
          </div>
        }
        
        <button type="submit" className="saleContent__button" onClick={handleClickBag}>
          {isItemInBag ? (
              'REMOVE'
            )
            : 'ADD TO BAG'}
        </button>
        <div className="saleContent__rectangle">
          <p className="saleContent__discount">-{percent}%</p>
        </div>
        <span className="saleContent__title">
          <Link to={`${item.id}`}>{item.name}</Link>
        </span>
        <p className="saleContent__price">$ {item.price.value / 100}</p>
        <span className="saleContent__perPrice">$ {(item.price.value / 100 * (100 - percent) / 100).toFixed(1)}</span>
      </div>
    </>
  )
}

export default SaleContentItem;