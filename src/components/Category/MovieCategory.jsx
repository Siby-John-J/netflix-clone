import React, { useEffect, useState } from 'react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

import speaker from '../../assets/images/speaker.png'
import play from '../../assets/images/play-button-28257.png'
import plus from '../../assets/images/plus.png'
import like from '../../assets/images/like.png'
import arrow from '../../assets/images/down-arrow.png'

function MovieCategory(mov) {
    const [click, isClick] = useState(false)
    const [vlink, setLink] = useState('')

    const opts = {
        height: '300',
        width: '500',
        playVars: {
            autoplay: 1
        }
    }

    async function playTrailer(link) {
        const get = await fetch(`https://api.themoviedb.org/3/movie/${link.id}/videos?api_key=c6b594767e23832fe0619e2ba00756cf`)
        const json = await get.json()

        isClick(prev => !prev)
        const youtube = getYouTubeId('https://www.youtube.com/watch?v=' + json.results[0].key)
        setLink(prev => youtube)
    }
    
    return (
        <>
            <div className="movies" >
                <img className='outer-img' src={'https://image.tmdb.org/t/p/w500/'+ mov.props.backdrop_path} alt=""  />
                <div className="content">
                    <div className="image">
                        {
                        
                            click ? <YouTube videoId={vlink} opts={opts} /> : 
                                <img className='inner-img' src={'https://image.tmdb.org/t/p/w500/'+ mov.props.backdrop_path} alt=""  />
                            
                        }
                        <div className="image-content">
                            <label htmlFor="">{mov.props.original_title}</label>
                            {
                                click ? '' : 
                                    <img className='speaker' src={speaker} alt="" />
                            }
                        </div>
                    </div>
                    <div className="inner-content">
                        <div className="upper-content">
                            {
                                click ? '' : 
                                <>                                
                                    <img className='play' onClick={() => {
                                        playTrailer(mov.props)
                                    }}  src={play} alt="" />
                                    <img className='plus' src={plus} alt="" />
                                    <img className='like' src={like} alt="" />
                                    <img className='arrow' src={arrow} alt="" />
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieCategory