import React, {useEffect, useState} from "react"
import "./searchlist.css"
import { useParams } from "react-router-dom"
import Cards from "../../components/card/card"

const SearchList = () => {
    
    const [movieList, setMovieList] = useState([])
    const type = useParams()
    const link = "https://api.themoviedb.org/3/search/movie?api_key=5c4669d439aeb1492a2cce0f410b24a4&language=en-US&query="+ type.type +"&page=1&include_adult=false";
    console.log("link : "+link);
    console.log(type.type);
    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
        console.log(movieList);
    }, [type])

    const getData = () => {
        fetch(link)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? "SEARCH RESULTS FOR : " + type.type : "NOTHING TO SEE").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default SearchList;