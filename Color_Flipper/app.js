//========= 리스트에 나온거 돌아가면서 색 바꾸기
// const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click", () => {
//   //==== */ get random Number between 0-3

//   const randomNumber = getRandomNumber();
//   console.log(randomNumber);

//   document.body.style.background = colors[randomNumber];
//   color.textContent = colors[randomNumber];
// });

// getRandomNumber = () => {
//   //==== > floor 숫자 내림
//   return Math.floor(Math.random() * colors.length);
// };
// console.log(getRandomNumber());

// 아무 랜덤 색 바꾸기
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.background = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
console.log(getRandomNumber());
