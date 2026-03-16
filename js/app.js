"use strict";

// Components;
import { handleDigitalClock } from "./digitalClock.js";
import { Time } from "./Time.js";

// Elements;
import { hoursWrapper, secondsWrapper } from "./elements.js";

// ---------------------- Create hours number;
let hoursNumberWrapper = [];

for (let i = 1; i <= 12; i++) {
  hoursNumberWrapper.push(`<span style="--index:${i}"><p>${i}</p></span>`);
}
hoursWrapper.insertAdjacentHTML("afterbegin", hoursNumberWrapper.join(""));

// -------------------- Create Seconds bar;
let secondsBarWrapper = [];

for (let i = 1; i <= 60; i += 1) {
  secondsBarWrapper.push(`<span style="--index: ${i}"><p></p></span>`);
}
secondsWrapper.insertAdjacentHTML("afterbegin", secondsBarWrapper.join(""));

// ------------------ Time;
setInterval(Time, 1000);

handleDigitalClock();
