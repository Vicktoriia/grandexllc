import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

    const video = document.querySelector('iframe');
    const player = new Player(video);

    player.on('timeupdate',  throttle ( onPlay, 1000));

    function onPlay({ seconds }) {
      localStorage.setItem('videoplayer-current-time', seconds);
    }

    player
    .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
    .catch(function(error) {
      switch (error.name) {
          case 'RangeError':
              break;
      }
  });