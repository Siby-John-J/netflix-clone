
import React from 'react'
import '../assets/style/Navbar.css'
import '../assets/style/responsive.css'

import logo from '../assets/images/netflix-logo.png'
import search from  '../assets/images/search-3-512.png'
import bell from '../assets/images/bell-2-512.png'
import avatar from '../assets/images/avatar.png'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="part1">
            <img src={logo} alt="" />
            <a href="">My List</a>
            <a href="">Movies</a>
            <a href="">Tv Shows</a>
        </div>
        <div className="part2">
          <img className='icon' src={search} alt="" />
          <a href="">Children</a>
          <img className='icon' src={bell} alt="" />
          <img className='avatar' src={avatar} alt="" />
        </div>
    </div>
  )
}

export default Navbar