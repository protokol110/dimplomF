import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {deleteItemFromFav, setItemInFav} from "../store/reducers/cartReducer";

// constants
import data from '../constants/content';

import Header from "./Header";
import TopSection from "./TopSection";
import Category from "./Category";
import Instagram from "./Instagram";
import Footer from "./Footer";
import Sale from "./Sale";
import ItemCard from "./ItemCard";
import CartBag from "./CartBag";
import Favorites from "./Favorites";

import '../styles/App.sass';
import '../styles/TopSection.sass';
import '../styles/Category.sass';
import '../styles/Sale.sass';
import '../styles/Footer.sass';
import '../styles/EnterSearch.sass';
import '../styles/Account.sass';
import '../styles/SaleCont.sass';
import '../styles/ItemCard.sass';
import '../styles/Bag.sass';
import '../styles/Inst.sass';
import '../styles/Filter.sass';
import '../styles/Block.sass';


function App() {
  
  return (
     <Router>
       <Route exact path="/">
         <MainPage />
       </Route>
       <Route exact path="/:id" >
         <TopSection />
       <ItemCard data={data}/>
       </Route>
       <Route exact path="/bag">
         <CartBag />
       </Route>
       <Route exact path="/favorites">
         <Favorites />
       </Route>
      <Footer />
     </Router>
  );
}

function MainPage() {
  
  const dispatch = useDispatch();

  const itemsFav = useSelector(state => state.cart.itemsInFav);
  
  const setItemFav = (item) => {
    const isItemInFav = itemsFav.some(elem => elem.id === item.id);
    if (isItemInFav) {
      dispatch(deleteItemFromFav(item.id));
    } else {
      dispatch(setItemInFav(item));
    }
  }

  return (
  <>
    <Header setItemFav={setItemFav}/>
    <Category setItemFav={setItemFav}/>
    <Sale data={data} setItemFav={setItemFav}/>
    <Instagram />
  </>
  )
}

export default App;



