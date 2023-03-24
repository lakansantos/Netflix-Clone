import axios from "axios";
import {useEffect, useState } from "react";
import React from "react";
const MovieRows = ({title, isPoster}) => {
    const [data, setData] = useState([])
    const [hovered, setHovered] = useState(null)
    useEffect(() => {
        axios.get('src/data/MoviesData.json')
            .then(response => {
                setData(data => response.data.movies)
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
                    return isPoster ? (
                        <div key={movie.id} className="movie-image-wrapper-poster">
                            <span className="movie-rank-text">{movie.id}</span>
                            <img 
                            src={movie.posterImage} 
                            alt="movie images"
                            className={'row-movie-image-poster'}
                            />
                            </div>
                    ) : (
                        <div key={movie.id} className="movie-image-wrapper-background">
                        <img 
                        src={movie.backgroundImage} 
                        alt="movie images"
                        className={'row-movie-image-background'}
                        />
                        </div>
                    )
                })}
            </div>
        </div>
        
    )
}

export default MovieRows