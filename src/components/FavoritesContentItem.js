import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteItemFromCart, setItemInCart} from "../store/reducers/cartReducer";
import {Link} from "react-router-dom";

// images
import cross from "../svg/remove-icon.svg";


const FavoritesContentItem = ({item, handleClick}) => {

  const itemsBag = useSelector(state => state.cart.itemsInCart);
  
  const isItemInCard = itemsBag.some(elem => elem.id === item.id);
  
  const dispatch = useDispatch();

  const addToBag = (e) => {
    e.stopPropagation();
    if(isItemInCard) {
      dispatch(deleteItemFromCart(item.id))
    } else {
      dispatch(setItemInCart(item))
    }
  }
  
  return (
    <>
      <div className="bag__container" key={item.id}>
        <img src={item.images[1]} className="bag__image" alt="bag" />
        <div className="bag__descrContainer">
          <p className="bag__itemName">
            <Link to={`${item.id}`}>{item.name}</Link>
          </p>
        </div>
      </div>
      <div className="bag__removeContainer">
        <button className="toBag__button" onClick={addToBag}>
          {isItemInCard ? (
              'REMOVE FROM BAG'
            )
            : 'ADD TO BAG'}
        </button>
        <img src={cross} className="bag__cross"
             onClick={() => handleClick(item.id)} alt="cross" />
        <span className="bag__text">REMOVE</span>
      </div>
      <hr/>
    </>
  )
}

export default FavoritesContentItem;