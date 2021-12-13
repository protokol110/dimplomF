import React from 'react';

// images
import cross from '../svg/cross.svg';

const EnterSearch = ({setEnterSearchIsVisible, setValue}) => {
  
  const closeSearch = () => {
    setEnterSearchIsVisible(prev => !prev);
  }

  return (
    <>
      <section className="enterSearch__section">
        <div className="enterSearch__container">
          <img src={cross} className="enterSearch__cross" alt="cross" onClick={closeSearch} />
          <div className="enterSearch__box">
            <input type="text" name="text" className="enterSearch__input" placeholder="ENTER SEARCH TERMS" onChange={setValue}/>
            <hr className="enterSearch__hr"/>
          </div>
        </div>
      </section>
    </>
  )
}

export default EnterSearch;