import React, {useEffect, useState} from 'react';
import "./home.css";
import {Link} from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Movielist from "../components/movielist/movielist";

const Home = () => {

    const [ popularMovies, setpopularMovies] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=5c4669d439aeb1492a2cce0f410b24a4&language=en-US&page=1")
        .then(res => res.json())
        .then(data => setpopularMovies(data.results))
    }, [])
    return (<div>
        <div className='poster'>
            <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}>
            {popularMovies.map(movie => ( 
                <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            {" "}<i class="fa fa-star" />
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
            ))}
            </Carousel>
            <Movielist />
        </div>
    </div>)
};

export default Home;

//https://api.themoviedb.org/3/movie/popular?api_key=5c4669d439aeb1492a2cce0f410b24a4&language=en-US&page=1