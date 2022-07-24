import React from 'react';
import "./header.css";
import {Link} from 'react-router-dom';


const Header = () => {

    return (<div className='header'>
        <div className='headerleft'>
            <Link to="/"><img className='header__icon' alt="img" src="/mimg.png" /></Link>
            <Link to="/movies/popular"  style={{textDecoration : "none"}}><span>POPULAR</span></Link>
            <Link to="/movies/top_rated" style={{textDecoration : "none"}} ><span>TOP-RATED</span></Link>
            <Link to="/movies/upcoming" style={{textDecoration : "none"}}><span>UPCOMING</span></Link>
            <span className='searchbar'>
            <form target={<Link to="/movies/upcoming" />}>
            <input className="searchbarin" type="text" placeholder=" Enter movie name " />
            <button><i className="fa fa-search" aria-hidden="true" /></button>
            </form>
            </span>
        </div>

    </div>)
};

export default Header;