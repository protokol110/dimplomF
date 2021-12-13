import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {proceedToCheckOut} from "../store/reducers/cartReducer";

// components
import CartBagContent from "./CartBagContent";

// images
import maestro from "../svg/maestro-logo.svg";
import visa from "../svg/visa-logo.svg";


const CartBag = () => {

  const [isVisible, setIsVisible] = useState(true);

  const [messageIsVisible, setMessageIsVisible] = useState(false);

  const dispatch = useDispatch();

  const items = useSelector(state => state.cart.itemsInCart);
  
  const count = useSelector(state => state.cart.itemsInCart.map(item =>
    ({id: item.id,
      quantity: item.quantity,
  price: Number(item.price.value)})))
  
  const cost = count.reduce((sum, item) => (+sum + (+item.price / 100) * item.quantity).toFixed(1), 0);
  
    const requestPOST = () => {

    const products = items.map(item => item.id).join(', ');
    
    const url = 'https://modnikky-api.herokuapp.com/api/cart';

    let data = new FormData();
    data.append("json", JSON.stringify(products))

    if(items.length > 0) {
      fetch(url, {
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(response => setMessageIsVisible(true));

      setIsVisible(false);
      dispatch(proceedToCheckOut());
    }
  }

  return (
    <>
      {isVisible
      &&
      <section className="bag__section">
        <NavLink to="/" className="bag__back">Home</NavLink>
        <span className="bag__title">BAG</span>
        <span className="bag__quantity, color_gray">{items.length} items</span>
        <hr/>

      <CartBagContent items={items} count={count} />

      <div className="bag__totalContainer">
        <p className="bag__total">Total USD $ {cost}</p>
        <button className="bag__button" onClick={requestPOST}>PROCEED TO CHECKOUT</button>
        <div className="bag__iconContainer">
          <img src={maestro} className="bag__icon" alt="maestro" />
          <img src={visa} className="bag__icon" alt="visa" />
        </div>
      </div>
      </section>}
      {messageIsVisible
      &&
          <>
            <NavLink to="/" className="bag__back">Back</NavLink>
            <h3 className="bag__message">Thank you for ordering, your items are on their way</h3>
          </>
      }
      </>
  )
}

export default CartBag;

