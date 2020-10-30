import React, { useState } from "react";

export const Audio = () => {
  const [song, setSong] = useState(0);
  const changeSong = () => {
    if (song === 3) {
      setSong(0);
    } else {
      setSong(song + 1);
    }
  };

  const songs: [string] = ["../media/audio/jerkitout.mp3"];

  return (
    <div className="audiocontainer">
      <div>
        <p>{songs[song]}</p>
        <audio src={songs[song]} controls autoPlay></audio>
      </div>
      <div className="audiobutton">
        <button onClick={changeSong}>Bytt lyd</button>
      </div>
    </div>
  );
};
