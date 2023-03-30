import {useEffect, useState } from "react";

import axios from "axios";

function useGetMovies() {
    const [data, setData] = useState([])

    //getting the movies data
    useEffect(() => {
        axios.get('src/data/MoviesData.json')
            .then(response => {
                setData(response.data.movies)
            })
            .catch(error => {
                console.log(error);
            });
    }, [])

    return data;
}

export default useGetMovies;