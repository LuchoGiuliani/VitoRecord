import React from "react";

export default function GridArtist() {
  return (
    <div className=" top-48 p-5">
      <div className="titulo text-lg pt-5 pb-5  ">
        {/* <h1 className="text-amber-600 text-2xl">.Nuestras Producciones</h1> */}
      </div>
      <iframe
        width="100%"
        height="600px"
        src="https://www.youtube.com/embed/r_tsEVPRDy4?controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
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
