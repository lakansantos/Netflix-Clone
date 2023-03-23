import netflixLogo from '/src/assets/images/netflix.png'
import {FiSearch} from 'react-icons/fi'
import {BiBell} from 'react-icons/bi'
import avatarNetflixLogo from '/src/assets/images/avatar.png'
import {IoMdArrowDropdown} from 'react-icons/io'
const Navbar = () => {
    return (
        <nav>
            <div className="links-section">
                <img src={netflixLogo} alt="" className="nav__netflix-logo"/>
                <ul>
                    <li>
                        <a href="" className="active">Home</a>
                    </li>
                    <li>
                        <a href="">TV Shows</a>
                    </li>
                    <li>
                        <a href="">Movies</a>
                    </li>
                    <li>
                        <a href="">New & popular</a>
                    </li>
                    <li>
                        <a href="">My List</a>
                    </li>
                    <li>
                        <a href="">Browse by Languages</a>
                    </li>
                </ul>
            </div>

            <div className="right-section">
                <ul>
                    <li>
                        <a href="">
                            <FiSearch 
                                style={{
                                    fontSize: '1.5rem'
                                }}
                            />
                        </a>
                    </li>
                    <li 
                    style={{
                        display: 'flex',
                        marginBottom: '2px'
                    }}>
                        <a href="">Kids</a>
                    </li>
                    <li>
                        <a href="">
                            <BiBell 
                                style={{
                                    fontSize: '1.5rem'
                                }}
                            />
                        </a>
                    </li>
                    <li>
                        <a href="" 
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                            

                        }}
                        >
                            <img src={avatarNetflixLogo} alt=""
                                style={{
                                    height: '40px',
                                    width: '40px'
                                }} 
                            />
                            <span>
                                <IoMdArrowDropdown style={{fontSize: '1.5rem'}}/>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar;