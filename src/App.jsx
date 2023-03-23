import axios from "axios"
import { useEffect } from "react"
import "./assets/styles/index.css"
import MovieRows  from "./views/movies/MovieRows"
import Banner from "./views/movies/MoviesBanner"
function App() {

  const url = 'https://api.themoviedb.org/3/movie/popular?api_key=8cb98425b358646bfbec88d5bc5389be&language=en-US&page=500'
  
  useEffect(() => {
    axios.get(url)
      .then(response => console.log(response.data))
      .catch(error => console.error(error))
  }, [])

  return (
    <div className="App">
      <Banner />     
      <MovieRows title="New releases"/>
      <MovieRows title="Top rated"/>
      <MovieRows title="Ntest"/>
    </div>
  )
}

export default App
