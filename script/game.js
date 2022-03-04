var randomNumber;
var randomNumbersArray;

function newColors(event) {
  gameEnd = 0;
  optionList.style.display = "grid";
  startTextDiv.style.display = "none";
  if (event) {
    difficulty = event.target.dataset.diff;
  }

  randomNumbersArray = new Array(difficulty);
  for (let i = 0; i < difficulty; i++) {
    randomNumbersArray[i] = new Array(3);
    randomNumbersArray[i][0] = Math.floor(Math.random() * (300 + 1));
    randomNumbersArray[i][1] = Math.floor(Math.random() * (300 + 1));
    randomNumbersArray[i][2] = Math.floor(Math.random() * (300 + 1));
  }
  randomNumber = Math.floor(Math.random() * difficulty);

  rgbCodeElement.textContent =
    "rgb(" +
    randomNumbersArray[randomNumber][0].toString() +
    ", " +
    randomNumbersArray[randomNumber][1].toString() +
    ", " +
    randomNumbersArray[randomNumber][2].toString() +
    ")";

  for (let i = 0; i < difficulty; i++) {
    optionList.children[i].classList.remove("remove");
    optionList.children[i].style.display = "inline";
    optionList.children[i].style.backgroundColor =
      "rgb(" +
      randomNumbersArray[i][0].toString() +
      "," +
      randomNumbersArray[i][1].toString() +
      "," +
      randomNumbersArray[i][2].toString() +
      ")";
  }
  for (let i = difficulty; i < 6; i++) {
    optionList.children[i].style.display = "none";
  }
}

function checkAns(event) {
  if (gameEnd) {
    return;
  }
  if (event.target.dataset.num == randomNumber) {
    tryAgainText.style.display = "none";
    startGameBtn.style.display = "inline";
    newColorBtn.style.display = "none";
    console.dir(event.target.style);

    for (let i = 0; i < difficulty; i++) {
      const listElement = optionList.children[i];
      listElement.classList.remove("remove");
      listElement.style.backgroundColor = rgbCodeElement.textContent;
    }
    rgbCodeElement.textContent = "Game End!\nYou Won!";
    gameEnd = 1;
  } else {
    event.target.classList.add("remove");
    tryAgainText.style.display = "block";
  }
}
