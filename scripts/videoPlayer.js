export const videoPlayerInit = () => {

    const videoPlayer = document.querySelector('.video-player');
    const videoButtonPlay = document.querySelector('.video-button__play');
    const videoButtonStop = document.querySelector('.video-button__stop');
    const videoProgress = document.querySelector('.video-progress');
    const videoTimePassed = document.querySelector('.video-time__passed');
    const videoTimeTotal = document.querySelector('.video-time__total');
    const videoVolume = document.querySelector('.video-volume');
    const videoFullscreen = document.querySelector('.video-fullscreen')

    const toggleIcon = () => { 
      if(videoPlayer.paused) { // если видео на паузе, то
         videoButtonPlay.classList.remove('fa-pause'); // удаляем класс fa-pause
         videoButtonPlay.classList.add('fa-play'); // добавляем иконку Play
      } else {
        videoButtonPlay.classList.add('fa-pause'); 
        videoButtonPlay.classList.remove('fa-play');
      }
    }

    const togglePlay = () => { // клик по плееру
      if(videoPlayer.paused) { //если видео на паузе, то
         videoPlayer.play(); // запускаем его, иначе
      } else {
        videoPlayer.pause();
      }
  };

    const stopPlay = () => {
      videoPlayer.pause();
      videoPlayer.currentTime = 0;
    };

    const addZero = n => n < 10 ? '0' + n : n;

    videoPlayer.addEventListener('click', togglePlay); // кликаем по видео и запускаем функцию togglePlay
    videoButtonPlay.addEventListener('click', togglePlay); // клик по иконке

    videoPlayer.addEventListener('play', toggleIcon);
    videoPlayer.addEventListener('pause', toggleIcon);

    videoButtonStop.addEventListener('click', stopPlay);

    videoPlayer.addEventListener('timeupdate', () => {
        const currentTime = videoPlayer.currentTime;
        const duration = videoPlayer.duration;

        videoProgress.value = (currentTime / duration) * 100;

        let minutePassed = Math.floor(currentTime / 60);
        let secondsPassed = Math.floor(currentTime % 60);

        let minuteTotal = Math.floor(duration / 60);
        let secondsTotal = Math.floor(duration % 60);

        videoTimePassed.textContent = `${addZero(minutePassed)}:${addZero(secondsPassed)}`;
        videoTimeTotal.textContent = `${addZero(minuteTotal)}:${addZero(secondsTotal)}`;
    });

    videoProgress.addEventListener('change', () => {
        const duration = videoPlayer.duration;
        const value = videoProgress.value;

        videoPlayer.currentTime = (value * duration) / 100;
    });

    videoFullscreen.addEventListener('click', () => {
      videoPlayer.requestFullscreen();
    });

    videoVolume.addEventListener('input', () => {
        videoPlayer.volume = videoVolume.value / 100;
    });

};