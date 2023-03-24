import facebook from '/src/assets/images/facebook.png'
import instagram from '/src/assets/images/instagram.png'
import youtube from '/src/assets/images/youtube.png'
const MovieFooter = () => {
    return (
        <footer>
           <div className="footer-wrapper">
            <div className="social-media-icons-container">
                    <img src={facebook} alt="facebook" />
                    <img src={instagram} alt="instagram"  />
                    <img src={youtube} alt="youtube" />
                </div>
                <div className="footer-links">
                    <div className="footer-col col1">
                        <p>Audio Description</p>
                        <p>Investor Relations</p>
                        <p>Privacy</p>
                        <p>Contact us</p>
                        <button>Service Code</button>
                        <p>&#169; 1997-2023 Netflic, Inc. </p>
                    </div>
                    <div className="footer-col col2">
                        <p>Help Centre</p>
                        <p>Jobs</p>
                        <p>Legal notices</p>
                    </div>
                    <div className="footer-col col3">
                        <p>Gift cards</p>
                        <p>Netflix Shop</p>
                        <p>Cookie preferences</p>
                    </div>
                    <div className="footer-col col4">
                        <p>Media Centre</p>
                        <p>Terms of Use</p>
                        <p>Corporate Information</p>
                    </div>
                </div>
           </div>
        </footer>
    )
}

export default MovieFooter