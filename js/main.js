const deg = 6;

let body = document.querySelector("#main");

const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

let toggle = false;

setClock();

setInterval(setClock, 1000);

function setClock() {
  let day = new Date();
  let hour = day.getHours() * 30;
  let min = day.getMinutes() * deg;
  let sec = day.getSeconds() * deg;
  hr.style.transform = `rotatez(${hour + min / 12}deg)`;
  mn.style.transform = `rotatez(${min}deg)`;
  sc.style.transform = `rotatez(${sec}deg)`;
}

function toggleTheme() {
  toggle = !toggle;
  // if (toggle) {
    body.classList.toggle("light", toggle);
  // } else {
  //   body.classList.remove("light");
  // }
}
