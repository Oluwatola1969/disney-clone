// import StyledComponents from 'styled-components';
import React from "react";
import './login.css'
import ctaOne from '../../images/cta-logo-one.svg';
import ctatwo from '../../images/cta-logo-two.png';

 function Login() {
  return (
    <section className="container__login">
      <div className="content__login">
         <div className="cta-logo-one">
          <img src={ctaOne} alt="ctaone" />
        </div>
        <a href="#" className="btn-login">Get All There</a>
        <p className="text__login">Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/24/2023, the price od Disney+ and the Disney Bundle will increase by 1$</p>
        <div className="cta-logo-two">
          <img src={ctatwo} alt="" />
        </div>
      </div>
    </section>
  );
};


export default Login;