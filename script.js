"use strict";
console.log("CLOCK");

// VARIABLES AND CONSTANTS
const clock = document.querySelector("#clock");

for (let i = 1; i < 5; i++) {
  clock.innerHTML += `<div class="num num-${i * 3} flex-center">${i * 3}</div>`;
  clock.innerHTML += `<div class="dash dash-${i} flex-center"><div></div><div></div></div>`;
  clock.innerHTML += `<div class="hand-circle hand-circle-${i}"></div>`;
  clock.innerHTML += `<div class="hand hand-${i}"></div>`;
}

const hands = document.getElementsByClassName("hand");

setInterval(() => {
  let d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();
  let date = d.getDate();
  console.log(hours, minutes, seconds, date);
  hands[2].style.transform = `rotate(${seconds * 6}deg)`;
  hands[1].style.transform = `rotate(${minutes * 6}deg)`;
  hands[0].style.transform = `rotate(${hours * 6 + minutes / 2}deg)`;
}, 500);
