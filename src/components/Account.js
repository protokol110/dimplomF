import React, {useState} from 'react';

// images
import close_icon from '../svg/close-icon.svg';


const Account = ({setAccountIsVisible, setSignInIsVisible, setSignOutIsVisible}) => {

    const [firstName, setFirstName] = useState('');

    const [firstNameError, setFirstNameError] = useState('');

    const [lastName, setLastName] = useState('');

    const [lastNameError, setLastNameError] = useState('');

    const [email, setEmail] = useState('');

    const [emailError, setEmailError] = useState('');

    const [password, setPassword] = useState('');

    const [passwordError, setPasswordError] = useState('');

    const closeAccount = () => {
        setAccountIsVisible(prev => !prev);
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (!e.target.value) {
            setFirstNameError('Please enter your first name');
        } else {
            setFirstNameError('');
        }
    };

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (!e.target.value) {
            setLastNameError('Please enter your last name');
        } else {
            setLastNameError('');
        }
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if(!e.target.value) {
          setEmailError('Please enter your email');
        } else {
          if(re.test(String(e.target.value).toLowerCase())) {
            setEmailError('')
          } else {
            setEmailError('Please enter valid email');
          }
        }
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 4 || e.target.value.length > 8) {
            setPasswordError('Password should include from 4 to 8 characters');
            if (!e.target.value) {
                setPasswordError('Please enter your password');
            }
        } else {
            setPasswordError('');
        }
    };

    const signIn = () => {
        if(firstNameError === '' && lastNameError === '' && emailError === '' && passwordError === ''
          && firstName !== '' && lastName !== '' && email !== '' && password !== '') {
            setAccountIsVisible(prev => !prev);
            setSignInIsVisible(prev => !prev);
            setSignOutIsVisible(prev => !prev);
        } else {
          setFirstNameError('Please enter the values');
        }
    };

    const enterAccount = () => {
        setAccountIsVisible(prev => !prev);
        setSignInIsVisible(prev => !prev);
        setSignOutIsVisible(prev => !prev);
    };

  return (
    <>
      <section className="account__section">
        <div className="account__container">
          <p className="account__title">CREATE ACCOUNT</p>
          <img src={close_icon} className="account__close" onClick={closeAccount} alt="close_icon" />
        </div>
        <form className="account__form">
            <div className="account__error">{firstNameError}</div>
        <input type="text" name="text" className="account__input" placeholder="First Name" onChange={(e) => handleFirstName(e)} required />
        <hr className="account__hr"/>
            <div className="account__error">{lastNameError}</div>
        <input type="text" name="text" className="account__input" placeholder="Last Name" onChange={(e) => handleLastName(e)} required />
        <hr className="account__hr"/>
            <div className="account__error">{emailError}</div>
        <input type="email" name="email" className="account__input" placeholder="Email" onChange={(e) => handleEmail(e)} required />
        <hr className="account__hr"/>
            <div className="account__error">{passwordError}</div>
        <input type="password" name="password" className="account__input" placeholder="Password" onChange={(e) => handlePassword(e)} required />
        <hr className="account__hr"/>
        </form>
        <div className="account__checkboxContainer">
          <input className="account__checkbox" type="checkbox" />
          <div className="account__checkboxBox">
            <p className="account__text">Let's get personal! We'll send you only the good stuff:</p>
            <p className="account__text">Exclusive early access to Sale, new arrivals and promotions. No nasties.</p>
          </div>
        </div>
        <span className="account__text, color_gray">By signing up you agree to </span>
        <span className="account__text, text-decoration">Terms of Service</span>
        <span className="account__text, color_gray"> and </span>
        <span className="account__text, text-decoration">Privacy Policy</span>
        <button type="submit" className="account__button" onClick={signIn}>SIGN UP</button>
        <p className="account__href" onClick={enterAccount}><a href="#">I HAVE AN ACCOUNT</a></p>
      </section>
    </>
  )
}

export default Account;