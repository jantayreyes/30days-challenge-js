function playMusic(e) {
  // When you press a keyword you have a keycode
  const music = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if(!music) return; // this stop the function from running all together

  music.currentTime = 0;  //this is if you want to press the keyword multiple times to hear the song
  // you will have not cooldown to the music
  music.play();
  key.classList.add('playing');
} 

function removeTransition(e) {
  if(e.propertyName !== 'transform') return; //skip it if it's not a transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playMusic);