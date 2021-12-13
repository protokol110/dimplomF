import React from 'react';
import {useSelector} from "react-redux";

const useItemInFav = (id) => {
  
  const itemsFav = useSelector(state => state.cart.itemsInFav);
  
  return itemsFav.some(elem => elem.id === id);
}

export default useItemInFav;

