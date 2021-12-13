import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

// components
import EnterSearch from "./EnterSearch";
import Account from "./Account";
import SearchResults from "./SearchResults";

// images
import logo from "../svg/brand-logo.svg";
import loupe from "../svg/Vector.svg";
import wishlist from "../svg/wishlist-icon.svg";
import burger from "../svg/Rectangle.svg";
import bag from "../svg/shopping-cart-icon.svg";


const Header = ({setItemFav}) => {

  const [enterSearchIsVisible, setEnterSearchIsVisible] = useState(false);

  const [searchResultsIsVisible, setSearchResultsIsVisible] = useState(false);

  const [signInIsVisible, setSignInIsVisible] = useState(true);

  const [signOutIsVisible, setSignOutIsVisible] = useState(false);

  const [accountIsVisible, setAccountIsVisible] = useState(false);

  const [currentValue, setCurrentValue] = useState('');

  const [data, setData] = useState([]);
  
  const [visible, setVisible] = useState(8);

  const bagItems = useSelector(state => state.cart.itemsInCart);

  const favItems = useSelector(state => state.cart.itemsInFav);

  const fetchData = () => fetch('https://modnikky-api.herokuapp.com/api/catalog')
    .then(res => res.json());

  const setValue = (event) => {
    setCurrentValue(event.target.value);

    if(!currentValue.trim()) {
      setData([]);
    }

    fetchData(currentValue)
      .then(data => data.filter(obj => obj?.type?.toLowerCase().includes(currentValue.toLowerCase()) ||
        obj?.name?.toLowerCase().includes(currentValue.toLowerCase())))
      .then(data => {setData(data);
        setVisible(8);
        setSearchResultsIsVisible(true);
  })
  }

  const showSearch = () => {
    setEnterSearchIsVisible(prev => !prev);
  };

  const showAccount = () => {
    setAccountIsVisible(prev => !prev);
  };

  const signOut = () => {
    setSignOutIsVisible(prev => !prev);
    setSignInIsVisible(prev => !prev);
  }
  
  return (
    <>
      <div className="header__bigContainer">
        <div className="header__mainContainer">
          <div className="header__leftUpperContainer">
            <p className="header__page">NEW ARRIVALS</p>
            <p className="header__page">SHOP</p>
            <p className="header__page">COLLECTIONS</p>
          </div>
          <div className="header__burgerContainer">
            <img src={burger} className="header__burger1" alt="burger" />
            <img src={burger} className="header__burger1" alt="burger" />
            <img src={burger} className="header__burger2" alt="burger" />
          </div>
          <NavLink to="/">
          <img src={logo} className="header__logo" alt="logo" />
          </NavLink>
          <div className="header__rightUpperContainer">
            <div className="header__searchContainer">
              <img src={loupe} className="header__loupe" alt="loupe" />
              <p className="header__page" onClick={showSearch}>SEARCH</p>
            </div>
            {signInIsVisible
            &&
                <p className="header__page" onClick={showAccount}>SIGN IN </p>
              }
            {signOutIsVisible
            &&
                <p className="header__page" onClick={signOut}>SIGN OUT</p>
            }
            <Link to="/bag">
            <img src={bag} className="header__bag" alt="bag" />
             </Link>
            <p className="header__page"><Link to="/bag">BAG ({bagItems.length})</Link></p>
            <div>
              <div className="header__wishlistCont">
              <Link to="/favorites">
              <img src={wishlist} className="header__wishlist" alt="wishlist" />
              </Link>
              <span className="header__count">({favItems.length})</span>
          </div>
            </div>
          </div>
        </div>
        
        {enterSearchIsVisible &&
            <EnterSearch setValue={setValue} fetchData={fetchData}
                         currentValue={currentValue} setEnterSearchIsVisible={setEnterSearchIsVisible} setData={setData} />
        }

        {accountIsVisible &&
            <Account setAccountIsVisible={setAccountIsVisible} setSignInIsVisible={setSignInIsVisible}
                     setSignOutIsVisible={setSignOutIsVisible}/>
        }
      </div>

        <div className="header__lowerContainer">
          <h1 className="header__header">NEW COLLECTION</h1>
          <p className="header__text">Our easiest chuck-on-and-go staples come with a serious style heritage<br/>
            that’s liberating, sexy, comfy and supremely cool.</p>
          <button type="submit" className="header__button">SHOP NEW ARRIVALS</button>
        </div>

      {searchResultsIsVisible &&
      <SearchResults props={data} visible={visible} setVisible={setVisible} setItemFav={setItemFav}/>
        }

    </>
  )
}

export default Header;



