const gameData = [];

const startGameBtn = document.getElementById("start-game-btn");
const newColorBtn = document.getElementById("new-color-btn");
const easyModebtn = document.getElementById("easy-btn");
const hardModebtn = document.getElementById("hard-btn");

const rgbCodeElement = document.querySelector(".color-rgb-code");
const gameEndElement = document.querySelector(".game-end");

const startTextDiv = document.querySelector(".start-text");
const tryAgainText = document.querySelector(".try-again p");

const optionsDiv = document.getElementById("options-div");
const optionList = document.querySelector(".option-list");
var difficulty = 6;
var gameEnd = 0;

startGameBtn.addEventListener("click", startGame);
newColorBtn.addEventListener("click", startGame);
easyModebtn.addEventListener("click", startGame);
hardModebtn.addEventListener("click", startGame);

for (let i = 0; i < 6; i++) {
  optionList.children[i].addEventListener("click", checkAns);
}
