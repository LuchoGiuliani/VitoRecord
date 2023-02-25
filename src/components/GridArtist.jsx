import React from "react";
import { useTypewriter } from "react-simple-typewriter";
export default function GridArtist() {
 
  return (
    <div className=" top-48 p-5">
     
      <iframe 
      width="100%" 
      height="600px" 
      src="https://www.youtube.com/embed/videoseries?list=PL6T13FK9c-7OlcKl96DNgbyXH25Yt9vQe" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>

      </iframe>
      {/* <div className="grid_artist">
        <div className="leftSide">
        <div className="artist_play"><img src="images/img1.png" alt="" /></div>
        <div className="artist_play"><img src="images/img4.png" alt="" /></div>
        
        </div>
        <div className="right_side">
        <div className="artist_play"><img src="images/img3.png" alt="" /></div>
        <div className="artist_play"><img src="images/img2.png" alt="" /></div>
        <div className="artist_play"><img src="images/img5.png" alt="" /></div>
        </div>
      </div> */}
    </div>

  );
}