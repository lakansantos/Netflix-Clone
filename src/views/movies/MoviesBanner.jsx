import Navbar from "./MoviesNavbar";
import {BsFillPlayFill} from 'react-icons/bs'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {AiOutlineReload} from 'react-icons/ai'
import movieTitle  from '/src/assets/images/movie-title.png'
import netflixLogo from '/src/assets/images/netflix-logo.png'
const Banner = () => {
    return (
        <div className="banner">
            <Navbar />
            <div className="movie-contents">
               
                <div className="netflix-film-container">
                    <img src={netflixLogo} alt="netflix" className="netflix-logo-banner"/>
                    <p>FILM</p>
                </div>
                <img src={movieTitle} alt="movie title" className="movie-title"/>
                <p className="top-ten-text-container">
                    <span className="top-ten-text-span">TOP 10</span>
                    <span className="rank-today-text">No. 5 in Movies Today</span>
                </p>
                <p className="banner-movie-description">A determined boy accepts a king's challenge to perform three impossible tasks in exchange for a magical elephant - and the chance to chase his destiny.</p>
                <div className="banner-movie-button-container">
                    <button className="banner--play-button">
                        <span><BsFillPlayFill style={{fontSize: '1.7rem'}}/></span>
                        Play
                    </button>
                    <button className="banner--info-button">
                        <span><AiOutlineInfoCircle style={{fontSize: '1.7rem'}} /></span> 
                        More info
                    </button>
                    <div className="guidance-info-container">
                        <div className="icon-container">
                            <AiOutlineReload className="banner-reload-icon"/>
                        </div>
                        <div className="guidance-text-container">
                            <p>PG</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;