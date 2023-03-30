import React from "react";
import useGetMovies from "./useGetMovies";
import MovieImagesContainer from './MovieImagesContainer';

const MovieRows = (props) => {
    const {
        title, 
        isPoster, 
        hasNumber
    } = props;

    const data = useGetMovies();

    return (
        <div className="movie-rows">
            <h3 className="movie-rows-title">{title}</h3>
            <MovieImagesContainer 
            data={data} 
            isPoster={isPoster} 
            hasNumber={hasNumber}
            />
        </div>
        
    )
}

export default MovieRows