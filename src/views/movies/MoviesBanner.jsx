import Navbar from "./MoviesNavbar";
import {BsFillPlayFill} from 'react-icons/bs'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {AiOutlineReload} from 'react-icons/ai'
const Banner = () => {
    return (
        <div className="banner">
            <Navbar />
            <div className="movie-contents">
                <h1 className="banner-movie-title">Lucifer</h1>
                <p className="banner-movie-description">Bored with being the Lord of Hell, the devil relocates to Los Angeles, where he opens a nightclub and forms a connection with a homicide detective.</p>
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