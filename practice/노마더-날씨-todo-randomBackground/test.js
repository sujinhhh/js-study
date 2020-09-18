const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const min = date.getMinutes();
  const hrs = date.getHours();
  const sec = date.getSeconds();
  clockTitle.innerHTML = `${hrs} : ${min} : ${sec < 10 ? `0${sec}` : sec}`;
}

function init() {
  setInterval(getTime, 1000);
}
init();
