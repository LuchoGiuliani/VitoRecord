import React from "react";

export default function Playlist() {
  return (
    <div id="playlist">
      <h1 className=" p-5 text-2xl text-amber-600 text-center"> Playlist</h1>
      <div  className="playList_container flex justify-center">
        <iframe
          
          src="https://open.spotify.com/embed/playlist/1BmQSQqRCtNkPqw728Pqp0?utm_source=generator&theme=0"
          width="100%"
          height="380"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
