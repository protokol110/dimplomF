import React from 'react';
import {useDispatch} from "react-redux";
import {deleteItemFromCart} from "../store/reducers/cartReducer";

// components
import CartBagItem from "./CartBagItem";


const CartBagContent = ({items, count}) => {

  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(deleteItemFromCart(id))
  }

  return (
    <>
      {items.map((item) => (
      <CartBagItem item={item} count={count} handleClick={handleClick}/>
        ))}
    </>
  )
}

export default CartBagContent;

