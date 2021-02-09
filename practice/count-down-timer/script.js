const spring = "11 feb 2021";

const day = document.getElementById("days");
const hrs = document.querySelector("#hours");
const min = document.querySelector("#mins");
const sec = document.querySelector("#sec");

function countdown() {
  const springDate = new Date(spring);
  const curruntDate = new Date();
  const onday = 24 * 60 * 60 * 1000;

  const differ = new Date(springDate - curruntDate);

  const days = Math.floor(differ / onday);
  const hours = Math.floor((differ % onday) / (1000 * 60 * 60));
  const minutes = differ.getMinutes();
  const second = differ.getSeconds();

  day.textContent = formatTime(days);
  hrs.textContent = formatTime(hours);
  min.textContent = formatTime(minutes);
  sec.textContent = formatTime(second);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
countdown();

setInterval(countdown, 1000);

//  Chagne Background color

const bgSelection = [
  "https://images.unsplash.com/photo-1460295956739-9e21c5aabf8d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2279&q=80",
  "https://images.unsplash.com/photo-1445331713779-ceec1147968f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  "https://images.unsplash.com/photo-1564419431636-fe02f0eff7aa?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1562&q=80",
  "https://images.unsplash.com/photo-1515545109095-cf8abbc557f3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=944&q=80",
  "https://images.unsplash.com/photo-1422207134147-65fb81f59e38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1558&q=80",
];
const backgroundBtn = document.getElementById("bgButton");

backgroundBtn.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * bgSelection.length);
  document.body.style.backgroundImage = `url(${bgSelection[randomNumber]})`;
});
