"use stric";

let soundInterval = null;
let isSoundOn = false;

export function handleClockSoundEffect() {
  isSoundOn = !isSoundOn;

  if (isSoundOn) {
    if (soundInterval) {
      clearInterval(soundInterval);
    }

    soundInterval = setInterval(() => {
      const clockSound = new Audio("../assets/sound.wav");
      clockSound.play();
    }, 1000);
  } else if (soundInterval) {
    clearInterval(soundInterval);
    soundInterval = null;
  }
}
