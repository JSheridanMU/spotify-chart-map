import React from "react";
import SpotifyPlayer from "react-spotify-web-playback";

export default function Player(props) {
  console.log(props);
  return (
    <SpotifyPlayer
      token={props.token}
      uris={["spotify:track:7Dm3dV3WPNdTgxoNY7YFnc"]}
      autoPlay={false}
      magnifySliderOnHover={false}
      showSaveIcon={true}
      styles={{
        activeColor: '#1DB954',
        bgColor: '#333',
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
