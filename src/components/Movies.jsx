import React, { useState, useContext, useEffect } from 'react'
import { hoverContext } from '../context/HoverContext'

import MovieCategory from './Category/MovieCategory'
import MovieList from './Category/MovieList'
import HoverDetails from './HoverDetails'
import '../assets/style/Movies.css'
import '../assets/style/responsive.css'

function Movies() {
    const { setHover, isHover, isDetail } = useContext(hoverContext)
    let [pos, setPos] = useState(0)

    const [genres, setGenres] = useState([])

    useEffect(() => {
        async function getMovies() {
            const get = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=c6b594767e23832fe0619e2ba00756cf`)
            const json = await get.json()
            setGenres(prev => [...prev, json])
        }

        getMovies()
    }, [])
    
    return (
        <div className='movieList'>
            <div className="types">
                {
                    genres.length > 0 ? (
                        genres[0].genres.map(data => {
                            return (
                                <MovieList props={data} />
                            )
                        })
                    ) : ''
                }
            </div>
        </div>
    )
}

export default Movies
