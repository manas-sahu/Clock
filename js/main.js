const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
setInterval (() => {
let day = new Date();
let hour = day.getHours() * 30;
let min = day.getMinutes() * deg;
let sec = day.getSeconds() * deg;
hr.style.transform = `rotatez(${hour - (min/12)}deg)`;
mn.style.transform = `rotatez(${min}deg)`;
sc.style.transform = `rotatez(${sec}deg)`;
}, 1000);
