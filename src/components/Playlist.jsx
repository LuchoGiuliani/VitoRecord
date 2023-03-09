import React from "react";

export default function Playlist() {
  return (
    <div id="playlist">
      <h1 className=" p-5 text-bold text-lg sm:text-5xl text-amber-600 text-center">
        {" "}
        Playlist
      </h1>
      <div className="playList_container flex justify-center">
        <iframe
          src="https://open.spotify.com/embed/playlist/1BmQSQqRCtNkPqw728Pqp0?utm_source=generator&theme=0"
          width="100%"
          height="380"
          allowFullScreen=""
          allow="autoplay; clipboard-write; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
