import React, { useEffect, useState } from 'react'

import MovieCategory from './MovieCategory'

function MovieList(data) {
    const [movies, setMovies] = useState([])


    useEffect(() => {
        async function getMovies() {
            const get = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c6b594767e23832fe0619e2ba00756cf&with_genres=${data.props.id}`)
            const json = await get.json()
            setMovies(json.results)
        }

        getMovies()
    }, [])
    
    return (
        <div className="wrapTypes">
            <h1>{data.props.name}</h1>
            <div className="mainList">
                {
                    movies.slice(0, 6).map((data, index) => {
                        return (
                            <MovieCategory props={data} />
                        )
                    })                    
                }
                </div>
        </div>
    )
}

export default MovieList