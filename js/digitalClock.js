"use stric";

// Select elenents;
const displayDay = document.querySelector("#displayDay");
const displayFullDate = document.querySelector("#displayFullDate");

const time = new Date();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Show name of day;
displayDay.innerHTML = `${weekdays[time.getDay()]}`;

// Get current date;
const currentDate = time.getDate() < 10 ? `0${time.getDate()}` : time.getDate();

displayFullDate.innerHTML = `/ ${
  months[time.getMonth()]
} / ${currentDate} / ${time.getFullYear()} `;

// Digital clock;
setInterval(() => {
  const time = new Date();

  const digitalClock = document.querySelector("#digitalClock");

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const currentHours = hours < 10 ? `0${hours}` : hours;
  const currentMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const currentSeconds = seconds < 10 ? `0${seconds}` : seconds;

  digitalClock.innerHTML = `${currentHours} : ${currentMinutes} : ${currentSeconds}`;
}, 1000);
