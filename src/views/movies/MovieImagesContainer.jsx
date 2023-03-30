
import MovieImagesContainerItem from "./MovieImagesContainerItem";
const MovieImagesContainer = (props) => {

    const {
        data, 
        isPoster, 
        hasNumber
    } = props;

    return (
        <div className="movie-images-container">
                {data.map(movie => {
                   return (
                    <MovieImagesContainerItem movie={movie} 
                    isPoster={isPoster} 
                    hasNumber={hasNumber}
                    key={movie.id}
                    />
                   )
                })}
            </div>
    )
}

export default MovieImagesContainer;