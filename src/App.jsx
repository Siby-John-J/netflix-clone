import { useState } from 'react'
import { hoverContext } from './context/HoverContext'

import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Movies from './components/Movies'
import './assets/style/App.css'

function App() {
  const [isHover, setHover] = useState(false)
  const [isDetail, setDetail] = useState(false)

  return (
    <>
        <Navbar />
        <Banner />
         <hoverContext.Provider value={{ isHover, setHover, isDetail, setDetail }}>
          <Movies />
         </hoverContext.Provider>
    </>
  )
}

export default App
