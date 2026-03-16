"use stric";

// Utils;
import { months, weekdays } from "../utils/data.js";

// elements;
import { digitalClock, displayDay, displayFullDate } from "./elements.js";

export const handleDigitalClock = () => {
  const time = new Date();

  // Show name of day;
  displayDay.innerHTML = `${weekdays[time.getDay()]}`;

  // Get current date;
  const currentDate =
    time.getDate() < 10 ? `0${time.getDate()}` : time.getDate();

  displayFullDate.innerHTML = `/ ${
    months[time.getMonth()]
  } / ${currentDate} / ${time.getFullYear()} `;

  // Digital clock;
  setInterval(() => {
    const time = new Date();

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const currentHours = hours < 10 ? `0${hours}` : hours;
    const currentMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const currentSeconds = seconds < 10 ? `0${seconds}` : seconds;

    digitalClock.innerHTML = `${currentHours} : ${currentMinutes} : ${currentSeconds}`;
  }, 1000);
};
