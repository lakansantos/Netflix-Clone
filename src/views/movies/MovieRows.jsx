import axios from "axios";
import {useEffect, useState } from "react";

const MovieRows = ({title}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('src/data/MoviesData.json')
            .then(response => {
                setData(data => response.data.movies)
                console.log(response.data.movies)
            })
            .catch(error => {
                console.log(error);
            });
    }, [])

    console.log(data)
    return (
        <div className="movie-rows">
            <h3 className="movie-rows-title">{title}</h3>
            <div className="movie-images-container">
                {data.map(movie => {
                    return (
                        <img src={movie.backgroundImage} alt="movie images" key={movie.id} className="row-movie-image" />
                    )
                })}
            </div>
        </div>
        
    )
}

export default MovieRows