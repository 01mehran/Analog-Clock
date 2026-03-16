import { hour, minute, seconds } from "./elements.js";

export const Time = () => {
  const date = new Date();
  const currentHours = date.getHours();
  const currentMinutes = date.getMinutes();
  const currentSeconds = date.getSeconds();

  hour.style.transform = `rotate(${currentHours * 30 + currentMinutes / 2}deg)`;
  minute.style.transform = `rotate(${currentMinutes * 6}deg)`;
  seconds.style.transform = `rotate(${currentSeconds * 6}deg)`;
};
