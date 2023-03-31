import React from "react";
import './nav.css';
// import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import home from '../../images/home-icon.svg';
import movie from '../../images/movie-icon.svg';
import search from '../../images/search-icon.svg';
import series from '../../images/series-icon.svg';
import watchlist from '../../images/watchlist-icon.svg';
import original from '../../images/original-icon.svg';
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import {useAuthState} from 'react-firebase-hooks/auth';

const Nav = () => {
    const handleAuth = async () =>{
       const result = await signInWithPopup(auth, provider);
       console.log(result);
    };
  return(
    <nav>
        <a href="/" className="logo__disney">
            <img src={logo} alt="disney" className="logo__img"/>
        </a>
            <div className="navmenu">
                <ul className="navLinks">
                    <li>
                        <a href="#">
                           <img src={home} alt="home" /> 
                           <span>HOME</span>     
                        </a>
                    </li>
                    <li>
                        <a href="#">
                           <img src={search} alt="search" /> 
                           <span>SEARCH</span>     
                        </a>
                    </li>
                    <li>
                        <a href="#">
                           <img src={watchlist} alt="watchlist" /> 
                           <span>WATCHLIST </span>    
                        </a>
                    </li>
                    <li>
                        <a href="#">
                           <img src={original} alt="original" /> 
                           <span>ORIGINALS</span>     
                        </a>
                    </li>
                    <li>
                        <a href="#">
                           <img src={movie} alt="movie" /> 
                           <span>MOVIE</span>     
                        </a>
                    </li>
                    <li>
                        <a href="#">
                           <img src={series} alt="series" /> 
                           <span>SERIES</span>     
                        </a>
                    </li>
                </ul>
            </div>

            <a href="#" className="btn__login" onClick={handleAuth}>LOGIN</a>
       
    </nav>);
};

export default Nav;
