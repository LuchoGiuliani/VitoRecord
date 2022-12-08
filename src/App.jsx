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
import { useEffect } from 'react'
import {motion} from 'framer-motion'
function App() {
  const [mousePosition, setMousePosition] = useState({
    x:0,
    y:0
  });
  console.log(mousePosition);

  useEffect(()=> {
    const mouseMove = e => {
      setMousePosition({
        x : e.clientX,
        y : e.clientY
      })

  }

  window.addEventListener("mousemove", mouseMove);

  return () => {
    window.removeEventListener("mousemove", mouseMove);
  }
},[]);

const variants = {
  default: {
    x: mousePosition.x - 12,
    y: mousePosition.y - 12
  }
}
 

  return (
    <div className="App ">
      <motion.div 
      className="cursor"
      variants={variants}
      animate= "default" />
     
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
