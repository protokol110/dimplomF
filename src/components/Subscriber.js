import React, {useState} from 'react';

const Subscriber = () => {
  
  const [email, setEmail] = useState('');
  
  const [emailError, setEmailError] = useState('');
  
  const [isVisible, setIsVisible] = useState(true);
  
  const [messageIsVisible, setMessageIsVisible] = useState(false);
  
  const setValue = (e) => {
    setEmail(e.target.value)
  }
  
  const emailPOST = (e) => {
    
    const url = 'https://modnikky-api.herokuapp.com/api/subscription';
    
    const request = {
      "email": email
    }
    
    let data = new FormData();
    data.append("json", JSON.stringify(request));
    
    setEmail(e.target.value);
    
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if(email !== '') {
      if (re.test(String(email).toLowerCase())) {
        fetch(url, {
          method: 'POST',
          body: data,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
          .then(response => setMessageIsVisible(true));
    
        localStorage.setItem('email', email);
        setIsVisible(false);
      } else {
        setEmailError('Please enter valid email')
      }
    } else {
      setEmailError('Please enter your email')
    }
  }
  
  return (
    <>
    {isVisible &&
    <>
      <div className="footer__upper">
        <p className="footer__title">SIGN UP FOR UPDATES</p>
        <p className="footer__text">Sign up for exclusive early sale access and tailored new arrivals.</p>
        {emailError &&
        <div className="footer__error">{emailError}</div>
        }
        <input type="email" name="email" className="footer__input" placeholder="Your email address" onChange={setValue} />
        <button type="submit" className="footer__button" onClick={emailPOST}>JOIN</button>
      </div>
      <hr className="footer__hr"/>
    </>
}
  
  {messageIsVisible &&
  <>
    <h3 className="bag__message">Thank you for subscribing to our newsletter</h3>
  </>
  }
    </>
  )
}

export default Subscriber;