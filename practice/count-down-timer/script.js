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
