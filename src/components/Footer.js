import React, {useState} from 'react';

// components
import Subscriber from "./Subscriber";

// images
import facebook from '../svg/footer_images/facebook-logo.svg';
import odnoklassniki from '../svg/footer_images/ok-logo.svg';
import instagram from '../svg/footer_images/instagram-logo.svg';
import plus from "../svg/Union.svg";
import minus from "../svg/collapse-icon.svg";


const Footer = () => {
  
  const [serviceIsVisible, setServiceIsVisible] = useState(false);

  const [servicePlusIsVisible, setServicePlusIsVisible] = useState(true);

  const [serviceMinusIsVisible, setServiceMinusIsVisible] = useState(false);

  const [companyIsVisible, setCompanyIsVisible] = useState(false);

  const [companyPlusIsVisible, setCompanyPlusIsVisible] = useState(true);

  const [companyMinusIsVisible, setCompanyMinusIsVisible] = useState(false);

  const [followIsVisible, setFollowIsVisible] = useState(false);

  const [followPlusIsVisible, setFollowPlusIsVisible] = useState(true);

  const [followMinusIsVisible, setFollowMinusIsVisible] = useState(false);

  const [contactIsVisible, setContactIsVisible] = useState(false);

  const [contactPlusIsVisible, setContactPlusIsVisible] = useState(true);

  const [contactMinusIsVisible, setContactMinusIsVisible] = useState(false);

  const showServiceContent = () => {
    setServiceIsVisible(prev => !prev);
    setServicePlusIsVisible(prev => !prev);
    setServiceMinusIsVisible(prev => !prev);
  };

  const showCompanyContent = () => {
    setCompanyIsVisible(prev => !prev);
    setCompanyPlusIsVisible(prev => !prev);
    setCompanyMinusIsVisible(prev => !prev);
  };

  const showFollowContent = () => {
    setFollowIsVisible(prev => !prev);
    setFollowPlusIsVisible(prev => !prev);
    setFollowMinusIsVisible(prev => !prev);
  };

  const showContactContent = () => {
    setContactIsVisible(prev => !prev);
    setContactPlusIsVisible(prev => !prev);
    setContactMinusIsVisible(prev => !prev);
  };

  return (
    <>
      <section className="footer__section">
        <Subscriber />
        <div className="footer__container">

          <div className="footer__box">
            <p className="footer__title">CUSTOMER SERVICE</p>
            <p className="footer__text">CONTACT</p>
            <p className="footer__text">TRACK ORDER</p>
            <p className="footer__text">DELIVERY & RETURNS</p>
            <p className="footer__text">PAYMENT</p>
            <p className="footer__text">MAKE A RETURN</p>
            <p className="footer__text">FAQ</p>
            <hr className="footer__box-hr"/>

            <div className="footer__drop" onClick={showServiceContent}>
              {servicePlusIsVisible &&
            <img src={plus} className="footer__plus" alt="plus"/>
                }
              {serviceMinusIsVisible &&
              <img src={minus} className="footer__minus" alt="minus"/>
               }
              <div>

                <p className="footer__titleMobile">CUSTOMER SERVICE</p>
              {serviceIsVisible &&
                  <div>
            <p className="footer__textMobile">CONTACT</p>
            <p className="footer__textMobile">TRACK ORDER</p>
            <p className="footer__textMobile">DELIVERY & RETURNS</p>
            <p className="footer__textMobile">PAYMENT</p>
            <p className="footer__textMobile">MAKE A RETURN</p>
            <p className="footer__textMobile">FAQ</p>
                  </div>
               }
              </div>
            </div>
          </div>

          <div className="footer__box">
            <p className="footer__title footer__info">INFO</p>
            <p className="footer__text">GIFT VOUCHERS</p>
            <p className="footer__text">SIZE GUIDE</p>
            <p className="footer__text">CAREERS AT MODNIKKY</p>
            <p className="footer__text">ABOUT US</p>
            <p className="footer__text">LEGAL POLICIES</p>
            <hr className="footer__box-hr"/>
            
            <div className="footer__drop" onClick={showCompanyContent}>
              {companyPlusIsVisible &&
            <img src={plus} className="footer__plus" alt="plus"/>
                }
              {companyMinusIsVisible &&
              <img src={minus} className="footer__minus" alt="minus"/>
              }

              <div>
            <p className="footer__titleMobile footer__company">COMPANY</p>

              {companyIsVisible &&
                  <div>
              <p className="footer__textMobile">GIFT VOUCHERS</p>
              <p className="footer__textMobile">SIZE GUIDE</p>
              <p className="footer__textMobile">CAREERS AT MODNIKKY</p>
              <p className="footer__textMobile">ABOUT US</p>
              <p className="footer__textMobile">LEGAL POLICIES</p>
                  </div>
               }
              </div>
            </div>
          </div>

          <div className="footer__box">
            <p className="footer__title">FOLLOW US</p>
            <div className="footer__boxContainer">
              <img src={facebook} className="footer__image" alt="facebook" />
              <p className="footer__text">FACEBOOK</p>
            </div>
            <div className="footer__boxContainer">
              <img src={odnoklassniki} className="footer__image" alt="odnoklassniki" />
              <p className="footer__text">ODNOKLASSNIKI</p>
            </div>
            <div className="footer__boxContainer">
              <img src={instagram} className="footer__image" alt="instagram" />
              <p className="footer__text">INSTAGRAM</p>
            </div>
            <hr className="footer__box-hr"/>
            
            <div className="footer__drop" onClick={showFollowContent}>
              {followPlusIsVisible &&
            <img src={plus} className="footer__plus" alt="plus"/>
               }
              {followMinusIsVisible &&
              <img src={minus} className="footer__minus" alt="minus"/>
              }
              <div>

                <p className="footer__titleMobile">FOLLOW US</p>
              {followIsVisible &&
                  <div className="footer__follow">
            <div className="footer__boxContainer">
            <img src={facebook} className="footer__image" alt="facebook" />
              <p className="footer__textMobile">FACEBOOK</p>
            </div>
            <div className="footer__boxContainer">
            <img src={odnoklassniki} className="footer__image" alt="odnoklassniki" />
              <p className="footer__textMobile">ODNOKLASSNIKI</p>
            </div>
            <div className="footer__boxContainer">
            <img src={instagram} className="footer__image" alt="instagram" />
              <p className="footer__textMobile">INSTAGRAM</p>
            </div>
            </div>
               }
              </div>
            </div>
          </div>

          <div className="footer__box">
            <p className="footer__title">CONTACT US</p>
            <p className="footer__text footer__contact">hello@modnikky.com</p>
            <p className="footer__text footer__contact">+7 910 832 26XX</p>
            <p className="footer__text footer__contact">Visit us at Shalalaeva 23,</p>
            <p className="footer__text footer__contact">Bologoe, Russia</p>
            <hr className="footer__box-hr"/>
            
            <div className="footer__drop" onClick={showContactContent}>
              {contactPlusIsVisible &&
            <img src={plus} className="footer__plus" alt="plus"/>
                }
              {contactMinusIsVisible &&
              <img src={minus} className="footer__minus" alt="minus"/>
              }
              <div>
                <p className="footer__titleMobile">CONTACT US</p>
              {contactIsVisible &&
                  <div>
            <p className="footer__textMobile footer__contact">hello@modnikky.com</p>
            <p className="footer__textMobile footer__contact">+7 910 832 26XX</p>
            <p className="footer__textMobile footer__contact">Visit us at Shalalaeva 23,</p>
            <p className="footer__textMobile footer__contact">Bologoe, Russia</p>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer;