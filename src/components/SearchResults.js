import React from 'react';

// components
import SearchResultsItem from "./SearchResultsItem";
import FetchMoreButton from "./FetchMoreButton";

const SearchResults = ({props, visible, setVisible, setItemFav}) => {
  
  return (
    <section className="filter__section">
      <p className="filter__secondTitle">Search results</p>
      <div className="search__gallery">
        {props.length > 0 && props !== [] ?
          props.slice(0, visible).map((item) => (
          <SearchResultsItem item={item} setItemFav={setItemFav}/>
        ))
          :
          <p className="search__notFound">Sorry, there is no matches on your request</p>
          }
      </div>
      {props.length > visible &&
        <FetchMoreButton setVisible={setVisible} />
      }
    </section>
  )
}

export default SearchResults;