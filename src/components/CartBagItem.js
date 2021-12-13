import React from 'react';
import {useDispatch} from "react-redux";
import {increaseCount, decreaseCount} from "../store/reducers/cartReducer";
import {Link} from "react-router-dom";

// images
import cross from "../svg/remove-icon.svg";


const CartBagItem = ({item, count, handleClick}) => {

  const countGoods = count.filter(elem => elem.id === item.id);
  
  const dispatch = useDispatch();

  const decreaseGoods = (id) => {
    dispatch(decreaseCount(id))
  }

  const increaseGoods = (id) => {
    dispatch(increaseCount(id))
  }
  
  return (
    <>
      <div className="bag__container" key={item.id}>
        <img src={item.images[1]} className="bag__image" alt="bag" />
        <div className="bag__descrContainer">
          <p className="bag__itemName">
            <Link to={`${item.id}`}>{item.name}</Link>
          </p>
          <p className="bag__text">USD ${item.price.value / 100}</p>
          <div className="bag__selectContainer">
            <p className="bag__text">COLOR:</p>
            <select>
              <option value="item.color.name">{item.color.name}</option>
            </select>
          </div>
          <div className="bag__selectContainer">
            <p className="bag__text">SIZE:</p>
            <select className="bag__selectNumber">
              {item.availableSizes.join('').split(',').map((item) =>
                <option>{item.trim()}</option>
              )}
            </select>
          </div>
          <div className="bag__selectContainer">
            <p className="bag__text">QUANTITY:</p>
            <div className="bag__change" onClick={() => decreaseGoods(item.id)}>
              <p>-</p>
            </div>
            <p className="bag__count">{countGoods[0].quantity}</p>
            <div className="bag__change" onClick={() => increaseGoods(item.id)}>
              <p>+</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bag__removeContainer">
        <img src={cross} className="bag__cross"
             onClick={() => handleClick(item.id)}
             alt="cross" />
        <span className="bag__text">REMOVE</span>
      </div>
      <hr/>
    </>
  )
}

export default CartBagItem;


