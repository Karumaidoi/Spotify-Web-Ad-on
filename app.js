let tokenSpotify = "BQCvy_7TYOO5rI_VvieL76uXB-iwGkKUqrGnJsZbjJjQy_0xwOMR2Ozz_ehQR95KPbSo_6_2XoDlEuEi6-qwj6A9K7x6bdQyqHRCSVNs4hxCtE9oM-GptXDX4kmJ0Sv1mn9K0qCj83fydO4ouTAOCYGgANJMHQLCWnUBMQPqNA8MB6vGpgLWuDJJDHCEIAHz4y1tVNeDvcc3TI1Czsujp_Pe";


let player = window.onSpotifyWebPlaybackSDKReady = () => {
    const token = tokenSpotify;
    player = new Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: cb => { cb(token); },
      volume: 0.5
    });
    return player;
}

//
// Ready
player.addListener('ready', ({ device_id }) => {
    console.log('Ready with Device ID', device_id);
  });

  // Not Ready
  player.addListener('not_ready', ({ device_id }) => {
    console.log('Device ID has gone offline', device_id);
  });

  
player.addListener('initialization_error', ({ message }) => { 
    console.error(message);
});

player.addListener('authentication_error', ({ message }) => {
    console.error(message);
});

player.addListener('account_error', ({ message }) => {
    console.error(message);
})

document.getElementById('togglePlay').onclick = function() {
    player.togglePlay();
  };