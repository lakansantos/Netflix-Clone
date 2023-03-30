import MovieRows from './MovieRows'
import Banner from "./MoviesBanner"
import Navbar from "./MoviesNavbar";
import MovieFooter from "./MovieFooter"

function Index() {
    return (
        <>
            <Navbar />
            <Banner />     
            <MovieRows 
            title="New releases" 
            isPoster={false}
            hasNumber={false}
            />
            <MovieRows 
            title="Top 10 TV shows in Australia today"
            isPoster={true}
            hasNumber={true}
            />
            <MovieRows 
            title="Top 10 Movie shows in Australia today"
            isPoster={true}
            hasNumber={true}
            />
            <MovieRows 
            title="Popular on Netflix"
            isPoster={false}
            hasNumber={false}
            />
            <MovieFooter />
        </>
    )
}


export default Index;