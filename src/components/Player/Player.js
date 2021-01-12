import React from "react";
import SpotifyPlayer from "react-spotify-web-playback";

export default function Player(props) {
  const track = 'spotify:track:'+props.track
  
  return (
    <SpotifyPlayer
      token={props.token}
      uris={[track]}
      autoPlay={true}
      magnifySliderOnHover={false}
      showSaveIcon={true}
      styles={{
        activeColor: '#1DB954',
        bgColor: '#201f1f',
        color: '#ccc',
        loaderColor: '#fff',
        sliderColor: '#1DB954',
        trackArtistColor: '#ccc',
        trackNameColor: '#fff',
        sliderHandleColor: '#fff',
      }}
    />
  );
}
