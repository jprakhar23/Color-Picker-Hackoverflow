function startGame(event) {
  tryAgainText.style.display = "none";
  optionsDiv.style.display = "block";
  startTextDiv.style.display = "none";
  startGameBtn.style.display = "none";
  newColorBtn.style.display = "inline";
  rgbCodeElement.style.display = "block";
  difficulty = event.target.dataset.diff;
  newColors();
}
