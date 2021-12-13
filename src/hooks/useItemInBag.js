import React from 'react';
import {useSelector} from "react-redux";

const useItemInBag = (id) => {
 
  const itemsBag = useSelector(state => state.cart.itemsInCart);
  
  return itemsBag.some(elem => elem.id === id);
}

export default useItemInBag;