import axios from "axios";
import {useEffect, useState } from "react";
import playButton from '/src/assets/images/play-button.png'
import like from '/src/assets/images/like.png'
import check from '/src/assets/images/check.png'
import dropDown from '/src/assets/images/dropDown.png'
import React from "react";

const MovieRows = ({title, isPoster, hasNumber}) => {
    
    const [data, setData] = useState([])
    const [hovered, setHovered] = useState(null)


    const handleHover = movieID => {
        setHovered(movieID)
    }

    const handleLeaveHover = () => {
        setHovered(null)
    }

    //getting the movies data
    useEffect(() => {
        axios.get('src/data/MoviesData.json')
            .then(response => {
                setData(data => response.data.movies)
            })
            .catch(error => {
                console.log(error);
            });
    }, [])

    return (
        <div className="movie-rows">
            <h3 className="movie-rows-title">{title}</h3>
            <div className="movie-images-container">
                {data.map(movie => {
                   return (
                    <div key={movie.id} className={`${isPoster ? 'movie-image-wrapper-poster' : 'movie-image-wrapper-background'}`}  
                    onMouseEnter={(event) => handleHover(movie.id)}
                    onMouseLeave={(event) => handleLeaveHover(event)}>
                        {hasNumber ? <span className="movie-rank-text">{movie.id}</span> : null}
                        <img 
                        src={isPoster ? movie.posterImage : movie.backgroundImage} 
                        alt={movie.title}
                        className={`${isPoster ?  'row-movie-image-poster' : 'row-movie-image-background'} ${hovered ? 'disappear' : ''} `}
                        />
                        {hovered === movie.id &&
                            <div className="image-show-hovered-container">
                                <div className="movie-background" 
                                style={{
                                    background: `url(${data[movie.id-1].backgroundImage}) no-repeat center/cover`,
                                    height: '50%',
                                }}>
                                </div>
                                <div className="movie-contents-wrapper">
                                    <div className="hovered-image-button-container">
                                        <div className="hovered-images-button-container-left">
                                            <button>
                                            <img src={playButton} alt="play button" />
                                            </button>
                                            <button>
                                                <img src={check} alt="check button" />
                                            </button>
                                            <button>
                                                <img src={like} alt="like button" />
                                            </button>
                                        </div>
                                        <div className="hovered-images-button-container-right">
                                            <button>
                                                <img src={dropDown} alt="dropDown button" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="movie-hovered-texts">
                                        <p className="age-limit-text"> MA 15+</p>
                                        <p className="episode-text">16 episodes</p>
                                        <p className="resolution-text">HD</p>
                                    </div>

                                    <div className="genres-text-container">
                                        <ul>
                                            {movie.genres.map((genre, index)=> {
                                                return (
                                                    <li key={index}>{genre}</li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                   )
                })}
            </div>
        </div>
        
    )
}

export default MovieRows