"use strict";
let num = document.querySelector(".number");
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    displayMessage("⛔️ No number!");

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    num.textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    num.style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
      document.querySelector(".again").style.backgroundColor = "#60b347";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  // rest score and random num
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // rest setting
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  num.textContent = "?";
  document.querySelector(".guess").value = "";
  // change style css
  document.querySelector("body").style.backgroundColor = "#222";
  num.style.width = "15rem";
  document.querySelector(".again").style.backgroundColor = "#fff";
});
