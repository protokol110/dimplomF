import React from 'react';
import {Link} from "react-router-dom";
import useItemInFav from "../hooks/useItemInFav";


const SearchResultsItem = ({item, setItemFav}) => {
  
  const isItemInFav = useItemInFav(item.id);
  
  const handleClickFav = (e) => {
    e.stopPropagation();
    setItemFav(item);
  }

  return (
    <>
      <div className="filter__item" key={item.id}>
        <img  src={item.images[0]} className="filter__image" alt={item.name}/>
        {isItemInFav ? (
            <div className="saleContent__wishlistNew" onClick={handleClickFav}>
            </div>
          ) :
          <div className="saleContent__wishlist" onClick={handleClickFav}>
          </div>
        }
        <span className="filter__title"><Link to={`${item.id}`}>{item.name}</Link></span>
        <span className="filter__price">$ {item.price.value / 100}</span>
      </div>
    </>
  )
}

export default SearchResultsItem;