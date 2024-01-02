import React, { useContext } from 'react'
import { hoverContext } from '../context/HoverContext'

import movie from '../assets/images/movie.jpg'
import '../assets/style/HoverDetails.css'

function HoverDetails() {
  const { isDetail, setDetail } = useContext(hoverContext)
  
  const handleFocus = () => {
    setDetail(false)
  }

  const handleBlur = () => {
    setDetail(true)
  }

  return (
    <div className='hoverMain' onMouseOver={handleBlur} onMouseLeave={handleFocus}>
        <img src={movie} alt="" />
        <div className="movieDetails">
            <h1>name</h1>
        </div>
    </div>
  )
}

export default HoverDetails
