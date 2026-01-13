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

displayDay.innerHTML = `${weekdays[time.getDay()]}`;
const day = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
displayFullDate.innerHTML = `/ ${
  months[time.getMonth()]
} / ${day} / ${time.getFullYear()}`;

setInterval(() => {
  const time = new Date();
  const digitalClock = document.querySelector("#digitalClock");

  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  const currentHour = hour < 10 ? "0" + hour : hour;
  const currentMinute = minute < 10 ? "0" + minute : minute;
  const currentSecond = second < 10 ? "0" + second : second;

  digitalClock.innerHTML = `${currentHour} : ${currentMinute} : ${currentSecond}`;
}, 1000);
