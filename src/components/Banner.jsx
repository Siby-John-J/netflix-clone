import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube'
import getYouTubeID from 'get-youtube-id'

import play from '../assets/images/play-button-28257.png'
import info from '../assets/images/info.png'

import '../assets/style/Banner.css'

function Banner() {
    // const [win, setwin] = useState(window.innerWidth)

    const id = getYouTubeID('https://youtu.be/TcMBFSGVi1c')
    
    const opts = {
        height: '654',
        width: '1560',
        playVars: {
            autoplay: 1
        }
    }
    
    return (
        <div className='mainBanner' onChange={(e) => {
            console.log(window.innerWidth)
        }}>
            <div className="contents">
                <h1 className='bg-black'>Avengers : EndGame</h1>
                <p>
                "Avengers: Endgame" is the epic conclusion to the Marvel Cinematic Universe's Infinity Saga. 
                The film follows the aftermath of "Avengers: Infinity War,"
                </p>
                <div className="btn-wrap">
                    <button className='play-btn'>
                        <img className='player' src={play} alt="none" />
                        Play
                    </button>
                    <button className='info-btn'>
                        <img className='info' src={info} alt="" />
                        More Info
                    </button>
                </div>
            </div>
            <YouTube videoId={id} opts={opts} />
        </div>
    )
}

export default Banner