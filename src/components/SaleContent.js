import React from 'react';

// components
import SaleContentItem from "./SaleContentItem";

const SaleContent = ({data, color, indexFirst, indexLast, setItemFav}) => {

  return (
    <>
      {data.slice(indexFirst, indexLast).map((item) => (
       <SaleContentItem item={item} color={color} setItemFav={setItemFav} />
      ))
      }
    </>
  )
}

export default SaleContent;




