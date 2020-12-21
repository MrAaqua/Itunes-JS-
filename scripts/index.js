// подключаем другие js файлы
import { radioPlayerInit } from './radioPlayer.js';
import { musicPlayerInit } from './musicPlayer.js';
import { videoPlayerInit } from './videoPlayer.js';

// ищем и возвращаем селекторы
const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');

// отключаем вкладки, удалив 'active'
const deactivationPlayer = () => {
  temp.style.display = 'none'; // деактивируем заголовок 
  playerBtn.forEach(item => item.classList.remove('active')); // убираем активное значение у селекторов .player-btn
  playerBlock.forEach(item => item.classList.remove('active'));  
};

// подключаем слушатель (addEventListener), добавляем селекторам значение 'active', чтобы стали видимыми
playerBtn.forEach((btn, i) => btn.addEventListener('click', () => {
      deactivationPlayer(); // вызов функции
      btn.classList.add('active');
      playerBlock[i].classList.add('active');
  }));

radioPlayerInit();
musicPlayerInit();
videoPlayerInit();