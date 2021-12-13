import React, {useState} from 'react';

// components
import FilterContent from "./FilterContent";
import Block from "./Block";

// images
import dress from "../svg/categories_images/dress.svg";
import tees from "../svg/categories_images/tees.svg";
import swimwear from "../svg/categories_images/swimwear.svg";
import denim from "../svg/categories_images/denim.svg";
import tops from "../svg/categories_images/tops.svg";
import beauty from "../svg/categories_images/beauty.svg";


const CategoryContent = ({setItemFav}) => {

  const [isVisible, setIsVisible] = useState(false);

  const [data, setData] = useState([]);

  const [blockData, setBlockData] = useState([]);

  const fetchData = () => fetch('https://modnikky-api.herokuapp.com/api/catalog')
    .then(res => res.json());

  const showContent = (e) => {
    setIsVisible(false);

    fetchData(e.target.textContent)
      .then((data) => data.filter(obj => obj?.type?.includes(e.target.textContent)))
      .then((data) => setData(data))
      .catch((err) => setData([]))
  }

  const showBlock = (e) => {
    setIsVisible(true);
    setData([]);
    setBlockData(e.target.textContent);
  }

  const filterItems = data.length > 0 ? <FilterContent props={data} setItemFav={setItemFav}/> : null
  
  return (
    <>
      <div className="category__contContainer">
        <div className="category__rectContainer">
          <div className="category__rectangle">
            <img src={dress} className="category__image" alt="tees" />
            <p className="category__text" onClick={showContent}>Dresses</p>
          </div>
          <div className="category__rectangle">
            <img src={tees} className="category__image" alt="tees" />
            <p className="category__text" onClick={showContent} >Tees</p>
          </div>
          <div className="category__rectangle">
            <img src={swimwear} className="category__image" alt="swimwear" />
            <p className="category__text" onClick={showContent} >Swimwear</p>
          </div>
          <div className="category__rectangle">
            <img src={denim} className="category__image" alt="denim" />
            <p className="category__text" onClick={showContent} >Denim</p>
          </div>
          <div className="category__rectangle">
            <img src={tops} className="category__image" alt="tops" />
            <p className="category__text" onClick={showBlock} >Tops</p>
          </div>
          <div className="category__rectangle">
            <img src={beauty} className="category__image" alt="beauty" />
            <p className="category__text" onClick={showBlock} >Beauty</p>
          </div>
        </div>
      </div>
      <div>
      {filterItems}

        {isVisible
        &&
        <Block blockData={blockData}/>
          }
      </div>

    </>
)}

export default CategoryContent;


