import React from 'react';

import FilterItem from "./FilterItem";


const FilterContent = ({ props, setItemFav }) => {
  
  return (
    <>
      <section className="filter__section">
        <div className="filter__titleContainer">
          <p className="filter__secondTitle">{props[0].type}</p>
        </div>
        <div className="filter__gallery">
          {props.map((item) => (
            <FilterItem item={item} setItemFav={setItemFav}/>
          ))
          }
        </div>
      </section>
    </>
  )
}

export default FilterContent;