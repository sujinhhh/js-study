const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});

let randomNumber = Math.ceil(Math.random() * 10);
const text = document.querySelector(".text");
const guess = document.querySelector(".guess");
const lastResult = document.querySelector(".lastResult");
const lowOrhi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessfield");

let guessCount = 1;
let resetButton;

function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guess.textContent = "previous : ";
  }
  guess.textContent += userGuess + " : ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congrets";
    lastResult.style.backgroundColor = "green";
    lowOrhi.textContent = " ";
    setGameOver();
  } else if (guessCount === 5) {
    lastResult.textContent = "gameover";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrhi.textContent = "higher";
    } else if (userGuess > randomNumber) {
      lowOrhi.textContent = "lower";
    }
  }
  guessCount++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";

  text.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}
function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = "";
  }
  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "";
  randomNumber = Math.ceil(Math.random() * 10);
}

for (let i = 1; i < 10; ++i) {
  console.log("$");
}
