"use strict";

const mainScore = document.querySelector(".score");
const options = document.querySelector(".options");
const gameResult = document.querySelector(".game-result");
const paper = document.querySelector(".options__paper");
const rock = document.querySelector(".options__rock");
const scissors = document.querySelector(".options__scissors");
const paperResult = document.querySelector(".result__paper--h");
const rockResult = document.querySelector(".result__rock--h");
const scissorsResult = document.querySelector(".result__scissors--h");
const showResult = document.querySelector(".result");
const resultParagraph = document.querySelector(".result__para");
const playAgainBtn = document.querySelector(".result__play-again");
const rulesBtn = document.querySelector(".rules");
const modalWindow = document.querySelector(".modal");

const paperResult2 = document.querySelector(".result__paper--ai");
const rockResult2 = document.querySelector(".result__rock--ai");
const scissorsResult2 = document.querySelector(".result__scissors--ai");
const arrHumanPick = [paperResult, rockResult, scissorsResult];
const arrAiPick = [paperResult2, rockResult2, scissorsResult2];
const arrAiPickStr = ["paper", "rock", "scissors"];

let gameScore = 0;

const calcResult = function (human, ai) {
  let res;
  if (human === ai) {
    res = "draw";
  } else {
    if (human === "paper") {
      if (ai === "scissors") res = "lose";
      else res = "win";
    }
    if (human === "scissors") {
      if (ai === "rock") res = "lose";
      else res = "win";
    }
    if (human === "rock") {
      if (ai === "paper") res = "lose";
      else res = "win";
    }
  }
  return res;
};

const resolveResult = function (result) {
  if (result === "win") {
    showResult.style.visibility = "visible";
    resultParagraph.textContent = "You win";
    gameScore++;
    mainScore.textContent = `${gameScore}`;
  } else if (result === "lose") {
    showResult.style.visibility = "visible";
    resultParagraph.textContent = "You lose";
    if (gameScore > 0) {
      gameScore--;
      mainScore.textContent = `${gameScore}`;
    }
  } else {
    showResult.style.visibility = "visible";
    resultParagraph.textContent = "It's a draw";
  }
};

const showHumanPick = function (pick) {
  options.style.display = "none";
  gameResult.style.display = "flex";
  if (pick === "paper") {
    paperResult.style.width = "100%";
    paperResult.style.opacity = "1";
    paperResult.style.display = "flex";
  }
  if (pick === "rock") {
    rockResult.style.width = "100%";
    rockResult.style.opacity = "1";
    rockResult.style.display = "flex";
  }
  if (pick === "scissors") {
    scissorsResult.style.width = "100%";
    scissorsResult.style.opacity = "1";
    scissorsResult.style.display = "flex";
  }
};

const showAiPick = function (rndInt) {
  arrAiPick[rndInt].style.width = "100%";
  arrAiPick[rndInt].style.opacity = "1";
  arrAiPick[rndInt].style.display = "flex";
};

paper.addEventListener("click", function () {
  let rndInt;
  let result;
  showHumanPick("paper");
  setTimeout(function () {
    rndInt = Math.floor(Math.random() * 3);
    showAiPick(rndInt);
    result = calcResult("paper", arrAiPickStr[rndInt]);
    if (result === "win") {
      paperResult.classList.add("winner");
    } else if (result === "lose") {
      arrAiPick[rndInt].classList.add("winner");
    }
    resolveResult(result);
  }, 2000);
});
rock.addEventListener("click", function () {
  let rndInt;
  let result;
  showHumanPick("rock");
  setTimeout(function () {
    rndInt = Math.floor(Math.random() * 3);
    showAiPick(rndInt);
    result = calcResult("rock", arrAiPickStr[rndInt]);
    if (result === "win") {
      rockResult.classList.add("winner");
    } else if (result === "lose") {
      arrAiPick[rndInt].classList.add("winner");
    }
    resolveResult(result);
  }, 2000);
});
scissors.addEventListener("click", function () {
  let rndInt;
  let result;
  showHumanPick("scissors");
  setTimeout(function () {
    rndInt = Math.floor(Math.random() * 3);
    showAiPick(rndInt);
    result = calcResult("scissors", arrAiPickStr[rndInt]);
    if (result === "win") {
      scissorsResult.classList.add("winner");
    } else if (result === "lose") {
      arrAiPick[rndInt].classList.add("winner");
    }
    resolveResult(result);
  }, 2000);
});

playAgainBtn.addEventListener("click", function () {
  options.style.display = "grid";
  gameResult.style.display = "none";
  showResult.style.visibility = "hidden";
  arrHumanPick.forEach((el) => {
    el.style.width = "0";
    el.style.opacity = "0";
    el.style.display = "none";
    el.classList.remove("winner");
  });
  arrAiPick.forEach((el) => {
    el.style.width = "0";
    el.style.opacity = "0";
    el.style.display = "none";
    el.classList.remove("winner");
  });
});

const closeModalIcon = document.querySelector(".modal-rules__icon-close");
const closeModalIcon2 = document.querySelector(".modal-rules__icon-close2");

rulesBtn.addEventListener("click", function () {
  modalWindow.style.display = "block";
  modalWindow.classList.add("modal-show-animation");
});

closeModalIcon.addEventListener("click", function () {
  modalWindow.style.display = "none";
});
closeModalIcon2.addEventListener("click", function () {
  modalWindow.style.display = "none";
});
