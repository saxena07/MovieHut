import React, {useState} from 'react';
import "./header.css";
import {Link, useNavigate } from 'react-router-dom';


const Header = () => {
    const [movie, setMovie] = useState([])
    const navigate = useNavigate();
    const buttonclick = () => {
        var link = "/movies/search/" + movie;
        navigate(link);
    }

    return (<div className='header'>
        <div className='headerleft'>
            <Link to="/"><img className='header__icon' alt="img" src="/mimg.png" /></Link>
            <Link to="/movies/popular"  style={{textDecoration : "none"}}><span>POPULAR</span></Link>
            <Link to="/movies/top_rated" style={{textDecoration : "none"}} ><span>TOP-RATED</span></Link>
            <Link to="/movies/upcoming" style={{textDecoration : "none"}}><span>UPCOMING</span></Link>
            <span className='searchbar'>
            <form onSubmit={buttonclick}>
            <input className="searchbarin" type="text" placeholder=" Search for any movie name " onChange={(e) => setMovie(e.target.value)} />
            <button><i className="fa fa-search" aria-hidden="true"/></button>
            {/* <Link to="/movies/search/popular"><i class="fa fa-search" /></Link> */}
            </form>
            </span>
        </div>
        {/* https://api.themoviedb.org/3/search/movie?api_key=5c4669d439aeb1492a2cce0f410b24a4&language=en-US&query=harry%20potter&page=1&include_adult=false */}
    </div>)
};

export default Header;