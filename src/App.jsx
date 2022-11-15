import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './index.css'
import './components/navBar.css'
import './components/gridArtist.css'
import NavBar from './components/NavBar'
import Playlist from './components/Playlist'
import Trabajo from './components/Trabajo'
import GridArtist from './components/GridArtist'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
 

  return (
    <div className="App ">
     
       {/* navBar */}
       <NavBar />

       {/* YoutubeChannel */}
       <GridArtist />
       {/* OurWork */}
       <Trabajo />  
       {/* Playlist */}
       <Playlist />  

       {/* Contact */}
     

       {/* Footer */}
       <Footer />


    </div>
  )
}

export default App
