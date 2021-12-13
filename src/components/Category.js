import React from 'react';

// components
import CategoryContent from "./CategoryContent";


const Category = ({setItemFav}) => {

  return (
    <>
      <section className="category__section">
        <div className="category__titleContainer">
         <span className="category__firstTitle">Shop by the</span>
         <span className="category__secondTitle"> Category</span>
        </div>
        <div className="category__container">
         <CategoryContent setItemFav={setItemFav}/>
        </div>
      </section>
    </>
  )
}

export default Category;