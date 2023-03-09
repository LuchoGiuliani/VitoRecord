import React from "react";
import { useTypewriter } from "react-simple-typewriter";
export default function GridArtist() {
  return (
    <div className="pt-10 top-48 p-5">
      <div className="flex justify-between p-6">
        <img className="sm:w-20 sm:h-20 w-10 h-10" src="/images/arrow-l.png" alt="" />
        <img className="sm:w-20 sm:h-20 w-10 h-10" src="/images/arrow-r.png" alt="" />
      </div>
      <iframe
        width="100%"
        height="600px"
        src="https://www.youtube.com/embed/videoseries?list=PL6T13FK9c-7OlcKl96DNgbyXH25Yt9vQe"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
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
