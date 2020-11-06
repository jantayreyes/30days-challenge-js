const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90; // we add 90 deg because we set that at default in the CSS.
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  // console.log(seconds);

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes /60)* 360) +90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  //console.log(minutes);

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  }
  
setInterval(setDate, 1000); // set the time in seconds