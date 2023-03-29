import {useEffect, useState } from "react";

import axios from "axios";

function useGetMovies() {
    const [data, setData] = useState([])

    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=8cb98425b358646bfbec88d5bc5389be&language=en-US&page=500'
  
    useEffect(() => {
      axios.get(url)
        .then(response => response.data)
        .catch(error => console.error(error))
    }, [])
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



    return data;
}

export default useGetMovies;