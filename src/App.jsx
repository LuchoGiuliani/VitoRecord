import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./index.css";
import "./components/navBar.css";
import "./components/gridArtist.css";
import NavBar from "./components/NavBar";
import Playlist from "./components/Playlist";
import Trabajo from "./components/Trabajo";
import Blob from "./components/Blob";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { motion } from "framer-motion";
import GridArtist from "./components/GridArtist";
function App() {
  return (
    <div className="App ">
      {/* <Blob /> */}

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
  );
}

export default App;
